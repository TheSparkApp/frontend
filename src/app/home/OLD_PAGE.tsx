"use client";
import { ThemeContext } from "@/components/ThemeProvider";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "../util.css";
import "../3dElements.css";
import { NavBar } from "./components/NavBar";
import {
	FaAngleDown,
	FaAngleUp,
	FaBookmark,
	FaCalendarDay,
	FaEllipsisVertical,
	FaGear,
	FaHouse,
	FaImage,
	FaPaperclip,
	FaPaperPlane,
	FaPlus,
	FaUserGroup,
	FaUsers,
	FaUsersViewfinder,
} from "react-icons/fa6";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

function Search() {
	const searchParams = useSearchParams();
	const event = searchParams.get("event");
	let resp = null;
	if (event === "test") {
		resp = <div>TEST</div>;
	}

	return resp;
}
//! AB HIER SCHAUEN OB EINGELOGGT
export default function MainApp() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	const [showGroups, setshowGroups] = useState(true);
	const [isPostOpen, setisPostOpen] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const maxFiles = 10;
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<HTMLDivElement>(null);
	const maxCharacters = 250;
	const [remainingCharacters, setRemainingCharacters] =
		useState(maxCharacters);

	const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
		const newValue = (event.target as HTMLDivElement).textContent;
		if (newValue) {
			setInputValue(newValue);
		} else {
			setInputValue("");
		}
	};

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
		<div
			className="overflow-hidden h-full w-full absolute"
			style={{ background: theme?.theme.colors.background }}>
			<Suspense fallback={<div></div>}>
				<NavBar />
				<Search />
				<main
					style={{ background: theme?.theme.colors.primary }}
					className="w-full h-full flex flex-col mt-2 overflow-x-hidden justify-center items-center transition-all ease-in duration-75">
					<div
						style={{
							color: theme?.theme.colors.text,
						}}
						className="max-w-[1800px] w-full h-full flex flex-row items-center justify-center overflow-hidden">
						<div className="min-w-[50px] hideon-phone w-[300px] max-w-[400px] h-full hide-home-bars2-w">
							<div className="flex gap-y-2 relative flex-col w-full h-full pt-5 pb-5 pl-2 pr-2 overflow-hidden">
								<Page
									title="Home"
									icon={<FaHouse size={28} />}
								/>
								<Page
									title="Your profile"
									icon={
										<Image
											src={"/stein_pfp.png"}
											width={50}
											height={50}
											alt="Profile picture"
											className="object-cover min-h-[50px] min-w-[50px] translate-y-0.5 w-[52px] h-[50px] max-w-[50px] max-h-[50px] group-hover:opacity-100 opacity-75 rounded-full"
										/>
									}
								/>
								<Page
									title="Contacts"
									icon={<FaUserGroup size={28} />}
								/>
								<Page
									title="Find Friends"
									icon={<FaUsersViewfinder size={28} />}
								/>
								<Page
									title="Saved"
									icon={<FaBookmark size={28} />}
								/>
								<Page
									title="Events"
									icon={<FaCalendarDay size={28} />}
								/>
								<Page
									title="Settings"
									icon={<FaGear size={28} />}
								/>
								<div
									style={{
										color: theme?.theme.colors.text,
									}}
									className="min-h-10 pl-1 pr-1 opacity-75 text-center text-[10px] gap-x-2 gap-y-1 flex flex-row flex-wrap absolute bottom-14 left-0 w-full hide-home-bars2">
									<a
										className="cursor-pointer"
										href="/privacy-policy"
										onClick={(e) => {
											e.preventDefault();
											router.push("/privacy-policy");
										}}>
										Privacy Policies
									</a>
									<a
										className="cursor-pointer"
										href="/terms-of-service"
										onClick={(e) => {
											e.preventDefault();
											router.push("/terms-of-service");
										}}>
										Terms of service
									</a>
									<a
										className="cursor-pointer"
										href="/rules"
										onClick={(e) => {
											e.preventDefault();
											router.push("/rules");
										}}>
										Rules of use and interaction
									</a>
									<a
										className="cursor-pointer"
										href="/imprint"
										onClick={(e) => {
											e.preventDefault();
											router.push("/imprint");
										}}>
										Imprint
									</a>
									<span>
										© SPARK 2024 All rights reserved.
									</span>
								</div>
							</div>
						</div>
						<div
							style={{
								color: theme?.theme.colors.text,
								// background: theme?.theme.colors.secondary,
							}}
							className="min-w-[300px] z-50 gap-y-0.5 w-full max-w-[800px] bg-black mt-2 h-full full-home overflow-y-scroll flex flex-col">
							<h1 className="text-3xl mobile-4xl w-full text-center ellipsis font-semibold mt-5 mb-5">
								Welcome, Stein
							</h1>
							<div
								onClick={() => {
									setisPostOpen(true);
									if (inputRef.current) {
										inputRef.current.focus();
									}
								}}
								className="w-full flex flex-row justify-center items-start min-h-24 h-full overflow-hidden bg-red-700">
								{!isPostOpen ? (
									<div
										style={{
											background:
												theme?.theme.colors.primary,
										}}
										className="w-11/12 max-w-phone min-h-[80px] max-h-[80px] mt-[32px] rounded-md group hover:shadow-md shadow-black cursor-pointer select-none transition-all ease-in duration-100 flex flex-row justify-start items-end">
										<Image
											src={"/stein_pfp.png"}
											width={50}
											height={50}
											alt="Profile picture"
											className="object-cover hideon-phone w-fit ml-5 min-h-[50px] mb-3.5 h-[50px] max-w-[50px] max-h-[50px] rounded-full opacity-75 group-hover:opacity-100 transition-all ease-in duration-100"
										/>
										<span
											style={{
												background:
													theme?.theme.colors
														.background,
											}}
											className="w-8/12 max-w-phone min-w-[50px] p-5 pt-3 pb-3 ml-5 mr-5 mb-3 rounded-md bg-black text-lg opacity-75 group-hover:opacity-100 transition-all ease-in duration-100">
											Add post
										</span>
										<FaPaperclip
											size={32}
											className="opacity-75 w-fit hover:opacity-100 mb-6 transition-all ease-in duration-100"
										/>
										<FaPaperPlane
											color={theme?.theme.colors.accent}
											size={32}
											className="opacity-75 w-fit hover:opacity-100 ml-5 mb-6 mr-5 transition-all ease-in duration-100"
										/>
									</div>
								) : (
									<div className="relative w-full flex h-fit flex-col items-center justify-start bg-yellow-400">
										<form
											style={
												{
													// background:
													// theme?.theme.colors.primary,
												}
											}
											className="w-11/12 max-w-phone max-w-phone relative bg-blue-800 top-[32px] pt-3 max-h-[400px] overflow-hidden rounded-md group hover:shadow-md shadow-black cursor-pointer select-none transition-all ease-in duration-100 flex flex-row justify-start items-end">
											<Image
												src={"/stein_pfp.png"}
												width={50}
												height={50}
												alt="Profile picture"
												className="object-cover hideon-phone w-fit ml-5 mb-3.5 max-w-[50px] max-h-[50px] rounded-full opacity-75 group-hover:opacity-100 transition-all ease-in duration-100"
											/>
											<div
												style={{
													background:
														theme?.theme.colors
															.background,
												}}
												autoFocus
												autoCorrect="off"
												id="content"
												role="textbox"
												onInput={handleChange}
												aria-multiline="true"
												spellCheck="false"
												onLoad={() => {
													if (inputRef.current) {
														inputRef.current.focus();
													}
												}}
												aria-haspopup="listbox"
												onClick={() => {
													if (inputRef.current) {
														inputRef.current.focus();
													}
												}}
												aria-invalid="false"
												ref={inputRef}
												aria-autocomplete="list"
												data-can-focus="true"
												data-slate-editor="true"
												data-slate-node="value"
												contentEditable="true"
												onSubmit={handlePost}
												className="w-8/12 cursor-text max-w-phone min-w-[50px] max-h-[400px] overflow-y-scroll p-5 pt-3 pb-3 ml-5 mr-5 mt-5 mb-3 rounded-md bg-black text-lg opacity-75 group-hover:opacity-100 transition-all ease-in duration-100"></div>
											<div
												id="character-count"
												style={{
													color:
														remainingCharacters > 0
															? theme?.theme
																	.colors.text
															: "red",
												}}
												className={
													remainingCharacters < 50
														? `absolute opacity-50 right-2 text-sm font-bold`
														: `hidden`
												}></div>
											<FaPaperclip
												size={32}
												className="opacity-50 w-fit hover:opacity-100 mb-6 transition-all ease-in duration-100"
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
											<FaPaperPlane
												color={
													theme?.theme.colors.accent
												}
												size={32}
												type="submit"
												className="opacity-50 w-fit hover:opacity-100 ml-5 mb-6 mr-5 transition-all ease-in duration-100"
											/>
										</form>
										<div className="flex flex-row justify-start items-start w-11/12 flex-wrap gap-y-2 gap-x-2 mt-9">
											{selectedFiles.map(
												(file, index) => (
													<div
														key={index}
														style={{
															position:
																"relative",
															display:
																"inline-block",
														}}>
														<img
															src={URL.createObjectURL(
																file
															)}
															alt={`preview ${index}`}
															className="rounded-md object-cover no-drag select-none hover:shadow-md shadow-black cursor-pointer transition-all ease-in duration-150"
															style={{
																width: "100px",
																height: "100px",
																objectFit:
																	"cover",
																margin: "5px",
															}}
														/>
														<button
															onClick={() =>
																handleRemoveFile(
																	index
																)
															}
															style={{
																position:
																	"absolute",
																top: "5px",
																right: "5px",
																background:
																	"rgba(0, 0, 0, 0.5)",
																color: "white",
																border: "none",
																borderRadius:
																	"50%",
																cursor: "pointer",
																width: "20px",
																height: "20px",
																display: "flex",
																alignItems:
																	"center",
																justifyContent:
																	"center",
															}}>
															<FaTimes
																size={12}
															/>
														</button>
													</div>
												)
											)}
											{selectedFiles.length > 0 && (
												<div className="mt-2 opacity-50 text-sm">
													{remainingFiles > 0 ? (
														<p>
															{remainingFiles}{" "}
															images left.
														</p>
													) : (
														<p>
															Image limit reached.
														</p>
													)}
												</div>
											)}
										</div>
									</div>
								)}
							</div>
								<div
									style={{
										background: theme?.theme.colors.primary,
									}}
									className="w-full min-h-20 h-full">
									<div className="flex flex-col h-full">
										<div className="flex flex-row w-full bg-slate-800 min-h-14 max-h-14 h-14 pb-1 pt-1">
											<div className="flex flex-row w-full h-full">
												<div className="flex justify-center items-center ml-2 select-none drag-none">
													<Image
														src={"/stein_pfp.png"}
														width={50}
														height={50}
														alt="Profile picture"
														className="object-cover no-drag w-fit min-h-[50px] h-[50px] max-w-[50px] max-h-[50px] rounded-full"
													/>
												</div>
												<div className="flex flex-col ml-2">
													<h1 className="text-lg hover:underline cursor-pointer max-w-[200px] ellipsis">
														Username
													</h1>
													<p className="opacity-50 text-sm">
														Yesterday at 04:56 PM
													</p>
												</div>
											</div>
											<div className="min-w-10 h-full flex justify-center items-center rounded-md cursor-pointer mr-3 opacity-75 hover:opacity-100">
												<FaEllipsisVertical size={20} />
											</div>
										</div>
										<div className="bg-slate-700 w-full min-h-20 h-full p-3 pt-1">
											<span className="w-full">
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Sint ullam dolorum praesentium
												veniam? Expedita deleniti culpa
												excepturi, saepe facilis nulla
												voluptates dicta illum ullam in
												corporis sunt! Pariatur aperiam,
												adipisci ipsum perferendis,
												facilis nam corrupti
												consectetur, quia praesentium at
												sint. Aut velit assumenda
												quisquam. Est adipisci
												molestiae, modi natus sunt
												placeat labore non nemo officiis
												dolorum sed nisi voluptatum amet
												sapiente aperiam excepturi. Vel
												consequuntur quam ratione?
												Impedit reprehenderit nesciunt
												perspiciatis quasi, tempore
												aperiam sunt atque dolores!
											</span>
											<div className="mt-2 flex-wrap w-full min-h-52 h-fit justify-center flex flex-row">
												<div className="ml-1 mr-1 mb-1 mt-1 max-w-[300px] w-[300px] min-h-[300px] overflow-hidden rounded-md">
													<Image
														src={"/blogexample.jpg"}
														className="max-w-[300px] w-[300px] min-h-[300px] object-cover"
														alt="Post picture"
														width={1024}
														height={1024}
													/>
												</div>
												<div className="ml-1 mr-1 mb-1 mt-1 max-w-[300px] w-[300px] min-h-[300px] overflow-hidden rounded-md">
													<Image
														src={"/blogexample.jpg"}
														className="max-w-[300px] w-[300px] min-h-[300px] object-cover"
														alt="Post picture"
														width={1024}
														height={1024}
													/>
												</div>
												<div className="ml-1 mr-1 mb-1 mt-1 max-w-[300px] w-[300px] min-h-[300px] overflow-hidden rounded-md">
													<Image
														src={"/blogexample.jpg"}
														className="max-w-[300px] w-[300px] min-h-[300px] object-cover"
														alt="Post picture"
														width={1024}
														height={1024}
													/>
												</div>
												<div className="ml-1 mr-1 mb-1 mt-1 max-w-[300px] w-[300px] min-h-[300px] overflow-hidden rounded-md">
													<Image
														src={"/blogexample.jpg"}
														className="max-w-[300px] w-[300px] min-h-[300px] object-cover"
														alt="Post picture"
														width={1024}
														height={1024}
													/>
												</div>
											</div>
										</div>
										<div className="bg-slate-600 w-full min-h-20 max-h-20 h-20"></div>
									</div>
								<div
									style={{
										background: theme?.theme.colors.primary,
									}}
									className="w-full min-h-20">
									POST
								</div>
								<div
									style={{
										background: theme?.theme.colors.primary,
									}}
									className="w-full min-h-20">
									POST
								</div>
							</div>
						</div>
						<div className="min-w-[200px] w-[300px] max-w-[400px] h-full hide-home-bars">
							<div className="flex select-none relative flex-col w-full h-full pt-5 pb-5 pl-2 pr-2 overflow-hidden overflow-y-scroll">
								<div
									className={`flex flex-row mb-2.5 justify-start items-center select-none`}>
									<div
										className="ml-2 w-full cursor-pointer flex flex-row"
										onClick={() =>
											setshowGroups(!showGroups)
										}>
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
									<a className="w-fit translate-y-0.5">
										Create
									</a>
								</div>
								<div
									className={
										showGroups
											? `max-h-[700px] overflow-y-scroll`
											: `hidden`
									}>
									<Contact
										name="Stein Group"
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
									name="Stein"
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

								<br></br>
								<br></br>
							</div>
						</div>
					</div>
				</main>
			</Suspense>
		</div>
	);
}

interface PageProps {
	icon: any;
	title: string;
}
const Page: React.FC<PageProps> = ({ icon, title }) => {
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
			className="flex min-w-[54px] flex-row hoverBackground justify-start items-center h-14 cursor-pointer select-none rounded-md hover:opacity-85 group">
			<div className="w-full max-w-16 h-full flex justify-center items-center">
				<div className="group-hover:-translate-y-0.5 ease-in transition-all duration-75">
					{icon}
				</div>
			</div>
			<span className="text-xl font-semibold w-full text-start p-5 hide-home-bars2">
				{title}
			</span>
		</div>
	);
};
interface ContactProps {
	icon: any;
	name: string;
	lastMessage: string;
	hasStory: boolean;
	id: string;
}
const Contact: React.FC<ContactProps> = ({
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
				<span className="text-xl font-semibold w-full text-start hide-home-bars2 max-w-[200px] ellipsis">
					{name}
				</span>
				<span className="max-w-[200px] opacity-75 ellipsis">
					{lastMessage}
				</span>
			</div>
		</div>
	);
};
