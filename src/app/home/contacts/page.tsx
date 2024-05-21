"use client";
import React, { Suspense } from "react";
import { NavBar } from "../components/NavBar";
import { ThemeContext } from "@/components/ThemeProvider";
import { SideBar } from "../components/SideBar";

export default function ContactPage() {
	const theme = React.useContext(ThemeContext);

	return (
		<div
			className="overflow-hidden h-full w-full absolute"
			style={{ background: theme?.theme.colors.background }}>
			<Suspense fallback={<div></div>}>
				<NavBar />
				<main
					style={{ background: theme?.theme.colors.primary }}
					className="w-full h-full flex flex-col mt-2 overflow-x-hidden justify-center items-center transition-all ease-in duration-75">
					<div
						style={{
							color: theme?.theme.colors.text,
						}}
						className="max-w-[1800px] w-full h-full flex flex-row items-center justify-center overflow-hidden">
						<SideBar />
						<div
							style={{
								color: theme?.theme.colors.text,
								background: theme?.theme.colors.primary,
							}}
							className="min-w-[300px] w-full max-w-[800px] -mt-10 h-[93%] full-home rounded-md overflow-hidden">
							<span>Contacts</span>
						</div>
					</div>
				</main>
			</Suspense>
		</div>
	);
}
