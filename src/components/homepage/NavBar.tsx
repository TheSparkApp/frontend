import { LOGO } from "@/components/LOGO";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ThemeContext } from "../ThemeProvider";
import { useRouter } from "next/navigation";

export const NavBar = () => {
	const theme = React.useContext(ThemeContext);
	const [isTokenSet, setIsTokenSet] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsTokenSet(true);
		} else setIsTokenSet(false);
	}, []);

	const router = useRouter();

	return (
		<div style={{ background: theme?.theme.colors.primary, borderColor: theme?.theme.colors.accent }} className="w-full h-12 max-h-12 min-h-12 p-1 flex overflow-y-hidden flex-row fixed z-50 justify-start items-center border-b border-gray-900 border-spacing-1.5">
			<div onClick={() => router.push("/")} className="translate-y-1 ml-2 cursor-pointer">
				<LOGO width="130px" height="60px" white={!theme?.theme.colors.logo_white} />
			</div>
			<div className="w-full flex flex-row items-center justify-center select-none">
				<div className="w-full min-w-0 pl-5 pr-5 h-full m-1 flex-row flex overflow-x-hidden justify-start">
					<div onClick={() => router.push("/#whats-it")} style={{ color: theme?.theme.colors.text }} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">What&apos;s SPARK</span>
					</div>
					<div onClick={() => router.push("/privacy-policy")} style={{ color: theme?.theme.colors.text }} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">Privacy Policies</span>
					</div>
					<div onClick={() => router.push("/terms-of-service")} style={{ color: theme?.theme.colors.text }} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">Terms of Service</span>
					</div>
					<div onClick={() => router.push("/blog")} style={{ color: theme?.theme.colors.text }} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">Blog</span>
					</div>
					<div onClick={() => router.push("/help")} style={{ color: theme?.theme.colors.text }} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer p-2 hover:translate-x-1 hover:-translate-y-1 ml-3 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">Help</span>
					</div>
					<div onClick={() => router.push("/dev")} style={{ color: theme?.theme.colors.text }} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer p-2 hover:translate-x-1 hover:-translate-y-1 ml-3 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-black text-blue-400 border-2 border-blue-500 border-solid text-xl p-1 rounded-lg hover:bg-blue-900 transition-all">DEV</span>
					</div>
				</div>
				<div style={{ background: theme?.theme.colors.primary }} className="w-fit mr-10 relative h-full flex-row flex justify-end items-center">
					<div className="absolute bg-yellow p-3 pt-1 ml-5 -translate-x-5 ease-in duration-75 transition-all hover:-translate-y-0.5 pb-1 cursor-pointer rounded-md">
						<span onClick={() => (window.location.href = isTokenSet ? "/home" : "/auth/login")} style={{ color: theme?.theme.colors.text }} className="font-bold italic text-xl text-nowrap">
							{isTokenSet ? "Open Spark" : "Join"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
