import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ContactProps {
	icon: any;
	name: string;
	lastMessage: string;
	hasStory: boolean;
	id: string;
}
export const Contact: React.FC<ContactProps> = ({
	icon,
	name,
	lastMessage,
	hasStory,
	id,
}) => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	return (
		<div
			style={
				{
					"--text-color": theme?.theme.colors.text,
					"--secondary-color": theme?.theme.colors.secondary,
				} as React.CSSProperties
			}
			className="flex min-w-[54px] mt-1.5 flex-row hoverBackground justify-start items-center h-14 cursor-pointer select-none rounded-md hover:opacity-85 group">
			<div className="w-full max-w-16 h-full flex justify-center items-center">
				<div
					style={{ borderColor: theme?.theme.colors.accent }}
					className={
						hasStory
							? `border-solid border-2 hover:border-4 group-hover:-translate-y-0 translate-y-0.5 ease-in transition-all overflow-hidden duration-75 select-none drag-none no-drag rounded-full object-cover`
							: `group-hover:-translate-y-0 translate-y-0.5 ease-in transition-all overflow-hidden duration-75 select-none drag-none no-drag rounded-full object-cover`
					}
					onClick={() => {
						if (hasStory) {
							router.push("/home/users/" + id + "/story");
						}
					}}>
					<Image
						width={45}
						height={45}
						alt="Profile picture"
						src={icon}
					/>
				</div>
			</div>
			<div className="flex flex-col ">
				<span className="text-xl font-semibold w-full text-start max-w-[200px] ellipsis">
					{name}
				</span>
				<span className="max-w-[200px] opacity-75 ellipsis">
					{lastMessage}
				</span>
			</div>
		</div>
	);
};

