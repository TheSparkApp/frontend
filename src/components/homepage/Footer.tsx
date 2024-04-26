import React from "react";
import { ThemeContext } from "../ThemeProvider";

const Footer = () => {
	const theme = React.useContext(ThemeContext) 

	return (
		<div style={{background: theme?.theme.colors.background}} className="w-full h-full text-black-200 shadow-lg p-[15px] z-20 text-white">
			<div className="w-full flex flex-col items-center justify-center">
			<p style={{color: theme?.theme.colors.text}} className="text-[15px] italic font-semibold">Made by Stein & Rafa</p>
			<div style={{color: theme?.theme.colors.text}} className="flex flex-row flex-wrap max-w-[500px] w-11/12 gap-10 gap-y-2 justify-center items-start">
				<a href="#">Privacy Policies</a>
				<a href="#">Imprint</a>
			</div>
			<a style={{color: theme?.theme.colors.text}} href="mailto:spark-org@dxby.dev" className="text-lg font-semibold opacity-100">spark-org@dxby.dev</a>
			</div>
		</div>
	);
};

export default Footer;
