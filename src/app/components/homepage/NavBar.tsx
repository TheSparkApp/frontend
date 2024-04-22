import { LOGO } from "@/app/homepage/LOGO";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ThemeContext } from "../ThemeProvider";

export const NavBar = () => {
	const theme = React.useContext(ThemeContext) 

	return (
		<div style={{background: theme?.theme.colors.primary}} className="w-full h-12 max-h-12 min-h-12 p-1 flex overflow-y-hidden flex-row fixed z-50 justify-start items-center border-b border-gray-900 border-spacing-1.5">
			<div className="translate-y-1"><LOGO width='130px' height='60px' white={!theme?.theme.colors.logo_white} /></div>
			<div className="w-full flex flex-row items-center justify-center">
				<div className="w-full min-w-0 pl-5 pr-5 h-full m-1 flex-row flex overflow-x-hidden justify-start">
					<div style={{color: theme?.theme.colors.text}} className="flex flex-row justify-center select-none hover:opacity-80 items-center cursor-pointer ml-3 p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Normal Link
						</span>
					</div>
					<div style={{color: theme?.theme.colors.text}} className="flex flex-row justify-center select-none hover:opacity-80 items-center cursor-pointer p-2 hover:translate-x-1 hover:-translate-y-1 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Normal Link
						</span>
					</div>
					<div style={{color: theme?.theme.colors.text}} className="flex flex-row justify-center select-none hover:opacity-80 items-center cursor-pointer p-2 hover:translate-x-1 hover:-translate-y-1 ml-3 text-nowrap rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Normal Link
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
