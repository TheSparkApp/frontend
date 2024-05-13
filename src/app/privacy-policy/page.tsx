"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import "../util.css";
import { ThemeContext } from "../../components/ThemeProvider";
import { useRouter } from "next/navigation";
import { LOGO } from "@/components/LOGO";
import Footer from "@/components/homepage/Footer";

export default function PrivacyPolicies() {
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
							SPARK&apos;S PRIVACY POLICY
						</h1>
						<div className="flex flex-row justify-center items-center gap-5 opacity-75">
							<span
								style={{ color: theme?.theme.colors.text }}
								className="text-xl font-normal">
								Effective from: May 13 2024
							</span>
							<span
								style={{ color: theme?.theme.colors.text }}
								className="text-xl font-normal">
								Last updated: May 13 2024
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
							<Item id="whatsthis" content="What' this?" />
							<Item
								id="whatwecollect"
								content="What do we collect from you?"
							/>
							<Item
								id="howweuseyourdata"
								content="How we use your data"
							/>
							<Item
								id="howweshareyourdata"
								content="How we share your data"
							/>
							<Item
								id="savingyourdata"
								content="Saving your data"
							/>
							<Item
								id="protectyourdata"
								content="How we protect your data"
							/>
							<Item id="privacy" content="Manage your privacy" />
							<Item
								id="locallaws"
								content="Information on local data protection laws"
							/>
							<Item
								id="important"
								content="More important stuff"
							/>
							<Item id="finalwords" content="Final words" />
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
						<span>Placeholder</span>
					</div>

					<h1
						id="whatwecollect"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						What do we collect from you?
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>Placeholder</span>
					</div>

					<h1
						id="howweuseyourdata"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						How we use your data
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>Placeholder</span>
					</div>

					<h1
						id="howweshareyourdata"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						How we share your data
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>Placeholder</span>
					</div>

					<h1
						id="savingyourdata"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Saving your data
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>Placeholder</span>
					</div>

					<h1
						id="protectyourdata"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						How we protect your data
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>Placeholder</span>
					</div>

					<h1
						id="privacy"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Manage your privacy
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>Placeholder</span>
					</div>

					<h1
						id="locallaws"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Information on local data protection laws
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>Placeholder</span>
					</div>

					<h1
						id="important"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						More important stuff
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							We reserve the right to update this privacy policy
							from time to time. We will indicate the date of the
							last update. In the event of significant changes, we
							will notify you more clearly in accordance with the
							statutory provisions. This can be done, for example,
							by notifying you by e-mail or by highlighting the
							changes within our services.
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
							Thanks for reading and remember to check this page regularly for changes :)
						</span>
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
