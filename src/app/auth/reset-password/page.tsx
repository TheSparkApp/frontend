"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/components/ThemeProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../../util.css";
import Footer from "@/components/homepage/Footer";
import { LOGO } from "@/components/LOGO";
import Image from "next/image";

export default function TwoFactorPage() {
	const theme = React.useContext(ThemeContext);
	const [code, setCode] = useState("");
	const [codeError, setCodeError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [btn_status, setbtn_status] = useState("Submit");
	const [newPassword, setNewPassword] = useState("");

	const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCode(event.target.value);
		if (!/^\d+$/.test(event.target.value)) {
			setCodeError("Code must be a number");
		} else setCodeError("");
		if (event.target.value.length < 6 && event.target.value.length != 0) {
			setCodeError("Code requires 6 numbers");
		}
		// if(code.length >= 6 ) handleSubmit;
	};
	const handlePasswordChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setNewPassword(event.target.value);
	};
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setbtn_status("Validating...");
		if (code.trim() === "") {
			setCodeError("Code cannot be empty");
		} else {
			setCodeError("");
		}
		if (!/^\d+$/.test(code)) {
			setCodeError("Code must be a number");
		} else setCodeError("");
		if (code.length < 6) {
			setCodeError("Code requires 6 numbers");
		}
		if (codeError === "") {
			console.log("Code:", code);
		}
		setbtn_status("Submit");
	};

	useEffect(() => {
		setCodeError("Enter Code");
		setPasswordError("Enter new password"); //TODO: Password checker
	}, [window.location.href]);

	/*
	TODO:
	- Integration with backend
	- Form validation (XSS, SQL Injection, empty forms, etc)
	*/

	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-scroll">
			<main
				className="w-full h-screen flex flex-col justify-center overflow-hidden transition-all ease-in duration-75"
				style={{ background: theme?.theme.colors.background }}>
				<div className="w-full h-3/4 flex flex-row flex-wrap justify-center items-center pr-5 pl-5">
					<div
						style={{ background: theme?.theme.colors.primary }}
						className="select-none rounded-lg shadow-lg min-h-[200px] h-fit pb-5 max-w-[800px] min-w-[400px] w-fit flex flex-row justify-start items-center">
						<div className="w-full h-full flex flex-col justify-start items-center">
							<h1
								style={{ color: theme?.theme.colors.text }}
								className="text-white text-4xl font-bold italic mt-5">
								Password reset
							</h1>
							<p
								style={{ color: theme?.theme.colors.text }}
								className="text-white opacity-75 text-base font-base italic mt-1">
								Please enter the code we sent your via email.
							</p>
							<form
								className="select-text w-11/12 max-w-[450px] mt-2"
								onSubmit={handleSubmit}>
								<div className="w-full h-fit">
									<label
										htmlFor="code"
										className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
										style={{
											color: theme?.theme.colors.text,
										}}>
										CODE *
									</label>
									<input
										style={{
											background:
												theme?.theme.colors.background,
											color: theme?.theme.colors.text,
										}}
										autoCorrect="off"
										autoComplete="off"
										id="code"
										maxLength={6}
										name="code"
										required
										className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
										value={code}
										onChange={handleCodeChange}
									/>
									<label
										htmlFor="code"
										className="block text-xs -mt-0 font-bold italic opacity-75 text-red-500">
										{codeError}
									</label>
									<div className="w-full h-fit mt-2">
										<label
											htmlFor="password"
											className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
											style={{
												color: theme?.theme.colors.text,
											}}>
											NEW PASSWORD *
										</label>
										<input
											style={{
												background:
													theme?.theme.colors
														.background,
												color: theme?.theme.colors.text,
											}}
											type="password"
											autoCorrect="off"
											autoComplete="off"
											id="password"
											name="password"
											required
											className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
											value={newPassword}
											onChange={handlePasswordChange}
										/>
										<label
											htmlFor="password"
											className="block text-xs -mt-0 font-bold italic opacity-75 text-red-500">
											{passwordError}
										</label>
									</div>
								</div>
								<button
									id="submit-btn"
									style={{
										background: theme?.theme.colors.accent,
										color: theme?.theme.colors.text,
									}}
									disabled={
										codeError != "" || passwordError != ""
									}
									onClick={handleSubmit}
									type="submit"
									className={`w-full h-10 font-semibold text-xl rounded-sm mt-5 transition-all ease-in hover:opacity-90 hover:rounded-md duration-[45ms] disabled:opacity-50 disabled:hover:rounded-sm disabled:cursor-no-drop`}>
									{btn_status}
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
