import { LOGO } from "@/components/LOGO";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import { useRouter } from "next/navigation";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

export const NavBar = () => {
	const theme = React.useContext(ThemeContext);
	const [isTokenSet, setIsTokenSet] = useState(false);
	const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsTokenSet(true);
		} else setIsTokenSet(false);
	}, []);

	const router = useRouter();

	return (
		<>
			<div
				style={{ borderColor: theme?.theme.colors.accent }}
				className="w-full backdrop-blur-lg h-14 max-h-14 min-h-14 p-1 flex overflow-y-hidden flex-row fixed z-50 justify-start items-center  border-gray-900 border-spacing-1.5">
				<div
					onClick={() => router.push("/")}
					className="translate-y-1 ml-2 cursor-pointer">
					<LOGO
						width="130px"
						height="60px"
						white={!theme?.theme.colors.logo_white}
					/>
				</div>
				<div className="w-full flex flex-row items-center justify-center select-none">
					<div className="w-full min-w-0 pl-5 pr-5 h-full m-1 flex-row flex overflow-x-hidden justify-start">
						{/* <div onClick={() => router.push("/privacy-policy")} style={{ color: theme?.theme.colors.text }} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
        <span className="font-semibold text-base">Privacy Policies</span>
    </div>
    <div onClick={() => router.push("/terms-of-service")} style={{ color: theme?.theme.colors.text }} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
        <span className="font-semibold text-base">Terms of Service</span>
    </div> */}
						<div
							onClick={() => router.push("/safety")}
							style={{ color: theme?.theme.colors.text }}
							className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
							<span className="font-semibold text-base">
								Safety
							</span>
						</div>
						<div
							onClick={() => router.push("/support")}
							style={{ color: theme?.theme.colors.text }}
							className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
							<span className="font-semibold text-base">
								Support
							</span>
						</div>
						<div
							onClick={() => router.push("/blog")}
							style={{ color: theme?.theme.colors.text }}
							className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
							<span className="font-semibold text-base">
								Blog
							</span>
						</div>
						<div
							onClick={() => router.push("/help")}
							style={{ color: theme?.theme.colors.text }}
							className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer p-2 hover:translate-x-1 hover:-translate-y-1 ml-3 text-nowrap rounded-md transition-all ease-in duration-75">
							<span className="font-semibold text-base">
								Help
							</span>
						</div>
						<div
							onClick={() => router.push("/#whats-it")}
							style={{ color: theme?.theme.colors.text }}
							className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
							<span className="font-semibold text-base">
								What&apos;s SPARK
							</span>
						</div>
						<div
							onClick={() => router.push("/dev")}
							style={{ color: theme?.theme.colors.text }}
							className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer p-2 ml-3 text-nowrap rounded-sm transition-all ease-in duration-75">
							<span className="font-black text-blue-400 border-1 border-blue-500 border-solid text-xl p-1 rounded-lg hover:bg-blue-900 transition-all">
								DEV
							</span>
						</div>
					</div>
					<div className="w-fit mr-10  relative h-full flex-row flex justify-end items-center">
						<div
							style={{ borderColor: theme?.theme.colors.accent }}
							className="absolute bg-transparent border border-spacing-2 no-underline translate-x-3 backdrop-blur-sm p-3 pt-1 ml-5 ease-in duration-150 transition-all hover:bg-yellow-500 pb-1 cursor-pointer rounded-md">
							<a
								onClick={(e) => {
									e.preventDefault();
									router.push(
										isTokenSet ? "/home" : "/auth/login"
									);
								}}
								href={isTokenSet ? "/home" : "/auth/login"}
								style={{
									color: theme?.theme.colors.text,
									textDecoration: "none",
								}}
								className="font-bold text-xl text-nowrap no-underline opacity-100">
								{isTokenSet ? "Open Spark" : "Join"}
							</a>
						</div>
					</div>
					<div
						className="border border-spacing-2 p-2 rounded-md cursor-pointer hidden show-phone mr-5"
						style={{ borderColor: theme?.theme.colors.accent }}
						onClick={() => {
							setIsPhoneMenuOpen(!isPhoneMenuOpen);
						}}>
						{isPhoneMenuOpen ? (
							<FaBarsStaggered
								color={theme?.theme.colors.text}
								size={25}
								opacity={0.75}
							/>
						) : (
							<FaBars
								color={theme?.theme.colors.text}
								size={25}
							/>
						)}
					</div>
				</div>
			</div>
			<div className="show-phone hidden h-fit w-full">
				{isPhoneMenuOpen ? (
					<div
						style={{ borderColor: theme?.theme.colors.secondary }}
						className="hidden show-phone mt-16 w-full flex-row border-b pb-5">
						<div
							onClick={() => router.push("/safety")}
							style={{ color: theme?.theme.colors.text }}
							className="flex flex-row justify-center select-none hover:opacity-80 items-center cursor-pointer text-nowrap">
							<span className="font-semibold text-xl">
								Safety
							</span>
						</div>
						<div
							onClick={() => router.push("/support")}
							style={{ color: theme?.theme.colors.text }}
							className="flex mt-5 flex-row justify-center select-none hover:opacity-80 items-center cursor-pointer text-nowrap">
							<span className="font-semibold text-xl">
								Support
							</span>
						</div>
						<div
							onClick={() => router.push("/blog")}
							style={{ color: theme?.theme.colors.text }}
							className="flex mt-5 flex-row justify-center select-none hover:opacity-80 items-center cursor-pointer text-nowrap">
							<span className="font-semibold text-xl">
								Blog
							</span>
						</div>
						<div
							onClick={() => router.push("/help")}
							style={{ color: theme?.theme.colors.text }}
							className="flex mt-5 flex-row justify-center select-none hover:opacity-80 items-center cursor-pointer text-nowrap">
							<span className="font-semibold text-xl">
								Help
							</span>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};
