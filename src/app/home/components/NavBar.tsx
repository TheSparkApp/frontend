"use client";
import { LOGO, LOGO_SMALL } from "@/components/LOGO";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { useRouter } from "next/navigation";
import {
	FaBars,
	FaBarsStaggered,
	FaPeopleGroup,
	FaPlus,
	FaBell,
	FaUsers,
} from "react-icons/fa6";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export const NavBar = () => {
	const theme = React.useContext(ThemeContext);
	const [isTokenSet, setIsTokenSet] = useState(false);
	const [newNotificationAmount, setnewNotificationAmount] = useState(3);
	const [newMessageAmount, setnewMessageAmount] = useState(3);
	const [openSearch, setopenSearch] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsTokenSet(true);
		} else setIsTokenSet(false);
	}, []);

	const router = useRouter();

	return (
		<div className="flex flex-col items-center">
			<div
				style={{
					borderColor: theme?.theme.colors.accent,
					background: theme?.theme.colors.background,
				}}
				className="w-full max-w-[1920px] backdrop-blur-lg h-14 max-h-14 min-h-14 p-1 flex flex-row fixed z-50 justify-start items-center border-gray-900 border-spacing-1.5">
				<div
					onClick={() => router.push("/home")}
					className="translate-y-1 ml-2 cursor-pointer hide-phone2">
					<LOGO
						width="130px"
						height="60px"
						white={!theme?.theme.colors.logo_white}
					/>
				</div>
				<div
					onClick={() => router.push("/")}
					className="translate-y-0 ml-5 cursor-pointer show-phone2 hidden">
					<LOGO_SMALL width="40px" height="40px" />
				</div>
				<div className="w-full flex flex-row items-center justify-end select-none">
					<div className="w-full min-w-0 pl-5 pr-5 h-full m-1 flex-row flex hideon-phone overflow-x-hidden justify-center">
						<form className="w-full max-w-[800px] h-[43px] flex items-center">
							<div
								className="flex flex-row h-[43px] w-full items-center border rounded-md mr-1"
								style={{
									borderColor: theme?.theme.colors.secondary,
									color: theme?.theme.colors.text,
								}}>
								<IoSearch
									size={20}
									color={theme?.theme.colors.text}
									opacity={0.5}
									className="ml-2"
								/>
								<input
									className="w-full ml-1 bg-transparent outline-none mr-2 p-2 font"
									placeholder="Search Spark"
								/>
							</div>
						</form>
					</div>
					<div className="show-phone hidden">
						<div
							style={{
								borderColor: theme?.theme.colors.secondary,
							}}
							onClick={() => setopenSearch(!openSearch)}
							className="drag-none mr-2 group border rounded-full min-h-[45px] min-w-[45px] w-[45px] h-[45px] max-w-[45px] max-h-[45px] cursor-pointer hover:shadow-lg flex flex-row justify-center items-center shadow-black transition-all ease-in duration-75">
							<IoSearch
								size={30}
								color={theme?.theme.colors.text}
								opacity={0.5}
								className="group-hover:opacity-75"
							/>
						</div>
					</div>
					<div className="w-fit relative mr-2 h-full flex-row flex justify-center items-center">
						<div
							style={{
								borderColor: theme?.theme.colors.secondary,
							}}
							className="drag-none mr-2 group border rounded-full min-h-[45px] min-w-[45px] w-[45px] h-[45px] max-w-[45px] max-h-[45px] cursor-pointer hover:shadow-lg flex justify-center items-center shadow-black transition-all ease-in duration-75">
							<FaBell
								size={30}
								color={theme?.theme.colors.text}
								opacity={0.5}
								className="group-hover:opacity-75"
							/>
							{newNotificationAmount > 0 ? (
								<div
									style={{
										color: theme?.theme.colors
											.text_negative,
									}}
									className="absolute max-w-8 bg-red-500 w-fit h-5 flex justify-center items-center pl-1 pr-1 rounded-md translate-x-3 -translate-y-3">
									<span className="font-semibold">
										{newNotificationAmount > 9
											? "9+"
											: newNotificationAmount}
									</span>
								</div>
							) : null}
							<div
								className="absolute hideon-phone hideon-ipad shadow-sm shadow-black font-semibold scale-0 border translate-y-14 z-50 backdrop-blur-md p-2 pointer-events-none rounded-md group-hover:scale-100 duration-100 ease-in transition-all"
								style={{
									borderColor: theme?.theme.colors.secondary,
									color: theme?.theme.colors.text,
									background: theme?.theme.colors.primary,
								}}>
								<span>Notifactions</span>
							</div>
						</div>
						<div
							style={{
								borderColor: theme?.theme.colors.secondary,
							}}
							className="drag-none mr-2 group border rounded-full min-h-[45px] min-w-[45px] w-[45px] h-[45px] max-w-[45px] max-h-[45px] cursor-pointer hover:shadow-lg flex justify-center items-center shadow-black transition-all ease-in duration-75">
							<FaPlus
								size={30}
								color={theme?.theme.colors.text}
								opacity={0.5}
								className="group-hover:opacity-75"
							/>
							<div
								className="absolute hideon-phone hideon-ipad shadow-sm shadow-black font-semibold scale-0 border translate-y-14 z-50 backdrop-blur-md p-2 pointer-events-none rounded-md group-hover:scale-100 duration-100 ease-in transition-all"
								style={{
									borderColor: theme?.theme.colors.secondary,
									color: theme?.theme.colors.text,
									background: theme?.theme.colors.primary,
								}}>
								<span>Post</span>
							</div>
						</div>
						<div
							style={{
								borderColor: theme?.theme.colors.secondary,
							}}
							className="drag-none mr-2 group border rounded-full min-h-[45px] min-w-[45px] w-[45px] h-[45px] max-w-[45px] max-h-[45px] cursor-pointer hover:shadow-lg flex justify-center items-center shadow-black transition-all ease-in duration-75">
							<FaUsers
								size={30}
								color={theme?.theme.colors.text}
								opacity={0.5}
								className="group-hover:opacity-75"
							/>
							<div
								className="absolute hideon-phone hideon-ipad shadow-sm shadow-black font-semibold scale-0 border translate-y-14 z-50 backdrop-blur-md p-2 pointer-events-none rounded-md group-hover:scale-100 duration-100 ease-in transition-all"
								style={{
									borderColor: theme?.theme.colors.secondary,
									color: theme?.theme.colors.text,
									background: theme?.theme.colors.primary,
								}}>
								<span>Groups</span>
							</div>
						</div>
						<div
							style={{
								borderColor: theme?.theme.colors.secondary,
							}}
							className="drag-none mr-2 group border rounded-full min-h-[45px] min-w-[45px] w-[45px] h-[45px] max-w-[45px] max-h-[45px] cursor-pointer hover:shadow-lg flex justify-center items-center shadow-black transition-all ease-in duration-75">
							<IoMdMail
								size={30}
								color={theme?.theme.colors.text}
								opacity={0.5}
								className="group-hover:opacity-75"
							/>
							{newMessageAmount > 0 ? (
								<div
									style={{
										color: theme?.theme.colors
											.text_negative,
									}}
									className="absolute max-w-8 bg-red-500 w-fit h-5 flex justify-center items-center pl-1 pr-1 rounded-md translate-x-3 -translate-y-3">
									<span className="font-semibold">
										{newMessageAmount > 9
											? "9+"
											: newMessageAmount}
									</span>
								</div>
							) : null}
							<div
								className="absolute hideon-phone hideon-ipad shadow-sm shadow-black font-semibold scale-0 border translate-y-14 z-50 backdrop-blur-md p-2 pointer-events-none rounded-md group-hover:scale-100 duration-100 ease-in transition-all"
								style={{
									borderColor: theme?.theme.colors.secondary,
									color: theme?.theme.colors.text,
									background: theme?.theme.colors.primary,
								}}>
								<span>Messages</span>
							</div>
						</div>
						<div
							className="drag-none border group rounded-full cursor-pointer hover:shadow-lg flex justify-center items-center shadow-black transition-all ease-in duration-75"
							style={{
								borderColor: theme?.theme.colors.secondary,
							}}>
							<Image
								src={"/stein_pfp.png"}
								width={50}
								height={50}
								alt="Profile picture"
								className="object-cover min-h-[50px] min-w-[50px] w-[52px] h-[50px] max-w-[50px] max-h-[50px] group-hover:opacity-100 opacity-75 rounded-full"
							/>
							<div
								className="absolute hideon-phone hideon-ipad shadow-sm shadow-black font-semibold scale-0 border translate-y-14 z-50 backdrop-blur-md p-2 pointer-events-none rounded-md group-hover:scale-100 duration-100 ease-in transition-all"
								style={{
									borderColor: theme?.theme.colors.secondary,
									color: theme?.theme.colors.text,
									background: theme?.theme.colors.primary,
								}}>
								<span>Profile</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{openSearch ? (
				<div
					className="relative top-[55px] show-phone hidden pb-3"
					style={{
						background: theme?.theme.colors.background,
					}}>
					<div className="flex flex-col justify-center items-center w-full">
						<form className="w-10/12 mt-2 max-w-[800px] h-[43px] flex items-center">
							<div
								className="flex flex-row h-[45px] w-full items-center border rounded-md mr-1"
								style={{
									borderColor: theme?.theme.colors.secondary,
									color: theme?.theme.colors.text,
								}}>
								<IoSearch
									size={20}
									color={theme?.theme.colors.text}
									opacity={0.5}
									className="ml-2"
								/>
								<input
									className="w-full ml-1 bg-transparent outline-none mr-2 p-2 font"
									placeholder="Search Spark"
								/>
							</div>
						</form>
					</div>
				</div>
			) : (
				""
			)}
			<br></br>
			<br></br>
		</div>
	);
};
