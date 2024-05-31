"use client";
import { ThemeContext } from "@/components/ThemeProvider";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "../util.css";
import "../3dElements.css";
import { NavBar } from "./components/NavBar";
import { FaAngleDown, FaAngleUp, FaImage } from "react-icons/fa6";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { Post } from "./components/Post";
import { Contact } from "./components/Contact";
import Mainapp from "./mainapp";

//! AB HIER SCHAUEN OB EINGELOGGT
export default function MainApp() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	const [showGroups, setshowGroups] = useState(true);
	const [isPostOpen, setisPostOpen] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const maxFiles = 5;
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<HTMLDivElement>(null);
	const maxCharacters = 250;
	const [remainingCharacters, setRemainingCharacters] =
		useState(maxCharacters);
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState<any[]>([2, 2, 2, 2, 2, 2]);
	const containerRef = useRef<HTMLDivElement>(null);
	const postRef = useRef<HTMLDivElement>(null);

	const loadMorePosts = () => {
		console.log("Loading more posts...");
	};

	const handleScroll = () => {
		const container = containerRef.current;
		if (container) {
			const { scrollTop, scrollHeight, clientHeight } = container;
			if (scrollHeight - scrollTop === clientHeight) {
				loadMorePosts();
			}
			// console.log(container)
		}
	};
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = (event.target as HTMLTextAreaElement).value;
		if (newValue) {
			setInputValue(newValue);
		} else {
			setInputValue("");
		}
	};
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				postRef.current &&
				!postRef.current.contains(event.target as Node)
			) {
				setisPostOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (container) {
				container.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);
	useEffect(() => {
		setRemainingCharacters(maxCharacters - inputValue.length);
		const characterCountElement =
			document.getElementById("character-count");
		if (characterCountElement) {
			characterCountElement.textContent = `${remainingCharacters} characters left`;
		}
	}, [inputValue]);

	const handleIconClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			const fileArray = Array.from(files);
			const updatedFiles = selectedFiles
				.concat(fileArray)
				.slice(0, maxFiles);
			setSelectedFiles(updatedFiles);
		}
	};
	const handleRemoveFile = (index: number) => {
		setSelectedFiles((prevFiles) =>
			prevFiles.filter((_, i) => i !== index)
		);
	};
	const handlePost = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const remainingFiles = maxFiles - selectedFiles.length;

	return (
		<Mainapp>
			<div className="w-full h-full flex flex-row relative">
				<div
					className="w-[100%] max-w-[700px] min-h-full h-full overflow-y-scroll flex flex-col items-center pb-5 transition-all ease-in duration-100"
					ref={containerRef}>
					<div
						className="w-[95%] mt-3 mb-3 h-fit rounded-md flex flex-col justify-center items-center select-none transition-all ease-in duration-100"
						style={{
							background: theme?.theme.colors.secondary,
						}}>
						<div className="w-[95%] h-full p-3 pl-1 flex flex-row items-center justify-start">
							<Image
								src={"/stein_pfp.png"}
								width={50}
								height={50}
								alt="Profile picture"
								className="object-cover no-drag group-hover:shadow-md w-fit min-h-[50px] h-[50px] max-w-[50px] max-h-[50px] rounded-full transition-all ease-in duration-100"
							/>
							<span className="text-xl mobile-2xl font-semibold ml-2">
								Welcome back, Stein.
							</span>
							<p
								className="ml-3 hover:underline cursor-pointer font-bold text-xl mobile-2xl"
								style={{
									color: theme?.theme.colors.text_link,
								}}
								onClick={() => {
									setisPostOpen(!isPostOpen);
								}}>
								{" "}
								Post now
							</p>
						</div>
					</div>
					{posts.map((post, index) => (
						<Post key={index} />
					))}
					{loading && (
						<h1 className="w-full text-center">Loading...</h1>
					)}
					<br></br>
					<br></br>
				</div>
				<div className="min-w-[200px] w-[300px] max-w-[400px] h-full hide-home-bars3">
					<div className="flex select-none relative flex-col w-full h-full pt-5 pb-5 pl-2 pr-2 overflow-hidden overflow-y-scroll">
						<div
							className={`flex flex-row mb-2.5 justify-start items-center select-none`}>
							<div
								className="ml-2 w-full cursor-pointer flex flex-row"
								onClick={() => setshowGroups(!showGroups)}>
								{showGroups ? (
									<FaAngleDown
										color={theme?.theme.colors.text}
										size={20}
										className="translate-y-1"
									/>
								) : (
									<FaAngleUp
										color={theme?.theme.colors.text}
										size={20}
										className="translate-y-1"
									/>
								)}
								<h1 className="text-xl ml-2 font-semibold">
									Groups
								</h1>
							</div>
							<a className="w-fit translate-y-0.5 mr-5">Create</a>
						</div>
						<div
							className={
								showGroups
									? `max-h-[700px] overflow-y-scroll`
									: `hidden`
							}>
							<Contact
								name="Stein Groupasdsadsadasdasd"
								lastMessage=""
								icon="/stein_pfp.png"
								hasStory={false}
								id="10"
							/>
						</div>

						<h1 className="text-xl ml-4 mt-2 mb-2.5 font-semibold">
							Contacts
						</h1>
						<Contact
							name="Steinasdasdasdssdad"
							lastMessage="Hello world"
							icon="/stein_pfp.png"
							hasStory={true}
							id="10"
						/>
						<Contact
							name="Stein"
							lastMessage="Hello world"
							icon="/stein_pfp.png"
							hasStory={false}
							id="10"
						/>
						<Contact
							name="Stein"
							lastMessage="Hello world"
							icon="/stein_pfp.png"
							hasStory={false}
							id="10"
						/>
						<Contact
							name="Stein"
							lastMessage="Hello world"
							icon="/stein_pfp.png"
							hasStory={false}
							id="10"
						/>
						<Contact
							name="Stein"
							lastMessage="Hello world"
							icon="/stein_pfp.png"
							hasStory={false}
							id="10"
						/>
					</div>
				</div>
				{isPostOpen && (
					<div className="absolute w-full z-50 h-full max-w-full max-h-full backdrop-blur-sm flex flex-col justify-center items-center">
						<div
							className="w-[90%] min-w-[300px] max-w-[700px] flex flex-col h-fit mobile-p-2 shadow-sm shadow-black border rounded-lg"
							style={{
								background: theme?.theme.colors.primary,
								borderColor: theme?.theme.colors.secondary,
							}}
							ref={postRef}>
							<div className="flex flex-row ml-5 mt-4 items-center select-none">
								<div className="w-full h-full flex flex-row items-center">
									<Image
										src={"/stein_pfp.png"}
										width={50}
										height={50}
										alt="Profile picture"
										className="object-cover no-drag group-hover:shadow-md w-fit min-h-[50px] h-[50px] max-w-[50px] max-h-[50px] rounded-full transition-all ease-in duration-100"
									/>
									<h1 className="text-xl ml-2 max-w-[50%] ellipsis">
										Username
									</h1>
								</div>
								<div className="w-16 min-w-16 h-full mr-5">
									<div
										className="border rounded-md p-2 pt-1 hover:bg-yellow-500 pb-1 flex hover:translate-y-0.5 translate-y-1 transition-all ease-in duration-100 justify-center items-center cursor-pointer"
										style={{
											borderColor:
												theme?.theme.colors.accent,
										}}>
										<span className="text-lg font-semibold">
											Post
										</span>
									</div>
								</div>
							</div>
							<div className="w-full h-fit p-2 text-xl">
								<textarea
									placeholder="What's up?"
									className="bg-transparent border-b pb-2 border-white border-opacity-40 w-full resize-none min-h-52 pl-4 pr-4"
									autoComplete="off"
									onInput={handleChange}
									spellCheck="false"></textarea>
								<p
									id="character-count"
									style={{
										color:
											remainingCharacters > 0
												? theme?.theme.colors.text
												: "#ff6262",
									}}
									className={
										remainingCharacters < 50
											? `opacity-75 right-2 text-base mb-2`
											: `hidden`
									}></p>
								<div
									className="flex flex-row w-fit items-center rounded-md"
									style={{
										background:
											theme?.theme.colors.secondary,
									}}>
									<FaImage
										size={25}
										className="opacity-50 w-fit hover:opacity-100 m-3 transition-all ease-in duration-100 cursor-pointer"
										onClick={handleIconClick}
									/>
									<input
										type="file"
										ref={fileInputRef}
										name="images"
										style={{ display: "none" }}
										accept=".png, .jpg, .jpeg"
										multiple
										onChange={handleFileChange}
									/>
								</div>
							</div>
							<div className="flex flex-row justify-start items-start w-full pb-2 flex-wrap gap-y-2 gap-x-2">
								{selectedFiles.map((file, index) => (
									<div
										key={index}
										style={{
											position: "relative",
											display: "inline-block",
										}}>
										<img
											src={URL.createObjectURL(file)}
											alt={`preview ${index}`}
											className="rounded-md object-cover no-drag select-none hover:shadow-md shadow-black cursor-pointer transition-all ease-in duration-150"
											style={{
												width: "100px",
												height: "100px",
												objectFit: "cover",
												margin: "5px",
											}}
										/>
										<button
											onClick={() =>
												handleRemoveFile(index)
											}
											style={{
												position: "absolute",
												top: "5px",
												right: "5px",
												background:
													"rgba(0, 0, 0, 0.5)",
												color: "white",
												border: "none",
												borderRadius: "50%",
												cursor: "pointer",
												width: "20px",
												height: "20px",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}>
											<FaTimes size={12} />
										</button>
									</div>
								))}
								{selectedFiles.length > 0 && (
									<div className="mt-2 opacity-50 text-sm">
										{remainingFiles > 0 ? (
											<p>
												{remainingFiles} image(s) left.
											</p>
										) : (
											<p>Image limit reached.</p>
										)}
									</div>
								)}
							</div>
						</div>
						<p className="opacity-75 mt-5 select-none pointer-events-none">
							Click to exit
						</p>
					</div>
				)}
			</div>
		</Mainapp>
	);
}
