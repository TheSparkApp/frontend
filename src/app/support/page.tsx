"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import { ThemeContext } from "../../components/ThemeProvider";
import "../util.css";
import { LOGO } from "@/components/LOGO";
import Footer from "@/components/homepage/Footer";

export default function Support() {
	const theme = React.useContext(ThemeContext);
	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main
				className="w-full h-screen flex flex-col overflow-x-hidden overflow-y-auto justify-start items-center transition-all ease-in duration-75"
				style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<div className="w-11/12 max-w-[900px] items-start justify-center flex flex-col mb-10">
					<div className="w-full items-center justify-center flex flex-col">
						<LOGO
							width="320px"
							height="120px"
							white={!theme?.theme.colors.logo_white}
						/>
						<h1
							style={{ color: theme?.theme.colors.text }}
							className="text-5xl font-black italic">
							SUPPORT
						</h1>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
