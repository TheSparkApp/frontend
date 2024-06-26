"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import { ThemeContext } from "../../../components/ThemeProvider";
import "../../util.css";

export default function DataRequest() {
	const theme = React.useContext(ThemeContext);
	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main className="w-full h-screen flex flex-col overflow-hidden transition-all ease-in duration-75" style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<p className="text-white">Request your data</p>
			</main>
		</div>
	);
}
