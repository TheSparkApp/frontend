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
					<span className="w-full text-center">
						Our aim is to establish a secure and reliable platform
						for our users, which is why we&apos;ve dedicated this
						SAFETY page to assist you and provide a curated
						collection of helpful links.
					</span>
					<div className="w-11/12 max-w-[900px] items-center justify-center flex-row mb-10 gap-x-5 gap-y-3 rounded-md flex flex-wrap p-2 pb-5">
						<CardDiv
							text="Terms of service"
							link="/terms-of-service"
						/>
						<CardDiv
							text="Privacy Policies"
							link="/privacy-policy"
						/>
						<CardDiv
							text="Rules of use and interaction"
							link="/rules"
						/>
						<CardDiv text="Support" link="/support" />
						<CardDiv text="Report a user" link="/terms-of-service/report" />
					</div>
					<h1
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-2xl select-none">
						How can you stay safe?
					</h1>
					<span className="">
						Of course, we try to minimise and manage all security
						risks immediately, but this can take some time, so here
						are a few rules you should follow for your own and other
						people&apos;s well-being. Thank you!
					</span>
					<div className="flex flex-row mt-5 ml-1">
						<div
							style={{
								background: theme?.theme.colors.secondary,
							}}
							className="h-full w-1 rounded-full"></div>
						<div className="flex select-all flex-col ml-3 gap-1">
							<span className="font-semibold text-lg">
								1. Adjust privacy settings to control who sees
								your posts.
							</span>
							<span className="font-semibold text-lg">
								2. Only accept friend requests from people you
								know.
							</span>
							<span className="font-semibold text-lg">
								3. Be cautious when sharing personal
								information.
							</span>
							<span className="font-semibold text-lg">
								4. Avoid opening suspicious messages or links.
							</span>
							<span className="font-semibold text-lg">
								5. Regularly update your password with complex
								combinations.
							</span>
							<span className="font-semibold text-lg">
								6. Enable two-factor authentication for added
								security.
							</span>
							<span className="font-semibold text-lg">
								7. Moderate the content you post for
								appropriateness.
							</span>
							<span className="font-semibold text-lg">
								8. Report suspicious activity to app support.
							</span>
							<span className="font-semibold text-lg">
								9. Keep your eyes and ears open for scam attacks
							</span>
						</div>
					</div>
				</div>
			<Footer />
			</main>
		</div>
	);
}
