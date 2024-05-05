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
    const [globalnameError, setglobalnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    /*
	TODO:
	- Integration with backend
	- Form validation (XSS, SQL Injection, empty forms, etc)
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
                    <div style={{ background: theme?.theme.colors.primary }} className="select-none rounded-lg shadow-lg min-h-[200px] h-fit pb-5 max-h-[700px] max-w-[800px] min-w-[480px] w-fit flex flex-row justify-start items-center">
                        <div className="w-full h-full flex flex-col justify-start items-center">
                            <h1 style={{ color: theme?.theme.colors.text }} className="text-white text-4xl font-bold italic mt-5">Create account</h1>
                            <p style={{ color: theme?.theme.colors.text }} className="text-white opacity-75 text-base font-base italic mt-1">You&apos;ll be part of us in a moment!</p>
                            <form className="select-text w-11/12 max-w-[450px] mt-2">
                                <div className="w-full h-fit group mb-2">
                                    <label htmlFor="username" className="block text-xs font-medium opacity-75 mb-1 ml-0.5" style={{ color: theme?.theme.colors.text }}>USERNAME *</label>
                                    <input style={{ background: theme?.theme.colors.background }} autoCorrect="off" autoComplete="off" autoFocus id="username" name="username" required
                                        className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
                                    />
									<div className="h-0 select-none overflow-hidden group-hover:h-10 opacity-0 group-hover:opacity-75 transition-all ease-in duration-75">
										<p style={{ color: theme?.theme.colors.text }} className="text-xs italic">Choose your username, these are unique!</p>
									</div>
                                    <label htmlFor="username" className="block text-xs -mt-0 font-bold italic opacity-75 text-red-500">{usernameError}</label>
                                </div>
								<div className="w-full h-fit group mb-2">
                                    <label htmlFor="globalname" className="block text-xs font-medium opacity-75 mb-1 ml-0.5" style={{ color: theme?.theme.colors.text }}>GLOBAL NAME</label>
                                    <input style={{ background: theme?.theme.colors.background }} autoCorrect="off" autoComplete="off" autoFocus id="globalname" name="globalname"
                                        className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
                                    />
									<div className="h-0 select-none overflow-hidden group-hover:h-10 opacity-0 group-hover:opacity-75 transition-all ease-in duration-75">
										<p style={{ color: theme?.theme.colors.text }} className="text-xs italic">Choose your global name, this can be anything, including names already taken!</p>
									</div>
                                    <label htmlFor="globalname" className="block text-xs -mt-0 font-bold italic opacity-75 text-red-500">{globalnameError}</label>
                                </div>
								<div className="w-full h-fit group mb-2">
                                    <label htmlFor="email" className="block text-xs font-medium opacity-75 mb-1 ml-0.5" style={{ color: theme?.theme.colors.text }}>EMAIL *</label>
                                    <input style={{ background: theme?.theme.colors.background }} autoCorrect="off" autoComplete="off" autoFocus id="email" type="email" name="email" required
                                        className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
                                    />
									<div className="h-0 select-none overflow-hidden group-hover:h-10 opacity-0 group-hover:opacity-75 transition-all ease-in duration-75">
										<p style={{ color: theme?.theme.colors.text }} className="text-xs italic">Enter your valid email!</p>
									</div>
                                    <label htmlFor="email" className="block text-xs -mt-0 font-bold italic opacity-75 text-red-500">{emailError}</label>
                                </div>
								<div className="w-full h-fit group mb-2">
                                    <label htmlFor="password" className="block text-xs font-medium opacity-75 mb-1 ml-0.5" style={{ color: theme?.theme.colors.text }}>PASSWORD *</label>
                                    <input style={{ background: theme?.theme.colors.background }} autoCorrect="off" autoComplete="off" autoFocus id="password" type="email" name="password" required
                                        className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
                                    />
									<div className="h-0 select-none overflow-hidden group-hover:h-10 opacity-0 group-hover:opacity-75 transition-all ease-in duration-75">
										<p style={{ color: theme?.theme.colors.text }} className="text-xs italic">Enter a strong password!</p>
									</div>
                                    <label htmlFor="password" className="block text-xs -mt-0 font-bold italic opacity-75 text-red-500">{passwordError}</label>
                                </div>
								<label htmlFor="date_of_birth" className="block text-xs font-medium opacity-75 mb-1 ml-0.5" style={{ color: theme?.theme.colors.text }}>DATE OF BIRTH *</label>
								<div className="w-full h-fit mb-2 flex flex-row" id="date_of_birth">
									<div className="flex flex-col w-full mr-2">
										<select style={{ background: theme?.theme.colors.background,color: theme?.theme.colors.text }} className="h-10 font-semibold rounded-sm cursor-pointer">
											<option value="" disabled selected>DAY</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
											<option value="13">13</option>
											<option value="14">14</option>
											<option value="15">15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
											<option value="20">20</option>
											<option value="21">21</option>
											<option value="22">22</option>
											<option value="23">23</option>
											<option value="24">24</option>
											<option value="25">25</option>
											<option value="26">26</option>
											<option value="27">27</option>
											<option value="28">28</option>
											<option value="29">29</option>
											<option value="30">30</option>
											<option value="31">31</option>
										</select>
									</div>
									<div className="flex flex-col w-full ml-2 mr-2">
										<select style={{ background: theme?.theme.colors.background,color: theme?.theme.colors.text }} className="h-10 font-semibold rounded-sm cursor-pointer">
											<option value="" disabled selected>Month</option>
											<option value="1">January</option>
											<option value="2">February</option>
											<option value="3">March</option>
											<option value="4">April</option>
											<option value="5">May</option>
											<option value="6">June</option>
											<option value="7">July</option>
											<option value="8">August</option>
											<option value="9">September</option>
											<option value="10">October</option>
											<option value="11">November</option>
											<option value="12">December</option>
										</select>
									</div>
									<div className="flex flex-col w-full ml-2">
										<select style={{ background: theme?.theme.colors.background,color: theme?.theme.colors.text }} className="h-10 font-semibold rounded-sm cursor-pointer">
											<option value="" disabled selected>Year</option>
											<option value="2024">2024</option>
											<option value="2023">2023</option>
											<option value="2022">2022</option>
											<option value="2021">2021</option>
											<option value="2020">2020</option>
											<option value="2019">2019</option>
											<option value="2018">2018</option>
											<option value="2017">2017</option>
											<option value="2016">2016</option>
											<option value="2015">2015</option>
											<option value="2014">2014</option>
											<option value="2013">2013</option>
											<option value="2012">2012</option>
											<option value="2011">2011</option>
											<option value="2010">2010</option>
											<option value="2009">2009</option>
											<option value="2008">2008</option>
											<option value="2007">2007</option>
											<option value="2006">2006</option>
											<option value="2005">2005</option>
											<option value="2004">2004</option>
											<option value="2003">2003</option>
											<option value="2002">2002</option>
											<option value="2001">2001</option>
											<option value="2000">2000</option>
											<option value="1999">1999</option>
											<option value="1998">1998</option>
											<option value="1997">1997</option>
											<option value="1996">1996</option>
											<option value="1995">1995</option>
											<option value="1994">1994</option>
											<option value="1993">1993</option>
											<option value="1992">1992</option>
											<option value="1991">1991</option>
											<option value="1990">1990</option>
											<option value="1989">1989</option>
											<option value="1988">1988</option>
											<option value="1987">1987</option>
											<option value="1986">1986</option>
											<option value="1985">1985</option>
											<option value="1984">1984</option>
											<option value="1983">1983</option>
											<option value="1982">1982</option>
											<option value="1981">1981</option>
											<option value="1980">1980</option>
											<option value="1979">1979</option>
											<option value="1978">1978</option>
											<option value="1977">1977</option>
											<option value="1976">1976</option>
											<option value="1975">1975</option>
											<option value="1974">1974</option>
											<option value="1973">1973</option>
											<option value="1972">1972</option>
											<option value="1971">1971</option>
											<option value="1970">1970</option>
										</select>
									</div>

								</div>

								<div className="flex flex-row justify-start items-center mt-7 text-nowrap flex-wrap">
									<input className="cursor-pointer border-spacing-1 w-7 h-7 rounded-lg" type="checkbox" name="checkbox" required/>
                                    <div className="flex flex-row justify-start items-center text-nowrap flex-wrap w-10/12">
										<label htmlFor="checkbox" className="block text-sm font-base opacity-75 ml-2" style={{ color: theme?.theme.colors.text }}>I have read the </label>
										<a href="/privacy-policy" className="text-sm opacity-100 font-base text-blue-500 ml-1">Privacy policies</a>
										<label htmlFor="checkbox" className="block text-sm font-base opacity-75 ml-2" style={{ color: theme?.theme.colors.text }}>and </label>
										<a href="/terms-of-service" className="text-sm opacity-100 font-base text-blue-500 ml-1">Terms of Service</a>
										<label htmlFor="checkbox" className="block text-sm font-base opacity-75 ml-2" style={{ color: theme?.theme.colors.text }}>and I accept them.</label>
									</div>
								</div>
                                <button id="register-btn" style={{ background: theme?.theme.colors.accent,color: theme?.theme.colors.text }} type="submit"
                                className="w-full h-10 font-semibold text-xl rounded-sm mt-2 transition-all ease-in hover:opacity-90 hover:rounded-md duration-[45ms]">
                                    Join SPARK
                                </button>
                                <div className="flex flex-row w-full justify-start items-center mt-2 select-none">
                                    <span style={{ color: theme?.theme.colors.text }} className="opacity-75 italic text-sm">Already have an account?</span>
                                    <a className="ml-1 text-blue-500 opacity-100 text-sm" href="/auth/login">Log in</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );

}