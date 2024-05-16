"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React, { useState } from "react";
import { ThemeContext } from "../../components/ThemeProvider";
import "../util.css";
import { LOGO } from "@/components/LOGO";
import Footer from "@/components/homepage/Footer";
import OpenDiv from "@/util/custom_divs";
import { useRouter } from "next/navigation";
import TicketForm from "../forms/ticket";

export default function Support() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	const [category, setCategory] = useState<string | null>(null);
	const [subject, setSubject] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setCategory(String(event.target.value));
	};
	const handleSubjectChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSubject(event.target.value);
	};
	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

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
					className="w-11/12 max-w-[900px] items-start justify-center flex flex-col mb-10">
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
					<h1
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-2xl mt-10 select-none">
						FAQ - Frequently asked questions (Read this before
						creating a ticket)
					</h1>
					<h1
						style={{ color: theme?.theme.colors.text }}
						className="font-semibold text-xl mt-2 select-none">
						Also read our{" "}
						<a
							className="opacity-100 cursor-pointer font-bold"
							style={{
								color: theme?.theme.colors.text_link,
							}}
							href="/help"
							onClick={(e) => {
								e.preventDefault();
								router.push("/help");
							}}>
							help page
						</a>{" "}
						where we already have a few FAQ&apos;s
					</h1>
					<OpenDiv title="What information should I provide when I report a problem?">
						<div className="flex flex-row w-full justify-start items-center mt-2 select-none">
							<span>
								If you encounter an issue, initially, you
								won&apos;t be required to provide any additional
								information. However, it&apos;s important to
								note that this might change as our support team
								assists you further. Therefore, it&apos;s
								advisable to always remain logged into your
								account to facilitate any necessary actions or
								troubleshooting steps. Your active session
								ensures smoother communication and quicker
								resolution of any issues that may arise during
								the support process.
							</span>
						</div>
					</OpenDiv>
					<OpenDiv title="How long will it take before I receive an answer?">
						<div className="flex flex-row w-full justify-start items-center mt-2 select-none">
							<span>
								As indicated below, please be aware that the
								response time from our support team can vary and
								is contingent upon factors such as the volume of
								inquiries received on a particular day and the
								priority level of each request. While we strive
								to address all inquiries promptly, it&apos;s
								possible that it may take between 2 to 5 days to
								receive a response from our support team. We
								appreciate your patience and understanding as we
								work diligently to assist you with your queries
								and concerns.
							</span>
						</div>
					</OpenDiv>
					<OpenDiv title="How do I behave?">
						<div className="flex flex-row w-full justify-start items-center mt-2 select-none">
							<span>
								It&apos;s important to maintain a friendly and
								respectful demeanor when interacting with our
								support team and adhere to the{" "}
								<a
									className="opacity-100 cursor-pointer font-bold"
									style={{
										color: theme?.theme.colors.text_link,
									}}
									href="/rules"
									onClick={(e) => {
										e.preventDefault();
										router.push("/rules");
									}}>
									Rules of use and interaction
								</a>
								. Please keep in mind that our support staff are
								here to assist you to the best of their
								abilities, and their primary goal is to help
								resolve your issues or inquiries. By approaching
								interactions with kindness and understanding,
								you not only foster a positive atmosphere but
								also facilitate smoother and more effective
								assistance from our support team.
							</span>
						</div>
					</OpenDiv>
					<OpenDiv title="What if my problem has already been solved?">
						<div className="flex flex-row w-full justify-start items-center mt-2 select-none">
							<span>
								Once your issue has been successfully resolved
								or there is no longer an issue, we kindly ask
								you to{" "}
								<a
									className="opacity-100 cursor-pointer font-bold"
									style={{
										color: theme?.theme.colors.text_link,
									}}
									href="/home/settings/tickets"
									onClick={(e) => {
										e.preventDefault();
										router.push("/home/settings/tickets");
									}}>
									navigate to your ticket
								</a>{" "}
								and request its closure. This helps us keep our
								support system organized and ensures that we can
								focus our attention on assisting other users who
								may still require assistance. Your cooperation
								in closing resolved tickets is greatly
								appreciated and allows us to maintain efficient
								support services for all our users.
							</span>
						</div>
					</OpenDiv>
					<OpenDiv title="Can I report others here?">
						<div className="flex flex-row w-full justify-start items-center mt-2 select-none">
							<span>
								This page is exclusively dedicated to addressing
								and resolving your own issues. If you need to
								report problems related to others, please use
								our designated{" "}
								<a
									className="opacity-100 cursor-pointer font-bold"
									style={{
										color: theme?.theme.colors.text_link,
									}}
									href="/terms-of-service/report"
									onClick={(e) => {
										e.preventDefault();
										router.push("/terms-of-service/report");
									}}>
									report page
								</a>
								. By keeping each platform separate, we can
								ensure that your concerns receive the
								appropriate attention and resolution. Thank you
								for your understanding and cooperation in
								maintaining the effectiveness of our support
								system.
							</span>
						</div>
					</OpenDiv>
					<h1
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-2xl mt-10 select-none">
						What happens after you have created a ticket?
					</h1>
					<div className="flex flex-row mt-5 ml-1">
						<div
							style={{
								background: theme?.theme.colors.secondary,
							}}
							className="h-full w-1 rounded-full"></div>
						<div className="flex flex-col ml-3 gap-1">
							<span className="font-semibold text-lg">
								1. You&apos;ll receive a confirmation email once
								your ticket is created.
							</span>
							<span className="font-semibold text-lg">
								2. Support will get back to you shortly.
							</span>
							<span className="font-semibold text-lg">
								3. You interact with our support.
							</span>
							<span className="font-semibold text-lg">
								4. We&apos;ll work to solve your issue or find a
								solution.
							</span>
							<span className="font-semibold text-lg">
								5. Goodbye, and your ticket is now closed.
							</span>
							<span className="font-semibold text-lg">
								6. Feel free to rate our support if you wish.
							</span>
						</div>
					</div>
					<h1 className="mt-5 text-xl font-black italic bg-red-600 rounded-sm  p-2">
						REMEMBER: Our Support will NEVER ask you for secret or
						personal data.
					</h1>
					<div className="w-full flex-col flex justify-center items-center mt-3">
						<TicketForm theme={theme} />
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
