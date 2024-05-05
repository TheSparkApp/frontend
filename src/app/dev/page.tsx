"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import { ThemeContext } from "../../components/ThemeProvider";
import "../util.css";

export default function Blog() {
	const theme = React.useContext(ThemeContext);
	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main className="w-full h-screen flex flex-col items-center overflow-hidden transition-all ease-in duration-75" style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<br></br>
				<h1 className="text-white font-bold text-5xl text-center">DEV</h1>
				<div className="w-11/12 mt-10 items-center justify-center flex flex-row flex-wrap gap-5">
					<a href="/dev/themes" className="text-center text-4xl font-black mt-2 no-underline mb-5 border-2 border-spacing-96 border-solid cursor-pointer w-fit p-1 pl-2 pr-2 rounded-lg transition-all" style={{ color: theme?.theme.colors.text_link, borderColor: theme?.theme.colors.text_link }}>
						Themes
					</a>
					<a href="/dev/auth-test" className="text-center text-4xl font-black mt-2 no-underline mb-5 border-2 border-spacing-96 border-solid cursor-pointer w-fit p-1 pl-2 pr-2 rounded-lg transition-all" style={{ color: theme?.theme.colors.text_link, borderColor: theme?.theme.colors.text_link }}>
						Auth tests
					</a>
				</div>
			</main>
		</div>
	);
}
