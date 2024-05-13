"use client";
import { NavBar } from "@/components/homepage/NavBar";
import { LOGO } from "@/components/LOGO";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "../../util.css"
import NumberFormatter from "@/util/numberFormatter";
import DateFormatter from "@/util/dateFormatter";
import { FaEye } from "react-icons/fa";

type Params = {
	params: {
		blogId?: string;
	};
};

export default function PostPage({ params }: Params) {
	const theme = React.useContext(ThemeContext);
	const { blogId } = params;
	const router = useRouter();
	if (!blogId || !/^\d+$/.test(blogId)) {
		router.push("/blog");
	}

	const [blogname, setblogname] = useState("Blog Name");
	const [Author, setAuthor] = useState( // OUT OF DATABASE
		{
			id: 1312312312,
			name: "Author",
			//... more profile stuff like profile picture
		}
	);
	const formattedViews = <NumberFormatter value={parseInt("1912")} />; 				// OUT OF DATABASE
	const formattedTimestamp = <DateFormatter timestamp={parseInt("1715519669")} />; 	// OUT OF DATABASE

	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main className="w-full h-screen flex flex-col overflow-x-hidden overflow-y-auto justify-start pb-5 items-center transition-all ease-in duration-75" style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<div className="w-full min-h-[400px] overflow-hidden blur-sm max-w-[2800px] min-w-[500px] select-none no-drag">
					<Image alt="thumbnail" src="/blogexample.jpg" width={1000} height={100} style={{ width: '100%', objectFit: "cover", MozWindowDragging: "no-drag" }} className="no-drag" />
				</div>
				<h1 style={{ color: theme?.theme.colors.text }} className="text-8xl text-center -translate-y-16 font-black italic select-none">{blogname}</h1>
				<div style={{ color: theme?.theme.colors.text }} className="flex flex-col h-full w-full max-w-[1200px] pl-5 pr-5 break-words">
					<p>Content</p>


					<br></br>
					<div className="w-full max-w-[1200px] mt-2 mb-5 h-[1.5px] rounded-full bg-slate-300"/>
					<div className="flex flex-col justify-center">
						<h1 className="text-xl break-words">Written by <a style={{ color: theme?.theme.colors.text_link }} href={`/home/users/${Author.id}`}>{Author.name}</a></h1>
						<div className="flex flex-row">
							<p className="opacity-75">{formattedTimestamp}</p>
							<p className="opacity-75 ml-5 flex flex-row items-center gap-1"><FaEye/>{formattedViews}</p>
							<p className="opacity-75 ml-5 flex flex-row">ID {blogId}</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
