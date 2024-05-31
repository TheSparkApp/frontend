"use client";
import { ThemeContext } from "@/components/ThemeProvider";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode, Suspense, useEffect, useRef, useState } from "react";
import "../util.css";
import "../3dElements.css";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { FaX } from "react-icons/fa6";

function Search() {
	const theme = React.useContext(ThemeContext);
	const searchParams = useSearchParams();
	const event = searchParams.get("event");
	let resp = null;
	if (event === "test") {
		resp = (
			<div
				className="w-full flex flex-col justify-center items-center mt-2"
				id="event">
				<div
					className="w-11/12 max-w-[900px] min-h-10 h-fit rounded-md mt-1 flex justify-center items-center shadow-md"
					style={{
						background: theme?.theme.colors.secondary,
						color: theme?.theme.colors.text,
					}}>
					<div className="w-full flex flex-row flex-wrap p-3 overflow-hidden text-wrap">
						<span>TEST</span>
					</div>
					<div className="min-w-10">
						<div
							className="opacity-100 min-w-8 min-h-8 max-w-8 max-h-8 flex justify-center items-center rounded-md cursor-pointer hover:opacity-50"
							onClick={() => {
								document.getElementById("event")?.remove();
							}}>
							<FaX color="white" size={15} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return resp;
}
interface MainAppProps {
	children: ReactNode;
}
export default function Mainapp({ children }: MainAppProps) {
	const theme = React.useContext(ThemeContext);

	return (
		<div
			className="overflow-hidden h-full w-full absolute"
			style={{ background: theme?.theme.colors.background }}>
			<Suspense fallback={<div></div>}>
				<NavBar />
				<Search />
				<div className="w-full h-full flex flex-col items-center">
					<div
						style={{ background: theme?.theme.colors.background }}
						className="w-screen max-w-[1920px] h-full flex flex-row justify-center items-start mt-1">
						<SideBar />
						<div
							className="w-full h-full rounded-lg mt-2 overflow-hidden"
							style={{
								color: theme?.theme.colors.text,
								background: theme?.theme.colors.primary,
							}}>
							{children}
						</div>
					</div>
				</div>
			</Suspense>
		</div>
	);
}
