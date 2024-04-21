import { LOGO } from "@/app/homepage/LOGO";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const NavBar = () => {
	return (
		<div className="w-full h-12 max-h-12 min-h-12 p-1 bg-gray-300 flex overflow-y-hidden flex-row fixed z-50 justify-start items-center border-b border-gray-900 border-spacing-1.5">
			<div className="translate-y-1"><LOGO width='130px' height='60px' white={false} /></div>
			<div className="w-full flex flex-row items-center justify-center">
				<div className="w-full min-w-0 pl-5 pr-5 h-full m-1 flex-row flex overflow-x-hidden justify-start">
					<div className="flex flex-row justify-center select-none items-center cursor-pointer ml-3 p-2 text-nowrap hover:bg-gray-400 rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Normal Link
						</span>
					</div>
					<div className="flex flex-row justify-center select-none items-center cursor-pointer p-2 text-nowrap hover:bg-gray-400 rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Normal Link
						</span>
					</div>
					<div className="flex flex-row justify-center select-none items-center cursor-pointer p-2 ml-3 text-nowrap hover:bg-gray-400 rounded-md transition-all ease-in duration-75">
						<span className="font-semibold text-base">
							Normal Link
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
