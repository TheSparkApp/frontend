"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import "../util.css";
import { ThemeContext } from "../../components/ThemeProvider";
import { useRouter } from "next/navigation";
import { LOGO } from "@/components/LOGO";
import Footer from "@/components/homepage/Footer";
import { main } from "@/util/emails";

export default function PrivacyPolicies() {
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
							className="text-5xl font-black italic text-center">
							SPARK&apos;S RULES OF USE AND INTERACTION
						</h1>
						<div className="flex flex-row justify-center items-center gap-5 opacity-75">
							<span
								style={{ color: theme?.theme.colors.text }}
								className="text-xl font-normal">
								Effective from: May 14 2024
							</span>
							<span
								style={{ color: theme?.theme.colors.text }}
								className="text-xl font-normal">
								Last updated: May 14 2024
							</span>
						</div>
					</div>
					<h1
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Table of contents
					</h1>
					<div className="flex flex-col justify-center">
						<ol
							style={{ color: theme?.theme.colors.text_link }}
							className="">
							<Item id="whatsthis" content="What&apos;s this?" />
						</ol>
					</div>

					<h1
						id="whatsthis"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						What&apos;s this?
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							SPARK is the best platform to share your day and
							meet new people, find interests and meet people with
							the same interests. To keep it that way, please make
							sure you follow these requirements.
						</span>
					</div>

					<h1
						id="finalwords"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Final words
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							Thanks for reading and remember to check this page
							regularly for changes :)
						</span>
						<a
							className="ml-1 opacity-100 cursor-pointer font-bold"
							style={{
								color: theme?.theme.colors.text_link,
							}}
							href={`mailto:${main}`}>
							Contact us
						</a>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}

interface ItemProps {
	id: string;
	content: string;
}
const Item: React.FC<ItemProps> = ({ id, content }) => {
	const router = useRouter();
	return (
		<li
			onClick={() => router.push("#" + id)}
			className="cursor-pointer hover:font-semibold mt-1 underline hover:no-underline">
			{content}
		</li>
	);
};
