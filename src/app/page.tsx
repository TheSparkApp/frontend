"use client";
import React, { useEffect, useState } from "react";
import "./util.css";
import { LOGO } from "../components/LOGO";
import Footer from "@/components/homepage/Footer";
import { NavBar } from "../components/homepage/NavBar";
import { motion } from "framer-motion";
import { FaBolt, FaLock } from "react-icons/fa"; // FREE TO USE
import { FaUniversalAccess } from "react-icons/fa6"; // FREE TO USE
import Image from "next/image";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/util/motion";
import { ThemeContext } from "../components/ThemeProvider";
import { usePathname, useRouter } from "next/navigation";
import { main } from "@/util/emails";

function Index() {
	const theme = React.useContext(ThemeContext);
	const [isTokenSet, setIsTokenSet] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsTokenSet(true);
		} else setIsTokenSet(false);
	}, []);

	const pathname = usePathname();
	const router = useRouter();
	if (pathname !== "/") {
		router.push("/");
		return;
	}

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-col overflow-x-hidden overflow-y-scroll">
			<main
				className="w-full h-screen flex flex-col overflow-hidden transition-all ease-in duration-75"
				style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>

				<div className="w-full h-fit flex flex-col items-center overflow-y-scroll">
					<div className="flex flex-row mt-10 ml-10 select-none z-50">
						<h1
							className="text-6xl font-bold italic hideon-phone -translate-x-5"
							style={{ color: theme?.theme.colors.text_third }}>
							This is{" "}
						</h1>
						<div className="-translate-y-3 -translate-x-5">
							<LOGO
								width="320px"
								height="120px"
								white={!theme?.theme.colors.logo_white}
							/>
						</div>
					</div>
					<div className="flex w-fit flex-col">
						<div className="max-w-[800px] rounded-md flex flex-row flex-wrap justify-center items-start gap-4 select-none">
							<Card
								title="Is SPARK secure?"
								content="Yes, because we work with encryption, not even we can see your private data."
							/>
							<Card
								title="What's SPARK?"
								content="Simple, user-friendly social media platform with the aim of bringing people closer together."
							/>
							<Card
								title="Why SPARK?"
								content="It offers many opportunities to find more friends with the same interests. It's worth a try!"
							/>
						</div>
						<div
							className={`mt-5 h-fit flex flex-col justify-center items-center ${
								isTokenSet ? "hidden" : ""
							}`}>
							<div
								style={{
									background: theme?.theme.colors.primary,
									borderColor: theme?.theme.colors.accent,
								}}
								onClick={() =>
									router.push(
										isTokenSet ? "/home" : "/auth/login"
									)
								}
								className="border select-none hover:opacity-100 w-52 min-h-[55px] p-2 rounded-md flex flex-row justify-center items-center cursor-pointer transition-all ease-in duration-75 hover:-translate-y-1 shadow-yellow-500 hover:shadow-lg">
								<span
									style={{
										color: theme?.theme.colors.text_third,
									}}
									className="text-2xl font-bold italic -translate-y-0.5">
									Join Spark
								</span>
							</div>
						</div>
					</div>
					<div
						style={{ background: theme?.theme.colors.primary }}
						className=" pb-10 pt-2 w-full mt-10 flex-col flex items-center">
						<div className="w-11/12 max-w-[1200px] h-full translate-y-4">
							<motion.div
								variants={slideInFromLeft(0.5)}
								className="flex flex-row">
								<h1
									className="text-4xl font-semibold italic"
									style={{
										color: theme?.theme.colors
											.text_secondary,
									}}>
									Why{" "}
								</h1>
								<LOGO
									width="180px"
									height="60px"
									white={true}
								/>
								<h1
									className="text-4xl font-semibold italic"
									style={{
										color: theme?.theme.colors
											.text_secondary,
									}}>
									?
								</h1>
							</motion.div>
							<motion.div
								variants={slideInFromRight(0.5)}
								className="flex flex-row flex-wrap -mt-4 justify-center">
								<div className="flex flex-col mt-5 mr-16 opacity-75 select-none">
									<div className="flex flex-row justify-start items-center">
										<FaBolt
											color={
												theme?.theme.colors
													.text_secondary
											}
											size={45}
										/>
										<span
											className="font-bold italic text-5xl ml-2"
											style={{
												color: theme?.theme.colors
													.text_secondary,
											}}>
											FAST
										</span>
									</div>
									<div
										className="flex flex-col text-sm mt-1 max-w-[300px]"
										style={{
											color: theme?.theme.colors
												.text_secondary,
										}}>
										<span>
											Spark is designed for speed,
											offering fast and efficient data
											processing capabilities. With
											optimized algorithms and
											state-of-the-art technology, Spark
											handles large volumes of data
											quickly and effectively. This allows
											you to access and manipulate your
											data in real time, ensuring a smooth
											and responsive experience. Whether
											you&apos;re running complex
											computations or managing extensive
											datasets, Spark&apos;s
											performance-oriented architecture
											delivers quick results.
										</span>
									</div>
								</div>
								<div className="flex flex-col mt-5 mr-16 opacity-75 select-none">
									<div className="flex flex-row justify-start items-center">
										<FaLock
											color={
												theme?.theme.colors
													.text_secondary
											}
											size={45}
										/>
										<span
											className="font-bold italic text-5xl ml-2"
											style={{
												color: theme?.theme.colors
													.text_secondary,
											}}>
											SECURE
										</span>
									</div>
									<div
										className="flex flex-col text-sm mt-1 max-w-[300px]"
										style={{
											color: theme?.theme.colors
												.text_secondary,
										}}>
										<span>
											Spark ensures the safety of your
											data by employing advanced
											encryption methods and secure
											connections. Your information is
											safeguarded during transmission and
											storage, adhering to strict security
											standards to maintain
											confidentiality and integrity. With
											Spark, you can have peace of mind
											knowing that your data is protected
											from unauthorized access and
											potential breaches.
										</span>
									</div>
								</div>
								<div className="flex flex-col mt-5 mr-16 opacity-75 select-none translate-x-5">
									<div className="flex flex-row justify-start items-center">
										<FaUniversalAccess
											color={
												theme?.theme.colors
													.text_secondary
											}
											size={45}
										/>
										<span
											className="font-bold italic text-5xl ml-2"
											style={{
												color: theme?.theme.colors
													.text_secondary,
											}}>
											EASY TO USE
										</span>
									</div>
									<div
										className="flex flex-col text-sm mt-1 max-w-[300px]"
										style={{
											color: theme?.theme.colors
												.text_secondary,
										}}>
										<span>
											Spark is user-friendly, offering an
											intuitive interface and seamless
											integrations tailored to your social
											networking needs. With
											easy-to-understand tools, Spark
											makes it simple to manage your feeds
											and connect with friends, classmates
											and family. The sophisticated
											design, which you can also
											customise, ensures a smooth,
											hassle-free experience as you share
											and interact with content. Enjoy
											personalised recommendations and
											features that enhance your social
											media experience on Spark.
										</span>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
					<div
						id="whats-it"
						style={{ background: theme?.theme.colors.primary }}
						className=" pb-5 pt-2 w-full mt-2 flex-col flex items-center">
						<motion.div
							variants={slideInFromLeft(0.5)}
							className="w-11/12 max-w-[1200px] h-full flex flex-row">
							<Image
								alt=""
								width={500}
								height={500}
								className="min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] drag-none hideon-phone hideon-ipad"
								src="/phone.png"
							/>
							<div className="ml-3 mr-5 flex flex-row items-center">
								<span
									className="font-semibold text-3xl"
									style={{
										color: theme?.theme.colors
											.text_secondary,
									}}>
									<p className="text-5xl font-bold italic">
										SPARK
									</p>{" "}
									connects you with others, helps you make new
									contacts and shows you what others are
									doing! Try it out, it&apos;s easy with our
									simple user interface!
								</span>
							</div>
						</motion.div>
					</div>
					<div
						style={{ background: theme?.theme.colors.primary }}
						className=" pb-5 pt-2 w-full mt-2 flex-col flex items-center">
						<p
							className="text-5xl font-bold italic"
							style={{
								color: theme?.theme.colors.text_secondary,
							}}>
							ABOUT US
						</p>
						<motion.div
							id="authors"
							variants={slideInFromTop(0.2)}
							className="w-11/12 max-w-[1200px] h-full flex flex-row justify-center">
							<div className="ml-3 mr-5 flex flex-row items-start justify-center mt-4 pt-2 flex-wrap">
								<DevCard
									name="Stein"
									description="15 years, a penchant for mojito - Fonti di Crodo"
									path="/stein_pfp.png"
								/>
								<div className="flex flex-row hideon-phone w-fit h-full justify-center items-center hideon-ipad">
									<div
										style={{
											background:
												theme?.theme.colors.background,
										}}
										className="h-14 w-0.5 rounded-full"></div>
								</div>
								<DevCard
									name="Rafa"
									description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, vel."
									path="/rafa_pfp.png"
								/>
							</div>
						</motion.div>
					</div>
					<div
						style={{ background: theme?.theme.colors.primary }}
						className=" pb-5 pt-2 w-full mt-2 flex-col flex items-center">
						<div className="w-11/12 max-w-[1200px] h-full flex flex-col justify-center items-start">
							<div className="flex-row flex">
								<h1
									className="font-bold italic text-6xl h-fit"
									style={{
										color: theme?.theme.colors
											.text_secondary,
									}}>
									GET YOUR SPARK ACCOUNT NOW
								</h1>
							</div>
							<div className="flex-row flex justify-center items-center">
								<h1
									className="font-bold italic text-2xl h-fit"
									style={{
										color: theme?.theme.colors
											.text_secondary,
									}}>
									Contact us
								</h1>
								<a
									style={{
										color: theme?.theme.colors.text_link,
									}}
									href={`mailto:${main}`}
									className="ml-5 font-semibold italic text-3xl">
									{main}
								</a>
							</div>
						</div>
					</div>
					<br></br>
					<Footer />
				</div>
			</main>
			{/* Footer reusen auf homepage seiten wie Privacy policy etc.. */}
		</motion.div>
	);
}

interface CardProps {
	title: string;
	content: string;
}
interface DevCardProps {
	name: string;
	description: string;
	path: string;
}
const Card: React.FC<CardProps> = ({ title, content }) => {
	const theme = React.useContext(ThemeContext);
	return (
		<div
			style={{
				background: theme?.theme.colors.primary,
				borderColor: theme?.theme.colors.accent,
			}}
			className="border border-spacing-1.5 hover:opacity-100 opacity-75 text-white w-64 min-h-20 pb-5 rounded-md flex flex-col items-center cursor-pointer transition-all ease-in duration-75 hover:translate-x-1 hover:-translate-y-2 hover:z-10 hover:shadow-lg">
			<h1
				style={{ color: theme?.theme.colors.text }}
				className="flex flex-row p-2 text-2xl font-bold">
				{title}
			</h1>
			<span
				style={{ color: theme?.theme.colors.text }}
				className="text-center pl-2 pr-2 pt-0 font-semibold">
				{content}
			</span>
		</div>
	);
};

const DevCard: React.FC<DevCardProps> = ({ name, description, path }) => {
	const theme = React.useContext(ThemeContext);
	return (
		<div
			className="
		 group ml-6 mr-6 mt-1 mb-3 hover:opacity-100 rounded-md flex flex-col justify-center items-center 
		cursor-pointer transition-all ease-in duration-150 w-72 h-fit hover:h-fit hover:z-10">
			<div className="flex flex-row w-72 mt-4 mb-2 ml-10 items-center justify-start">
				<Image
					alt=""
					width={50}
					height={50}
					className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-full object-cover no-drag shadow-lg"
					src={path}
				/>
				<p
					className="text-3xl font-bold italic ml-5"
					style={{ color: theme?.theme.colors.text }}>
					{name}
				</p>
			</div>
			<div className="group-hover:h-20 group-hover:opacity-100 opacity-0 w-full h-0 mt-2 pb-2 max-w-64 transition-all ease-in duration-150 flex flex-col justify-center items-center">
				<p
					style={{ color: theme?.theme.colors.text_secondary }}
					className="pl-1 pr-1 pt-1 pb-3 w-full h-full">
					{description}
				</p>
				<br></br>
			</div>
		</div>
	);
};

export default Index;
