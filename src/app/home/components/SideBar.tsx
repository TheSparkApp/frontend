"use client";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
	FaBookmark,
	FaCalendarDay,
	FaGear,
	FaHouse,
	FaUserGroup,
	FaUsersViewfinder,
} from "react-icons/fa6";

import "../../util.css";
export const SideBar = () => {
	const theme = React.useContext(ThemeContext);
	const [isTokenSet, setIsTokenSet] = useState(false);
	const [newNotificationAmount, setnewNotificationAmount] = useState(3);
	const [newMessageAmount, setnewMessageAmount] = useState(3);
	const [openSearch, setopenSearch] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsTokenSet(true);
		} else {
			setIsTokenSet(false);
		}
	}, []);

	const router = useRouter();
	return (
		<div
			className="min-w-[50px] hideon-phone w-[300px] max-w-[400px] h-full hide-home-bars2-w"
			style={{
				background: theme?.theme.colors.background,
			}}>
			<div className="flex gap-y-2 relative flex-col w-full h-full pt-5 pb-5 pl-2 pr-2 overflow-hidden overflow-y-scroll">
				<Page
					title="Home"
					icon={<FaHouse size={28} />}
					redirect="/home"
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
					redirect="/home/users"
				/>
				<Page
					title="Contacts"
					icon={<FaUserGroup size={28} />}
					redirect="/home/contacts"
				/>
				<Page
					title="Find Friends"
					icon={<FaUsersViewfinder size={28} />}
					redirect="/home/find-friends"
				/>
				<Page
					title="Saved"
					icon={<FaBookmark size={28} />}
					redirect="/home/saved"
				/>
				<Page
					title="Events"
					icon={<FaCalendarDay size={28} />}
					redirect="/home/events"
				/>
				<Page
					title="Settings"
					icon={<FaGear size={28} />}
					redirect="/home/settings"
				/>
				<div
					style={{
						color: theme?.theme.colors.text,
					}}
					className="min-h-14 max-h-14 absolute bottom-14 overflow-hidden mt-10 pl-1 pr-1 opacity-75 text-center text-[10px] gap-x-2 gap-y-1 flex flex-row flex-wrap justify-center left-0 w-full hide-home-bars2">
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
					<span>© SPARK 2024 All rights reserved.</span>
				</div>
			</div>
		</div>
	);
};

interface PageProps {
	icon: any;
	title: string;
	redirect: string;
}
const Page: React.FC<PageProps> = ({ icon, title, redirect }) => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	const handleClick = () => {
		router.push(redirect);
	};
	return (
		<div
			onClick={handleClick}
			style={
				{
					"--text-color": theme?.theme.colors.text,
					"--secondary-color": theme?.theme.colors.secondary,
				} as React.CSSProperties
			}
			className="flex min-w-[54px] flex-row hoverBackground justify-start items-center min-h-14 cursor-pointer select-none rounded-md hover:opacity-85 group">
			<div className="w-full max-w-16 h-full flex justify-center items-center">
				<div className="group-hover:-translate-y-0.5 ease-in transition-all duration-75">
					{icon}
				</div>
			</div>
			<span className="text-xl font-semibold w-full text-start p-4 hide-home-bars2">
				{title}
			</span>
		</div>
	);
};
