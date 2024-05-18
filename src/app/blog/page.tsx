"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import { ThemeContext } from "../../components/ThemeProvider";
import "../util.css";
import { LOGO } from "@/components/LOGO";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa"; // FREE USAGE
import NumberFormatter from "@/util/numberFormatter";
import DateFormatter from "@/util/dateFormatter";

export default function Blog() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main
				className="w-full h-screen flex flex-col overflow-x-hidden overflow-y-auto justify-start pb-5 items-center transition-all ease-in duration-75"
				style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<br></br>
				<div className="w-11/12 max-w-[900px] items-start justify-center flex flex-col mb-10">
					<div className="w-full items-center justify-center flex flex-col">
						<LOGO
							width="320px"
							height="120px"
							white={!theme?.theme.colors.logo_white}
						/>
						<h1
							style={{ color: theme?.theme.colors.text }}
							className="text-5xl font-black italic">
							SPARK&apos;S BLOG
						</h1>
					</div>
				</div>
				<div className="flex flex-row w-10/12 min-w-[400px] max-w-[1500px] justify-center pl-4 pr-4 flex-wrap gap-5">
					<div className="w-full h-10 flex flex-row justify-center items-center">
						<span
							className="font-bold text-xl text-nowrap"
							style={{ color: theme?.theme.colors.text }}>
							NEW
						</span>
						<div
							className="w-full ml-5 h-0.5 rounded-md"
							style={{
								background: theme?.theme.colors.text,
							}}></div>
					</div>
					<div className="flex w-11/12 ml-3 flex-row justify-start items-center flex-wrap gap-5">
						<BlogPost
							title="Cats"
							description="Cats"
							thumbnail="/blogexample.jpg"
							id="1"
							created="1715519669"
							views="123123"
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
interface BlogProps {
	title: string;
	description: string;
	thumbnail: string;
	id: string;
	created: string;
	views: string;
}

const BlogPost: React.FC<BlogProps> = ({
	title,
	description,
	thumbnail,
	id,
	created,
	views,
}) => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	const formattedViews = <NumberFormatter value={parseInt(views)} />;
	const formattedTimestamp = <DateFormatter timestamp={parseInt(created)} />;
	return (
		<div
			style={{ borderColor: theme?.theme.colors.accent }}
			onClick={() => router.push("/blog/" + id.toString())}
			className="flex group relative select-none flex-col w-[400px] h-[200px] cursor-pointer hover:shadow-xl shadow-black overflow-hidden rounded-md border border-spacing-1.5 hover:translate-x-1 hover:-translate-y-2 ease-in transition-all duration-100">
			<div className="h-full w-full group-hover:blur-sm transition-all duration-75 ease-in">
				<Image
					alt="thumbnail"
					width={0}
					height={0}
					src={thumbnail}
					sizes="100vw"
					className="w-full h-auto rounded-md object-cover drag-none"
				/>
			</div>
			<div
				style={{
					background: theme?.theme.colors.primary,
					color: theme?.theme.colors.text,
				}}
				className="absolute group-hover:translate-y-0 p-2 flex flex-col shadow-black group-hover:shadow-lg translate-y-20 bottom-0 ease-in transition-all duration-100 w-full">
				<div className="flex flex-row items-center">
					<h1 className="text-xl font">{title}</h1>
					<p className="text-sm ml-5 font opacity-75 mt-1">
						{formattedTimestamp}
					</p>
				</div>
				<div className="flex flex-row items-center">
					<div className="max-w-[300px] w-[300px] h-fit overflow-hidden overflow-ellipsis whitespace-nowrap">
						<p>{description}</p>
					</div>
					<p className="text-sm ml-5 font opacity-75 mt-1 flex flex-row items-center gap-1">
						<FaEye />
						{formattedViews}
					</p>
				</div>
			</div>
		</div>
	);
};
