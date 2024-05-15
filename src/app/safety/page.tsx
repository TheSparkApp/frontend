"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import { ThemeContext } from "../../components/ThemeProvider";
import "../util.css";
import Footer from "@/components/homepage/Footer";
import { LOGO } from "@/components/LOGO";
import { CardDiv } from "@/util/custom_divs";
import { useRouter } from "next/navigation";

export default function Safety() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main
				className="w-full h-screen flex flex-col overflow-x-hidden overflow-y-auto justify-start items-center transition-all ease-in duration-75"
				style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<div
					style={{ color: theme?.theme.colors.text }}
					className="w-11/12 max-w-[900px] items-start select-none justify-center flex flex-col mb-5">
					<div className="w-full items-center justify-center flex flex-col mb-5">
						<LOGO
							width="320px"
							height="120px"
							white={!theme?.theme.colors.logo_white}
						/>
						<h1
							style={{ color: theme?.theme.colors.text }}
							className="text-5xl font-black italic text-center">
							SAFETY
						</h1>
					</div>
					<span>
						Our aim is to establish a secure and reliable platform
						for our users, which is why we&apos;ve dedicated this
						SAFETY page to assist you and provide a curated
						collection of helpful links.
					</span>
				</div>
				<div
					className="w-11/12 max-w-[900px] items-center justify-center flex-row mb-10 gap-x-5 gap-y-3 rounded-md flex flex-wrap p-2"
					style={{ background: theme?.theme.colors.secondary }}>
					<CardDiv text="Terms of service" link="/terms-of-service" />
					<CardDiv text="Privacy Policies" link="/privacy-policy" />
					<CardDiv
						text="Rules of use and interaction"
						link="/rules"
					/>
					<CardDiv text="Support" link="/support" />
				</div>

			</main>
			<Footer />
		</div>
	);
}
