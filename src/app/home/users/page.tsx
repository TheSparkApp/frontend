"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { NavBar } from "../components/NavBar";
import { ThemeContext } from "@/components/ThemeProvider";
import { SideBar } from "../components/SideBar";
import {
	FaCakeCandles,
	FaCalendarPlus,
	FaCircleCheck,
	FaDiscord,
	FaEllipsisVertical,
	FaEyeSlash,
	FaFlag,
	FaGavel,
	FaHeart,
	FaInstagram,
	FaMessage,
	FaMusic,
	FaPen,
	FaSchoolFlag,
	FaSnapchat,
	FaSpotify,
	FaTwitter,
	FaUserPlus,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";
import "../../util.css";
import Image from "next/image";
import NumberFormatter from "@/util/numberFormatter";
import { Contact } from "../components/Contact";
import { LOGO_SMALL } from "@/components/LOGO";
import { Post } from "../components/Post";
import Mainapp from "../mainapp";

export default function UsersPage() {
	const theme = React.useContext(ThemeContext);
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const follower = <NumberFormatter value={parseInt("23234")} />;
	const sparkScore = <NumberFormatter value={parseInt("9174")} />;
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setShowMenu(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<Mainapp>
			<div className="w-full h-full flex flex-row overflow-hidden">
				<div className="w-full h-full flex flex-row relative overflow-y-scroll">
					<div className="w-full min-h-[280px] max-h-[280px] flex flex-col items-center h-[280px]">
						<div className="w-full min-h-[65%] h-fit bg-blue-400"></div>
						<div className="w-full h-[100px] -mt-5 flex flex-col pr-5 pt-2 pl-5">
							<div className="w-full pt-2 h-1/2 mt-5 flex flex-row relative">
								<div className="w-[60%] relative max-w-[80%] h-full pr-2 flex flex-row mobile-p-2 ipad-p-2">
									<Image
										src={"/stein_pfp.png"}
										width={150}
										height={150}
										alt="Profile picture"
										className="object-cover drag-none select-none -translate-y-14 no-drag w-[100px] min-h-[100px] h-[100px] max-w-[100px] max-h-[100px] rounded-full transition-all ease-in duration-100"
									/>
									<div className="flex flex-row ml-2 items-center w-full">
										<div className="flex flex-col">
											<span className="text-4xl ellipsis max-w-full mobile-4xl">
												Firstname
											</span>
											<span className="text-xl italic ellipsis max-w-full mobile-2xl">
												Lastname
											</span>
										</div>
										<p className="opacity-75 ml-5">
											username
										</p>
									</div>
								</div>
								<div className="w-fit h-full flex flex-row relative">
									<div className="w-full h-full pl-3 pr-3 flex flex-row justify-center gap-x-5 hideon-ipad">
										<div className="flex flex-col justify-center items-center hideon-phone">
											<span className="text-lg mobile-2xl font-bold">
												{follower}
											</span>
											<p>Follower</p>
										</div>
										<div className="flex flex-col justify-center items-center hideon-phone">
											<span className="text-lg mobile-2xl font-bold">
												{follower}
											</span>
											<p>Follows</p>
										</div>
										<div className="flex flex-col justify-center items-center hide-phone2 hideon-phone">
											<span className="text-lg mobile-2xl font-bold">
												{follower}
											</span>
											<p>Posts</p>
										</div>
									</div>
									<div
										onClick={() => {
											setShowMenu(true);
										}}
										className="min-w-10 h-full flex cursor-pointer hover:opacity-100 opacity-75 justify-center items-center">
										<FaEllipsisVertical
											size={20}
											className="mr-2.5"
										/>
									</div>
									{showMenu && (
										<div
											ref={menuRef}
											className="absolute -top-[90px] select-none right-2 w-36 h-fit overflow-hidden rounded-[6px] p-2 border"
											style={{
												background:
													theme?.theme.colors.primary,
												borderColor:
													theme?.theme.colors
														.secondary,
											}}>
											<div className="hover:opacity-100 mb-1 opacity-75 cursor-pointer flex flex-row justify-start items-center">
												<FaEyeSlash />
												<span className="ml-1">
													Block
												</span>
											</div>
											<div className="hover:opacity-100 mb-1 opacity-75 cursor-pointer flex flex-row justify-start items-center">
												<FaGavel />
												<span className="ml-1">
													Report
												</span>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="w-full h-full">
							<div className="w-full pl-5 pr-5 gap-4 flex flex-row flex-wrap justify-start">
								<div
									className="flex flex-row justify-center items-center gap-2 active:opacity-100 opacity-75 cursor-pointer select-none border-b pb-2 pr-5"
									style={{
										borderColor: theme?.theme.colors.text,
									}}>
									<FaMessage className="ml-1" size={20} />
									<span className="text-xl">Message</span>
								</div>
								<div
									className="flex flex-row justify-center items-center gap-2 active:opacity-100 opacity-75 cursor-pointer select-none border-b pb-2 pr-5"
									style={{
										borderColor: theme?.theme.colors.text,
									}}>
									<FaUserPlus className="ml-1" size={20} />
									{/* FaUserLargeSlash wenn unfollow */}
									<span className="text-xl">Follow</span>
								</div>
								<span className="text-xl opacity-50 italic mt-1">
									He / Him
								</span>
								<div className="hidden show-ipad show-phone">
									<div className="w-full h-full pl-3 pr-3 flex flex-row justify-center gap-x-5">
										<div className="flex flex-col justify-center items-center">
											<span className="text-lg mobile-2xl font-bold">
												{follower}
											</span>
											<p>Follower</p>
										</div>
										<div className="flex flex-col justify-center items-center">
											<span className="text-lg mobile-2xl font-bold">
												{follower}
											</span>
											<p>Follows</p>
										</div>
										<div className="flex flex-col justify-center items-center">
											<span className="text-lg mobile-2xl font-bold">
												{follower}
											</span>
											<p>Posts</p>
										</div>
									</div>
								</div>
								<div
									className="flex h-full mt-1 flex-row justify-center items-center rounded-md cursor-pointer"
									style={{
										background:
											theme?.theme.colors.secondary,
									}}
									title="Verified">
									<FaCircleCheck
										size={25}
										color={theme?.theme.colors.accent}
										className="cursor-pointer m-2"
									/>
									<span className="font-semibold mr-2">Verified</span>
								</div>
								<div
									className="flex border-2 select-none transition-all ease-in duration-100 flex-row justify-center items-center p-2 cursor-pointer rounded-md"
									style={{
										background:
											theme?.theme.colors.secondary,
										borderColor: theme?.theme.colors.accent,
									}}>
									<LOGO_SMALL width="25px" height="25px" />
									<span className="ml-2 text-xl font-bold">
										{sparkScore}
									</span>
								</div>
								<div
									className="flex select-none transition-all ease-in duration-100 flex-row justify-center items-center p-2 cursor-pointer rounded-md"
									style={{
										background:
											theme?.theme.colors.secondary,
										borderColor: theme?.theme.colors.accent,
									}}>
									<FaPen size={20} />
									<span className="ml-2 text-xl font-bold">
										Edit profile
									</span>
								</div>
							</div>
							<div className="w-full mt-5 pl-5 pr-5 pb-16 gap-x-5 flex gap-y-3 flex-row flex-wrap justify-start items-start">
								<div
									style={{
										background: theme?.theme.colors.primary,
										borderColor:
											theme?.theme.colors.secondary,
									}}
									className="border-2 p-2 w-[500px] mobile-p-2-b rounded-md">
									<h1 className="text-xl select-none font-semibold border-b pb-2 opacity-50 mb-2">
										Information
									</h1>
									<div className="flex flex-row justify-start items-center gap-x-3">
										<div className="flex w-[160px] flex-row p-2 select-none opacity-50 italic gap-x-2 text-xl justify-start items-center">
											<FaCakeCandles size={25} />
											<span>Birthday</span>
										</div>
										<span>09.10.00</span>
									</div>
									<div className="flex flex-row justify-start items-center gap-x-3">
										<div className="flex w-[160px] flex-row p-2 select-none opacity-50 italic gap-x-2 text-xl justify-start items-center">
											<FaSchoolFlag size={25} />
											<span>School</span>
										</div>
										<span>TG Konstanz</span>
									</div>
									<div className="flex flex-row justify-start items-center gap-x-3">
										<div className="flex w-[160px] flex-row p-2 select-none opacity-50 italic gap-x-2 text-xl justify-start items-center">
											<FaMusic size={25} />
											<span>Song</span>
										</div>
										<span>Yuno Miles - Indiana jones</span>
									</div>
									<div className="flex flex-row justify-start items-center gap-x-3">
										<div className="flex w-[160px] flex-row p-2 select-none opacity-50 italic gap-x-2 text-xl justify-start items-center">
											<FaCalendarPlus size={25} />
											<span>Joined Spark</span>
										</div>
										<span>09.10.24</span>
									</div>
									<div className="flex flex-row justify-start items-center gap-x-3">
										<div className="flex w-[160px] flex-row p-2 select-none opacity-50 italic gap-x-2 text-xl justify-start items-center">
											<FaHeart size={25} />
											<span>Relationship</span>
										</div>
										<span>No / Yes</span>
									</div>
									<div className="flex flex-row justify-start items-center gap-x-3">
										<div className="flex w-[160px] flex-row p-2 select-none opacity-50 italic gap-x-2 text-xl justify-start items-center">
											<FaFlag size={25} />
											<span>Interests</span>
										</div>
										<div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
											<span
												style={{
													background:
														theme?.theme.colors
															.secondary,
												}}
												className="p-2 rounded-md select-none cursor-pointer">
												Coding
											</span>
											<span
												style={{
													background:
														theme?.theme.colors
															.secondary,
												}}
												className="p-2 rounded-md select-none cursor-pointer">
												Drawing
											</span>
											<span
												style={{
													background:
														theme?.theme.colors
															.secondary,
												}}
												className="p-2 rounded-md select-none cursor-pointer">
												Yuno miles
											</span>
										</div>
									</div>
								</div>
								<div
									style={{
										background: theme?.theme.colors.primary,
										borderColor:
											theme?.theme.colors.secondary,
									}}
									className="border-2 p-2 w-[400px] mobile-p-2-b rounded-md">
									<h1 className="text-xl select-none font-semibold border-b pb-2 opacity-50 mb-2">
										Socials
									</h1>
									<div className="flex flex-row gap-x-2 gap-y-1">
										<div
											style={{
												background:
													theme?.theme.colors
														.secondary,
											}}
											className="flex justify-center items-center w-fit h-fit rounded-md cursor-pointer">
											<FaInstagram
												size={25}
												className="m-2"
											/>
										</div>
										<div
											style={{
												background:
													theme?.theme.colors
														.secondary,
											}}
											className="flex justify-center items-center w-fit h-fit rounded-md cursor-pointer">
											<FaYoutube
												size={25}
												className="m-2"
											/>
										</div>
										<div
											style={{
												background:
													theme?.theme.colors
														.secondary,
											}}
											className="flex justify-center items-center w-fit h-fit rounded-md cursor-pointer">
											<FaDiscord
												size={25}
												className="m-2"
											/>
										</div>
										<div
											style={{
												background:
													theme?.theme.colors
														.secondary,
											}}
											className="flex justify-center items-center w-fit h-fit rounded-md cursor-pointer">
											<FaSpotify
												size={25}
												className="m-2"
											/>
										</div>
										<div
											style={{
												background:
													theme?.theme.colors
														.secondary,
											}}
											className="flex justify-center items-center w-fit h-fit rounded-md cursor-pointer">
											<FaXTwitter
												size={25}
												className="m-2"
											/>
										</div>
										<div
											style={{
												background:
													theme?.theme.colors
														.secondary,
											}}
											className="flex justify-center items-center w-fit h-fit rounded-md cursor-pointer">
											<FaSnapchat
												size={25}
												className="m-2"
											/>
										</div>
									</div>
								</div>
								<div
									style={{
										background: theme?.theme.colors.primary,
										borderColor:
											theme?.theme.colors.secondary,
									}}
									className="border-2 p-2 w-[500px] mobile-p-2-b rounded-md">
									<h1 className="text-xl select-none font-semibold border-b pb-2 opacity-50 mb-2">
										About me
									</h1>
									<span className="italic">
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Aspernatur, fuga?
									</span>
								</div>
								<div
									style={{
										background: theme?.theme.colors.primary,
										borderColor:
											theme?.theme.colors.secondary,
									}}
									className="border-2 p-2 w-[400px] mobile-p-2-b rounded-md">
									<h1 className="text-xl select-none font-semibold border-b pb-2 opacity-50 mb-2">
										Groups
									</h1>
									<div className="flex flex-col gap-y-1">
										<Contact
											name="Stein Group"
											lastMessage=""
											icon="/stein_pfp.png"
											hasStory={false}
											id="10"
										/>
									</div>
								</div>
								<div
									style={{
										background: theme?.theme.colors.primary,
										borderColor:
											theme?.theme.colors.secondary,
									}}
									className="border-2 p-2 w-[500px] mobile-p-2-b rounded-md">
									<h1 className="text-xl select-none font-semibold border-b pb-2 opacity-50 mb-2">
										Badges
									</h1>
									<div className="w-full h-full flex flex-col">
										<div
											className="flex flex-row hover:opacity-100 group opacity-75 p-2 mb-2 border-transparent rounded-md items-center select-none"
											style={{
												borderColor:
													theme?.theme.colors.accent,
											}}>
											<Image
												alt="Badge logo"
												src={"/staffbadge.png"}
												width={1024}
												height={1024}
												className="w-16 h-1w-16 no-drag"
											/>
											<h1 className="text-xl font-bold ml-5">
												Staff
											</h1>
											<p className="group-hover:scale-100 transition-all ease-in duration-100 scale-0 ml-2 mr-5 text-sm opacity-75">
												The STAFF badge is for people
												who are part of the SPARKS team
												and help to moderate and manage
												it.
											</p>
										</div>
										<div
											className="flex flex-row hover:opacity-100 group opacity-75 p-2 mb-2 border-transparent rounded-md items-center select-none"
											style={{
												borderColor:
													theme?.theme.colors.accent,
											}}>
											<Image
												alt="Badge logo"
												src={"/developerbadge.png"}
												width={1024}
												height={1024}
												className="w-16 h-1w-16 no-drag"
											/>
											<h1 className="text-xl font-bold ml-5">
												Developer
											</h1>
											<p className="group-hover:scale-100 transition-all ease-in duration-100 scale-0 ml-2 mr-5 text-sm opacity-75">
												The DEVELOPER badge is for
												people who have created new
												features out of nothing at SPARK
												and made everything you see.
											</p>
										</div>
										<div
											className="flex flex-row hover:opacity-100 group opacity-75 p-2 mb-2 border-transparent rounded-md items-center select-none"
											style={{
												borderColor:
													theme?.theme.colors.accent,
											}}>
											<Image
												alt="Badge logo"
												src={"/memberbadge.png"}
												width={1024}
												height={1024}
												className="w-16 h-1w-16 no-drag"
											/>
											<h1 className="text-xl font-bold ml-5">
												Member
											</h1>
											<p className="group-hover:scale-100 transition-all ease-in duration-100 scale-0 ml-2 mr-5 text-sm opacity-75">
												The MEMBER badge shows that you
												are a proud member of this
												platform.
											</p>
										</div>
									</div>
								</div>
								<br></br>
								<br></br>
							</div>
						</div>
						<br></br>
					</div>
				</div>
				<div className="min-w-[450px] w-[600px] max-w-[600px] h-full hide-home-bars">
					<div className="w-fit max-w-[500px] absolute h-full overflow-y-scroll">
						<Post />
						<Post />
						<Post />
					</div>
				</div>
			</div>
		</Mainapp>
	);
}
