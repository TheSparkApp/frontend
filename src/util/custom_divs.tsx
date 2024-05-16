import { ThemeContext } from "@/components/ThemeProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
interface OpenDiv {
	title: string;
	children?: React.ReactNode;
}
const OpenDiv: React.FC<OpenDiv> = ({ title, children }) => {
	const router = useRouter();
	const theme = React.useContext(ThemeContext);
	const [isOpen, setisOpen] = useState(false);

	return (
		<div
			style={{ color: theme?.theme.colors.text }}
			className="w-full h-fit min-h-10 flex flex-col overflow-x-hidden break-words mt-5 cursor-pointer">
			<div
				className="font-bold flex flex-row items-center select-none"
				onClick={() => setisOpen(!isOpen)}>
				{isOpen ? (
					<FaAngleDown color="white" size={20} />
				) : (
					<FaAngleUp color="white" size={20} />
				)}
				<h1 className="text-xl ml-10">{title}</h1>
			</div>
			<div className={isOpen ? "mt-1 flex flex-col" : "hidden"}>
				{children}
			</div>
		</div>
	);
};

interface CardDiv {
	text: string;
	link: string;
}
export const CardDiv: React.FC<CardDiv> = ({ text, link }) => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	return (
		<a
			className="border select-none border-spacing-1.5 text-xl mt-2 rounded-md hover:-translate-y-2 translate-x-0 hover:translate-x-1 translate-y-0 cursor-pointer font-bold p-3 duration-200 ease-in transition-all"
			style={{
				color: theme?.theme.colors.text,
				borderColor: theme?.theme.colors.accent,
				textDecoration: "none"
			}}
			href={link}
			onClick={(e) => {
				e.preventDefault();
				router.push(link)
			}}>
			<span>{text}</span>
		</a>
	);
};

export default OpenDiv;
