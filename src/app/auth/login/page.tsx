"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/components/ThemeProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../../util.css";
import Footer from "@/components/homepage/Footer";
import { LOGO } from "@/components/LOGO";
import Image from "next/image";

export default function LoginPage() {
	const theme = React.useContext(ThemeContext);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    /*
	TODO:
	- Integration with backend
	- Form validation (XSS, SQL Injection, empty forms, etc)
	- Theme for input field (currently the input fields background is always white)
	*/

    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-scroll">
            <main className="w-full h-screen flex flex-col justify-center overflow-hidden transition-all ease-in duration-75" style={{ background: theme?.theme.colors.background }}>
                <div className="w-full h-3/4 flex flex-row flex-wrap justify-center items-center pr-5 pl-5">
                    <div className=" w-1/2 h-fit max-w-[800px] min-w-[600px] -mt-16 flex flex-col justify-start items-center">
                        <div className="w-1/2 p-3 flex flex-col justify-center items-center select-none drag-none">
                            <LOGO width='300px' height='120px' white={!theme?.theme.colors.logo_white} />
                            <h1 style={{ color: theme?.theme.colors.text }} className="text-white -translate-y-4 mt-1 font-semibold italic hideon-ipad hideon-phone">Simple, user-friendly social media platform with the aim of bringing people closer together.</h1>
                        </div>
                    </div>
                    <div style={{ background: theme?.theme.colors.primary }} className="select-none rounded-lg shadow-lg min-h-[200px] h-fit pb-5 max-w-[800px] min-w-[480px] w-fit flex flex-row justify-start items-center">
                        <div className="w-full h-full flex flex-col justify-start items-center">
                            <h1 style={{ color: theme?.theme.colors.text }} className="text-white text-4xl font-bold italic mt-5">Log in to SPARK</h1>
                            <p style={{ color: theme?.theme.colors.text }} className="text-white opacity-75 text-base font-base italic mt-1">Welcome back!</p>
                            <form className="select-text w-11/12 max-w-[450px] mt-2">
                                <div className="w-full h-fit">
                                    <label htmlFor="username" className="block text-xs font-medium opacity-75 mb-1 ml-0.5" style={{ color: theme?.theme.colors.text }}>USERNAME *</label>
                                    <input style={{ background: theme?.theme.colors.background }} autoCorrect="off" autoComplete="off" autoFocus id="username" name="username" required
                                        className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
                                    />
                                    <label htmlFor="username" className="block text-xs -mt-0 font-bold italic opacity-75 text-red-500">{usernameError}</label>
                                </div>
                                <div className="w-full h-fit mt-2">
                                    <label htmlFor="password" className="block text-xs font-medium opacity-75 mb-1 ml-0.5" style={{ color: theme?.theme.colors.text }}>PASSWORD *</label>
                                    <input style={{ background: theme?.theme.colors.background }} type="password" autoCorrect="off" autoComplete="off" autoFocus id="password" name="password" required
                                        className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
                                    />
                                </div>
                                <button id="login-btn" style={{ background: theme?.theme.colors.accent,color: theme?.theme.colors.text }} type="submit"
                                className="w-full h-10 font-semibold text-xl rounded-sm mt-8 transition-all ease-in hover:opacity-90 hover:rounded-md duration-[45ms]">
                                    Log in
                                </button>
                                <div className="flex flex-row w-full justify-start items-center mt-2 select-none">
                                    <span style={{ color: theme?.theme.colors.text }} className="opacity-75 italic text-sm">Don&apos;t have an account?</span>
                                    <a className="ml-1 opacity-100 text-sm" style={{ color: theme?.theme.colors.text_link }} href="/auth/register">Create an account</a>
                                </div>
                            </form>
                        </div>
                        <div className="min-w-[120px] w-1/4 h-full ml-3 mr-6 flex flex-col justify-center hideon-phone hideon-ipad">
                            <Image className="rounded-lg mt-16" alt="qr-code" width={250} height={250} src="/qr_example.png"/>
                            <h1 style={{ color: theme?.theme.colors.text }} className="text-white mt-1 italic text-xl font-bold">With QR-Code</h1>
                            <p style={{ color: theme?.theme.colors.text }} className="text-white mt-2 italic text-sm opacity-75 font-semibold">Scan this QR Code to log in via your phone.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );

}