"use client";
import React from "react";
import "./homepage.css";
import { LOGO } from "./LOGO";
import Footer from "@/app/components/homepage/Footer";
import { NavBar } from "../components/homepage/NavBar";
import { motion } from "framer-motion";
import { FaBolt, FaLock } from "react-icons/fa"; // FREE TO USE
import { FaUniversalAccess } from "react-icons/fa6"; // FREE TO USE
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/util/motion";
import { ThemeContext, ThemeProviderComponent } from "../components/ThemeProvider";
import { CSSProperties } from "styled-components";

function Index() {
	const theme = React.useContext(ThemeContext);
	return (
		<ThemeProviderComponent>
			<motion.div initial="hidden" animate="visible" className="flex flex-col overflow-x-hidden overflow-y-scroll">
				<main className="w-full h-screen flex flex-col overflow-hidden">
					<NavBar />
					<br></br>
					<br></br>
					<div className="w-full h-fit flex flex-col items-center overflow-y-scroll" style={theme?.theme.colors.background as CSSProperties}>
						<div className="flex flex-row mt-10 ml-10 select-none">
							<h1 className="text-6xl font-bold italic" style={{color: theme?.theme.colors.text}}>This is </h1>
							<div className="-translate-y-3">
								<LOGO width="320px" height="120px" white={true} />
							</div>
						</div>
						<div className="max-w-[800px] rounded-md flex flex-row flex-wrap justify-center items-start gap-4 select-none">
							<Card title="What's SPARK?" content="Spark is Spark is Spark" />
						</div>
						<div className="bg-gray-800 pb-10 pt-2 w-full mt-10 flex-col flex items-center">
							<div className="w-11/12 max-w-[1200px] h-full translate-y-4">
								<motion.div variants={slideInFromLeft(0.5)} className="flex flex-row">
									<h1 className="text-4xl font-semibold italic" style={{color: theme?.theme.colors.text}}>Why </h1>
									<LOGO width="180px" height="60px" white={true} />
									<h1 className="text-4xl font-semibold italic" style={{color: theme?.theme.colors.text}}>?</h1>
								</motion.div>
								<motion.div variants={slideInFromRight(0.5)} className="flex flex-row flex-wrap -mt-4 justify-center">
									<div className="flex flex-col mt-5 mr-16 opacity-75 select-none">
										<div className="flex flex-row justify-start items-center">
											<FaBolt size={45} color="white" />
											<span className="font-bold italic text-5xl ml-2" style={{color: theme?.theme.colors.text}}>FAST</span>
										</div>
										<div className="flex flex-col text-sm mt-1 max-w-[300px]" style={{color: theme?.theme.colors.text}}>
											<span>Spark is designed for speed, offering fast and efficient data processing capabilities. With optimized algorithms and state-of-the-art technology, Spark handles large volumes of data quickly and effectively. This allows you to access and manipulate your data in real time, ensuring a smooth and responsive experience. Whether you're running complex computations or managing extensive datasets, Spark's performance-oriented architecture delivers quick results.</span>
										</div>
									</div>
									<div className="flex flex-col mt-5 mr-16 opacity-75 select-none">
										<div className="flex flex-row justify-start items-center">
											<FaLock size={45} color="white" />
											<span className="font-bold italic text-5xl ml-2" style={{color: theme?.theme.colors.text}}>SECURE</span>
										</div>
										<div className="flex flex-col text-sm mt-1 max-w-[300px]" style={{color: theme?.theme.colors.text}}>
											<span>Spark ensures the safety of your data by employing advanced encryption methods and secure connections. Your information is safeguarded during transmission and storage, adhering to strict security standards to maintain confidentiality and integrity. With Spark, you can have peace of mind knowing that your data is protected from unauthorized access and potential breaches.</span>
										</div>
									</div>
									<div className="flex flex-col mt-5 mr-16 opacity-75 select-none">
										<div className="flex flex-row justify-start items-center">
											<FaUniversalAccess size={45} color="white" />
											<span className="font-bold italic text-5xl ml-2" style={{color: theme?.theme.colors.text}}>EASY TO USE</span>
										</div>
										<div className="flex flex-col text-sm mt-1 max-w-[300px]" style={{color: theme?.theme.colors.text}}>
											<span>Spark is user-friendly, offering an intuitive interface and seamless integrations tailored to your social networking needs. With easy-to-understand tools, Spark makes it simple to manage your feeds and connect with friends, classmates and family. The sophisticated design, which you can also customise, ensures a smooth, hassle-free experience as you share and interact with content. Enjoy personalised recommendations and features that enhance your social media experience on Spark.</span>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="bg-gray-800 pb-5 pt-2 w-full mt-2 flex-col flex items-center">
							<motion.div variants={slideInFromLeft(0.5)} className="w-11/12 max-w-[1200px] h-full flex flex-row">
								<Image alt="" width={500} height={500} className="min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px]" src="/phone.png" />
								<div className="ml-3 mr-5 flex flex-row items-center">
									<span className="font-semibold text-3xl" style={{color: theme?.theme.colors.text}}>
										<p className="text-5xl font-bold italic">SPARK</p> is user-friendly, offering an intuitive interface and seamless integrations tailored to your social networking needs.
									</span>
								</div>
							</motion.div>
						</div>
						<div className="bg-gray-800 pb-5 pt-2 w-full mt-2 flex-col flex items-center">
							<div className="w-11/12 max-w-[1200px] h-full flex flex-col justify-center items-start">
								<div className="flex-row flex">
									<h1 className="font-bold italic text-6xl h-fit" style={{color: theme?.theme.colors.text}}>GET YOUR SPARK ACCOUNT NOW</h1>
								</div>
								<div className="flex-row flex justify-center items-center">
									<h1 className="font-bold italic text-2xl h-fit" style={{color: theme?.theme.colors.text}}>Contact us</h1>
									<a href="mailto:spark-org@dxby.dev" className="ml-5 font-semibold text-blue-300 italic text-3xl">
										spark-org@dxby.dev
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
		</ThemeProviderComponent>
	);
};

interface CardProps {
	title: string;
	content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className="border border-gray-900 border-spacing-1.5 hover:bg-gray-700 bg-gray-800 text-white hover:border-2 w-64 min-h-20 pb-5 rounded-md flex flex-col items-center cursor-pointer transition-all ease-in duration-75 hover:translate-x-1 hover:-translate-y-2 hover:z-10 hover:shadow-lg">
			<h1 className="flex flex-row p-2 text-2xl font-bold">{title}</h1>
			<span className="text-center p-1 pt-0 font-semibold">{content}</span>
		</div>
	);
};

export default Index;
