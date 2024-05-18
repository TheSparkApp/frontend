"use client";
import { ThemeContext } from "@/components/ThemeProvider";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import "../util.css";
import "../3dElements.css";
import { NavBar } from "./components/NavBar";
import {
	FaBookmark,
	FaCalendarDay,
	FaGear,
	FaHouse,
	FaUserGroup,
	FaUsers,
	FaUsersViewfinder,
} from "react-icons/fa6";
import Image from "next/image";

function Search() {
	const searchParams = useSearchParams();
	const event = searchParams.get("event");
	let resp = null;
	if (event === "test") {
		resp = <div>TEST</div>;
	}

	return resp;
}
//! AB HIER SCHAUEN OB EINGELOGGT
export default function MainApp() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	return (
		<div
			className="overflow-hidden h-full w-full absolute"
			style={{ background: theme?.theme.colors.background }}>
			<Suspense fallback={<div></div>}>
				<NavBar />
				<Search />
				<main
					style={{ background: theme?.theme.colors.primary }}
					className="w-full h-full flex flex-col mt-2 overflow-x-hidden justify-center items-center transition-all ease-in duration-75">
					<div className="max-w-[1800px] w-full h-full flex flex-row items-center justify-center overflow-hidden">
						<div className="min-w-[50px] hideon-phone w-[300px] max-w-[400px] h-full hide-home-bars2-w">
							<div className="flex gap-y-2 relative flex-col w-full h-full pt-5 pb-5 pl-2 pr-2 overflow-hidden">
								<Page
									title="Home"
									icon={<FaHouse size={28} />}
								/>
								<Page
									title="Your profile"
									icon={
										<Image
											src={"/stein_pfp.png"}
											width={50}
											height={50}
											alt="Profile picture"
											className="object-cover min-h-[50px] min-w-[50px] translate-y-0.5 w-[52px] h-[50px] max-w-[50px] max-h-[50px] group-hover:opacity-100 opacity-75 rounded-full"
										/>
									}
								/>
								<Page
									title="Contacts"
									icon={<FaUserGroup size={28} />}
								/>
								<Page
									title="Find Friends"
									icon={<FaUsersViewfinder size={28} />}
								/>
								<Page
									title="Saved"
									icon={<FaBookmark size={28} />}
								/>
								<Page
									title="Events"
									icon={<FaCalendarDay size={28} />}
								/>
								<Page
									title="Settings"
									icon={<FaGear size={28} />}
								/>
								<div
									style={{
										color: theme?.theme.colors.text,
									}}
									className="min-h-10 pl-1 pr-1 opacity-75 text-center text-[10px] gap-x-2 gap-y-1 flex flex-row flex-wrap absolute bottom-14 left-0 w-full hide-home-bars2">
									<a
										className="cursor-pointer"
										href="/privacy-policy"
										onClick={(e) => {
											e.preventDefault();
											router.push("/privacy-policy");
										}}>
										Privacy Policies
									</a>
									<a
										className="cursor-pointer"
										href="/terms-of-service"
										onClick={(e) => {
											e.preventDefault();
											router.push("/terms-of-service");
										}}>
										Terms of service
									</a>
									<a
										className="cursor-pointer"
										href="/rules"
										onClick={(e) => {
											e.preventDefault();
											router.push("/rules");
										}}>
										Rules of use and interaction
									</a>
									<a
										className="cursor-pointer"
										href="/imprint"
										onClick={(e) => {
											e.preventDefault();
											router.push("/imprint");
										}}>
										Imprint
									</a>
									<span>
										© SPARK 2024 All rights reserved.
									</span>
								</div>
							</div>
						</div>
						<div className="bg-green-600 min-w-[300px] w-full max-w-[800px] h-full full-home overflow-y-scroll">
							Feed
						</div>
						<div className="min-w-[200px] w-[300px] max-w-[400px] h-full hide-home-bars">
							<div className="flex gap-y-2 relative flex-col w-full h-full pt-5 pb-5 pl-2 pr-2 overflow-hidden">
								<Page
									title="Create group"
									icon={<FaUsers size={28} />}
								/>
							</div>
						</div>
					</div>
				</main>
			</Suspense>
		</div>
	);
}

interface PageProps {
	icon: any;
	title: string;
}
const Page: React.FC<PageProps> = ({ icon, title }) => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	return (
		<div
			style={
				{
					"--text-color": theme?.theme.colors.text,
					"--secondary-color": theme?.theme.colors.secondary,
				} as React.CSSProperties
			}
			className="flex min-w-[54px] flex-row hoverBackground justify-start items-center h-14 cursor-pointer select-none rounded-md hover:opacity-85 group">
			<div className="w-full max-w-16 h-full flex justify-center items-center">
				<div className="group-hover:-translate-y-0.5 ease-in transition-all duration-75">
					{icon}
				</div>
			</div>
			<span className="text-xl font-semibold w-full text-start p-5 hide-home-bars2">
				{title}
			</span>
		</div>
	);
};
