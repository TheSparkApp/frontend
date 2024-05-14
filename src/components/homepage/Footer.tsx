import React from "react";
import { ThemeContext } from "../ThemeProvider";
import { useRouter } from "next/navigation";
import { main } from "@/util/emails";

const Footer = () => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	return (
		<div style={{ background: theme?.theme.colors.background }} className="w-full h-full text-black-200 shadow-lg p-[15px] z-20 text-white">
			<div className="w-full flex flex-col items-center justify-center">
				<p style={{ color: theme?.theme.colors.text }} onClick={() => router.push("/#authors")} className="text-[15px] italic font-semibold cursor-pointer">
					Made by Stein & Rafa
				</p>
				<div style={{ color: theme?.theme.colors.text }} className="flex flex-row flex-wrap max-w-[500px] w-11/12 gap-x-5 gap-y-1 justify-center items-start">
					<a className="cursor-pointer" onClick={() => router.push("/privacy-policy")}>Privacy Policies</a>
					<a className="cursor-pointer" onClick={() => router.push("/terms-of-service")}>Terms of service</a>
					<a className="cursor-pointer" onClick={() => router.push("/rules")}>Rules of use and interaction</a>
					<a className="cursor-pointer" onClick={() => router.push("/imprint")}>Imprint</a>
				</div>
				<a style={{ color: theme?.theme.colors.text }} href={`mailto:${main}`} className="text-lg font-semibold opacity-100">
					{main}
				</a>
			</div>
		</div>
	);
};

export default Footer;
