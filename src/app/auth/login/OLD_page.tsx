"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/components/ThemeProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthPage() {
	const theme = React.useContext(ThemeContext);
	const [isHovered, setIsHovered] = useState(false);
	const [usernameFocus, setUsernameFocus] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const passwordInputRef = useRef<HTMLInputElement>(null);

	const inputVariants = {
		rest: { scale: 1, transition: { duration: 0.3 } },
		focus: { scale: 1.05, transition: { duration: 0.3 } },
	};

	const buttonVariants = {
		rest: { scale: 1, transition: { duration: 0.3 } },
		hover: { scale: 1.05, transition: { duration: 0.3 } },
	};

	/*
	
	TODO:
	- Integration with backend
	- Form validation (XSS, SQL Injection, etc)
	- Theme for input field (currently the input fields background is always white)
	*/

	return (
		<motion.div className="min-h-screen w-full flex flex-col" style={{ background: theme?.theme.colors.background }}>
			<div className="flex-1 flex items-center justify-center">
				<div className="w-full max-w-sm">
					<div className="text-center">
						<h1 className="text-4xl font-bold" style={{ color: theme?.theme.colors.text }}>Login</h1>
					</div>
					<div className="mt-4">
						<form>
							<motion.div variants={inputVariants} initial="rest" animate={usernameFocus ? "focus" : "rest"}>
								<label htmlFor="username" className="block text-sm font-medium" style={{ color: theme?.theme.colors.text }}>Username</label>
								<input type="text" id="username" name="username"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
									style={{
										borderColor: usernameFocus ? theme?.theme.colors.primary : "gray",
										boxShadow: usernameFocus ? `0 0 0 3px ${theme?.theme.colors.primary}` : "none",
									}}
									onFocus={() => {
										setUsernameFocus(true);
										setPasswordFocus(false);
									}}
									onBlur={() => setUsernameFocus(false)}
								/>
							</motion.div>
							<motion.div variants={inputVariants} initial="rest" animate={passwordFocus ? "focus" : "rest"}>
								<label htmlFor="password" className="block text-sm font-medium" style={{ color: theme?.theme.colors.text }}>Password</label>
								<div className="relative">
									{" "}
									<input autoComplete="off" autoFocus type={isPasswordVisible ? "text" : "password"} id="password" name="password" ref={passwordInputRef}
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
										style={{
											borderColor: passwordFocus ? theme?.theme.colors.primary : "gray",
											boxShadow: passwordFocus ? `0 0 0 3px ${theme?.theme.colors.primary}` : "none",
											textShadow: passwordFocus ? "none" : `0 0 5px rgba(0, 0, 0, 1)`,
											color: passwordFocus ? theme?.theme.colors.primary : "transparent",
										}}
										onFocus={() => setPasswordFocus(true)}
										onBlur={() => {
											setPasswordFocus(false);
										}}/>
									<button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
										onClick={() => {
											setIsPasswordVisible(!isPasswordVisible);
											setPasswordFocus(true);
										}}>
										{isPasswordVisible ? <FiEyeOff /> : <FiEye />}
									</button>
								</div>
							</motion.div>
							<div className="mb-4 mt-10">
								<motion.button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-offset-2" style={{ background: theme?.theme.colors.secondary, color: theme?.theme.colors.text, borderColor: theme?.theme.colors.primary }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} variants={buttonVariants} animate={isHovered ? "hover" : "rest"}>
									Login
								</motion.button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
