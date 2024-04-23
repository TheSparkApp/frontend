import { LOGO } from "@/app/homepage/LOGO";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ThemeContext } from "../ThemeProvider";

export const NavBar = () => {
	const theme = React.useContext(ThemeContext) 

	return (
		<div style={{background: theme?.theme.colors.primary, borderColor: theme?.theme.colors.accent}} className="w-full h-12 max-h-12 min-h-12 p-1 flex overflow-y-hidden flex-row fixed z-50 justify-start items-center border-b border-gray-900 border-spacing-1.5">
			<div className="translate-y-1 ml-2">
				<LOGO width='130px' height='60px' white={!theme?.theme.colors.logo_white} />
			</div>
			<div className="w-full flex flex-row items-center justify-center">
				<div className="w-full min-w-0 pl-5 pr-5 h-full m-1 flex-row flex overflow-x-hidden justify-start">
					<div style={{color: theme?.theme.colors.text}} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							What's SPARK
						</span>
					</div>
					<div style={{color: theme?.theme.colors.text}} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Privacy Policies
						</span>
					</div>
					<div style={{color: theme?.theme.colors.text}} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Blog
						</span>
					</div>
					<div style={{color: theme?.theme.colors.text}} className="flex flex-row justify-center select-none hideon-phone hover:opacity-80 items-center cursor-pointer p-2 hover:translate-x-1 hover:-translate-y-1 ml-3 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Help
						</span>
					</div>
				</div>
				<div style={{background: theme?.theme.colors.primary}} className="w-fit mr-10 relative h-full flex-row flex justify-end items-center">
					<div className="absolute bg-yellow p-3 pt-1 ml-5 -translate-x-5 ease-in duration-75 transition-all hover:-translate-y-0.5 pb-1 cursor-pointer rounded-md">
						<span style={{color: theme?.theme.colors.text}} className="font-bold italic text-xl">Join</span>
					</div>
				</div>
			</div>
		</div>
	);
};
