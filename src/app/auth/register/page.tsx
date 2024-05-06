"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/components/ThemeProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../../util.css";
import Footer from "@/components/homepage/Footer";
import { LOGO } from "@/components/LOGO";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	//INPUTS
	const [username, setUsername] = useState<string>("");
	const [globalName, setGlobalName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [day, setDay] = useState<number | null>(null);
	const [month, setMonth] = useState<number | null>(null);
	const [year, setYear] = useState<number | null>(null);

	const handleUsernameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setUsername(event.target.value);
	};

	const handleGlobalNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setGlobalName(event.target.value);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPassword(event.target.value);
	};

	const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDay(Number(event.target.value));
	};

	const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setMonth(Number(event.target.value));
	};

	const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setYear(Number(event.target.value));
	};

	const formatBirthday = (
		day: number | null,
		month: number | null,
		year: number | null
	): string => {
		if (day === null || month === null || year === null) return "";
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const formattedDay = day.toString().padStart(2, "0");
		const formattedMonth = months[month - 1];
		return `${formattedDay}.${formattedMonth}.${year}`;
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("Username:", username);
		console.log("Global Name:", globalName);
		console.log("Email:", email);
		console.log("Password:", password);
		console.log("Birthday:", formatBirthday(day, month, year));
	};

	// ERRORS
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [globalnameError, setglobalnameError] = useState("");
	const [emailError, setEmailError] = useState("");
	/*
	TODO:
	- Integration with backend
	- Form validation (XSS, SQL Injection, empty forms, etc)
	*/

	let currentYear = new Date().getFullYear();

	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-scroll">
			<main
				className="w-full h-screen flex flex-col justify-center overflow-hidden transition-all ease-in duration-75"
				style={{ background: theme?.theme.colors.background }}>
				<div className="w-full h-3/4 flex flex-row flex-wrap justify-center items-center pr-5 pl-5">
					<div className="w-1/2 h-fit max-w-[800px] min-w-[600px] -mt-16 flex flex-col justify-start items-center">
						<div className="w-1/2 p-3 flex flex-col justify-center items-center select-none drag-none">
							<LOGO
								width="300px"
								height="120px"
								white={!theme?.theme.colors.logo_white}
							/>
							<h1
								style={{ color: theme?.theme.colors.text }}
								className="text-white -translate-y-4 mt-1 font-semibold italic hideon-ipad hideon-phone">
								Simple, user-friendly social media platform with
								the aim of bringing people closer together.
							</h1>
						</div>
					</div>
					<div
						style={{ background: theme?.theme.colors.primary }}
						className="select-none rounded-lg shadow-lg min-h-[200px] h-fit pb-5 max-h-[700px] max-w-[800px] min-w-[480px] w-fit flex flex-row justify-start items-center">
						<div className="w-full h-full flex flex-col justify-start items-center">
							<h1
								style={{ color: theme?.theme.colors.text }}
								className="text-white text-4xl font-bold italic mt-5">
								Create account
							</h1>
							<p
								style={{ color: theme?.theme.colors.text }}
								className="text-white opacity-75 text-base font-base italic mt-1">
								You&apos;ll be part of us in a moment!
							</p>
							<form
								className="select-text w-11/12 max-w-[450px] mt-2"
								onSubmit={handleSubmit}>
								<div className="w-full h-fit group mb-2">
									<label
										htmlFor="username"
										className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
										style={{
											color: theme?.theme.colors.text,
										}}>
										USERNAME *
									</label>
									<input
										style={{
											background:
												theme?.theme.colors.background,
										}}
										autoCorrect="off"
										autoComplete="off"
										autoFocus
										id="username"
										name="username"
										required
										className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
										value={username}
										onChange={handleUsernameChange}
									/>
								</div>
								<div className="w-full h-fit group mb-2">
									<label
										htmlFor="globalname"
										className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
										style={{
											color: theme?.theme.colors.text,
										}}>
										GLOBAL NAME
									</label>
									<input
										style={{
											background:
												theme?.theme.colors.background,
										}}
										autoCorrect="off"
										autoComplete="off"
										autoFocus
										id="globalname"
										name="globalname"
										className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
										value={globalName}
										onChange={handleGlobalNameChange}
									/>
								</div>
								<div className="w-full h-fit group mb-2">
									<label
										htmlFor="email"
										className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
										style={{
											color: theme?.theme.colors.text,
										}}>
										EMAIL *
									</label>
									<input
										style={{
											background:
												theme?.theme.colors.background,
										}}
										autoCorrect="off"
										autoComplete="off"
										id="email"
										type="email"
										name="email"
										required
										className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
										value={email}
										onChange={handleEmailChange}
									/>
								</div>
								<div className="w-full h-fit group mb-2">
									<label
										htmlFor="password"
										className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
										style={{
											color: theme?.theme.colors.text,
										}}>
										PASSWORD *
									</label>
									<input
										style={{
											background:
												theme?.theme.colors.background,
										}}
										autoCorrect="off"
										autoComplete="off"
										id="password"
										type="password"
										name="password"
										required
										className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
										value={password}
										onChange={handlePasswordChange}
									/>
								</div>
								<label
									htmlFor="date_of_birth"
									className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
									style={{ color: theme?.theme.colors.text }}>
									DATE OF BIRTH *
								</label>
								<div
									className="w-full h-fit mb-2 flex flex-row"
									id="date_of_birth">
									<div className="flex flex-col w-full mr-2">
										<select
											style={{
												background:
													theme?.theme.colors
														.background,
												color: theme?.theme.colors.text,
											}}
											className="h-10 p-2 font-semibold rounded-sm cursor-pointer"
											required
											value={day ?? ""}
											onChange={handleDayChange}>
											<option value="" disabled>
												Day
											</option>
											{[...Array(31)].map((_, i) => (
												<option
													key={i + 1}
													value={i + 1}>
													{i + 1}
												</option>
											))}
										</select>
									</div>
									<div className="flex flex-col w-full ml-2 mr-2">
										<select
											style={{
												background:
													theme?.theme.colors
														.background,
												color: theme?.theme.colors.text,
											}}
											className="h-10 p-2 font-semibold rounded-sm cursor-pointer"
											required
											value={month ?? ""}
											onChange={handleMonthChange}>
											<option value="" disabled>
												Month
											</option>
											{[
												"January",
												"February",
												"March",
												"April",
												"May",
												"June",
												"July",
												"August",
												"September",
												"October",
												"November",
												"December",
											].map((month, index) => (
												<option
													key={index + 1}
													value={index + 1}>
													{month}
												</option>
											))}
										</select>
									</div>
									<div className="flex flex-col w-full ml-2">
										<select
											style={{
												background:
													theme?.theme.colors
														.background,
												color: theme?.theme.colors.text,
											}}
											className="h-10 p-2 font-semibold rounded-sm cursor-pointer"
											required
											value={year ?? ""}
											onChange={handleYearChange}>
											<option value="" disabled>
												Year
											</option>
											{[...Array(101)].map((_, i) => (
												<option
													key={i}
													value={
														new Date().getFullYear() -
														i
													}>
													{new Date().getFullYear() -
														i}
												</option>
											))}
										</select>
									</div>
								</div>

								<div className="flex flex-row justify-start items-center mt-7 text-nowrap flex-wrap">
									<input
										className="cursor-pointer border-spacing-1 w-7 h-7 rounded-lg"
										type="checkbox"
										name="checkbox"
										required
									/>
									<div className="flex flex-row justify-start items-center text-nowrap flex-wrap w-10/12">
										<label
											htmlFor="checkbox"
											className="block text-sm font-base opacity-75 ml-2"
											style={{
												color: theme?.theme.colors.text,
											}}>
											I have read the{" "}
										</label>
										<a
											onClick={() => router.push("/privacy-policy")}
											className="text-sm opacity-100 font-base ml-1 cursor-pointer"
											style={{
												color: theme?.theme.colors
													.text_link,
											}}>
											Privacy policies
										</a>
										<label
											htmlFor="checkbox"
											className="block text-sm font-base opacity-75 ml-2"
											style={{
												color: theme?.theme.colors.text,
											}}>
											and{" "}
										</label>
										<a
											onClick={() => router.push("/privacy-policy")}
											className="text-sm opacity-100 font-base ml-1 cursor-pointer"
											style={{
												color: theme?.theme.colors
													.text_link,
											}}>
											Terms of Service
										</a>
										<label
											htmlFor="checkbox"
											className="block text-sm font-base opacity-75 ml-2"
											style={{
												color: theme?.theme.colors.text,
											}}>
											and I accept them.
										</label>
									</div>
								</div>
								<button
									id="register-btn"
									style={{
										background: theme?.theme.colors.accent,
										color: theme?.theme.colors.text,
									}}
									type="submit"
									className="w-full h-10 font-semibold text-xl rounded-sm mt-2 transition-all ease-in hover:opacity-90 hover:rounded-md duration-[45ms]">
									Join SPARK
								</button>
								<div className="flex flex-row w-full justify-start items-center mt-2 select-none">
									<span
										style={{
											color: theme?.theme.colors.text,
										}}
										className="opacity-75 italic text-sm">
										Already have an account?
									</span>
									<a
										className="ml-1 opacity-100 text-sm cursor-pointer"
										style={{
											color: theme?.theme.colors
												.text_link,
										}}
										onClick={() => router.push("/auth/login")}>
										Log in
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
