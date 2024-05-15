"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React, { useState } from "react";
import { ThemeContext } from "../../components/ThemeProvider";
import "../util.css";
import { LOGO } from "@/components/LOGO";
import { useRouter } from "next/navigation";
import Footer from "@/components/homepage/Footer";
import { support } from "@/util/emails";
import OpenDiv from "@/util/custom_divs";

export default function Help() {
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
							YOU NEED HELP?
						</h1>
						<div className="flex flex-row justify-center items-center gap-5 opacity-75">
							<span
								style={{ color: theme?.theme.colors.text }}
								className="text-xl font-normal">
								Last updated: May 13 2024
							</span>
						</div>
						<span
							style={{ color: theme?.theme.colors.text }}
							className="text-xl mt-5 italic">
							To help spark improve and stay good, we will try
							everything possible to help you, so we have this
							help page and also a support for more difficult
							cases.
						</span>
					</div>
					<h1
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10 select-none">
						FAQ - Frequently asked questions
					</h1>

					<OpenDiv title="I lost my password, what now?">
						<div className="flex flex-row w-full justify-start items-center mt-2 select-none">
							<p>
								If you have forgotten your password, you should
							</p>
							<a
								className="ml-1 opacity-100 cursor-pointer font-bold"
								style={{
									color: theme?.theme.colors.text_link,
								}}
								onClick={() =>
									router.push("/auth/reset-password")
								}>
								reset your password.
							</a>
						</div>
						<span>
							We will also send you an email so that we know that
							it really is you.
						</span>
						<span className="font-bold">
							Please also realise that you need a secure but also
							memorable password!
						</span>
					</OpenDiv>

					<OpenDiv title="My account has been hacked, what now?">
						<div className="flex flex-row w-full justify-start items-center mt-2 select-none flex-wrap">
							<p>
								If your account has been hacked you should
								contact us
							</p>
							<a
								className="ml-1 mr-1 opacity-100 cursor-pointer font-bold"
								style={{
									color: theme?.theme.colors.text_link,
								}}
								href={`mailto:${support}`}>
								contact us
								{/* //TODO: May replace with support ticket page */}
							</a>
						</div>
						<span>immediately and we will see what we can do.</span>
						<span className="font-bold">
							Please also realise that you need a more secure but
							also memorable password!
						</span>
					</OpenDiv>
					{/* //TODO: MORE FAQS */}
					<OpenDiv title="What should I do if I am banned?">
						<span className="font-bold">
							Quite simply, there&apos;s not much more you can do.{" "}
						</span>
						<span>
							Your account has been blocked and you can no longer
							use it. However, you can complain if you think you
							have been unjustly banned.
						</span>
					</OpenDiv>
				</div>
			</main>
			<Footer />
		</div>
	);
}
