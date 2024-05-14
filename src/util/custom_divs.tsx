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
		<div
			className="border border-spacing-1.5 p-5 text-xl rounded-md select-none cursor-pointer  font-bold hover:border-none"
			style={{
				color: theme?.theme.colors.text,
				background: theme?.theme.colors.background,
				borderColor: theme?.theme.colors.accent,
			}}
			onClick={() => {
				router.push(link)
			}}>
			<span>{text}</span>
		</div>
	);
};

export default OpenDiv;
