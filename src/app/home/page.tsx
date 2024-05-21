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
	FaArrowLeft,
	FaArrowRight,
	FaBookmark,
	FaCalendarDay,
	FaCircleArrowUp,
	FaEllipsisVertical,
	FaEyeSlash,
	FaGavel,
	FaGear,
	FaHouse,
	FaImage,
	FaMessage,
	FaPaperclip,
	FaPaperPlane,
	FaPlus,
	FaRegThumbsUp,
	FaShare,
	FaUserGroup,
	FaUsers,
	FaUsersViewfinder,
	FaX,
} from "react-icons/fa6";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import NumberFormatter from "@/util/numberFormatter";
import { themes } from "@/design/themes";

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
								background: theme?.theme.colors.primary,
							}}
							className="min-w-[300px] w-full max-w-[800px] -mt-10 h-[93%] full-home rounded-md overflow-hidden">
							<div
								className="w-full min-h-full h-full overflow-y-scroll flex flex-col items-center pb-5 transition-all ease-in duration-100"
								ref={containerRef}>
								<div
									className="w-[95%] mt-3 mb-3 h-fit rounded-md flex flex-col justify-center items-center select-none transition-all ease-in duration-100"
									style={{
										background:
											theme?.theme.colors.secondary,
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
												color: theme?.theme.colors
													.text_link,
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
									<h1 className="w-full text-center">
										Loading...
									</h1>
								)}
							</div>
						</div>
						{isPostOpen && (
							<div className="absolute w-full z-50 h-full max-w-full max-h-full backdrop-blur-sm flex flex-col justify-center items-center">
								<div
									className="w-[90%] min-w-[300px] max-w-[700px] flex flex-col h-fit mobile-p-2 shadow-sm shadow-black border rounded-lg"
									style={{
										background: theme?.theme.colors.primary,
										borderColor:
											theme?.theme.colors.secondary,
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
														theme?.theme.colors
															.accent,
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
														? theme?.theme.colors
																.text
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
													theme?.theme.colors
														.secondary,
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
													src={URL.createObjectURL(
														file
													)}
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
														justifyContent:
															"center",
													}}>
													<FaTimes size={12} />
												</button>
											</div>
										))}
										{selectedFiles.length > 0 && (
											<div className="mt-2 opacity-50 text-sm">
												{remainingFiles > 0 ? (
													<p>
														{remainingFiles}{" "}
														image(s) left.
													</p>
												) : (
													<p>Image limit reached.</p>
												)}
											</div>
										)}
									</div>
								</div>
								<p className="opacity-75 mt-5 select-none pointer-events-none">Click to exit</p>
							</div>
						)}
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

const Post: React.FC = () => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	const likes = <NumberFormatter value={parseInt("432")} />;
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setShowMenu(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="mb-1 w-full h-fit">
			<div
				style={{ background: theme?.theme.colors.secondary }}
				className="w-full h-fit relative rounded-md overflow-hidden">
				<div className="w-full h-14 flex flex-row pb-1 pt-1">
					<div className="w-full flex-row flex h-full">
						<div className="flex ml-4 justify-start cursor-pointer group items-center bg select-none drag-none w-fit">
							<Image
								src={"/stein_pfp.png"}
								width={50}
								height={50}
								alt="Profile picture"
								className="object-cover no-drag group-hover:shadow-md w-fit min-h-[50px] h-[50px] max-w-[50px] max-h-[50px] rounded-full transition-all ease-in duration-100"
							/>
						</div>
						<div className="flex flex-col ml-2 select-none">
							<div className="flex flex-row justify-center items-center">
								<h1 className="hover:underline cursor-pointer text-lg">
									Username
								</h1>
								<p
									className="ml-3 hover:underline cursor-pointer font-bold"
									style={{
										color: theme?.theme.colors.text_link,
									}}>
									{" "}
									· Follow(ed)
								</p>
							</div>
							<p className="opacity-50 text-sm">
								Yesterday at 10:08 PM
							</p>
						</div>
					</div>
					<div
						className="transition-all ease-in mr-2 duration-100 group min-w-10 rounded-md active:opacity-100 opacity-75"
						ref={menuRef}
						onClick={() => setShowMenu(!showMenu)}>
						<div className="w-full flex flex-row justify-center items-center cursor-pointer select-none rounded-md h-full">
							<FaEllipsisVertical size={20} />
						</div>
					</div>
				</div>
				<div className="w-full h-fit pl-5 pr-5 pb-2">
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Perspiciatis sunt atque nesciunt necessitatibus
						eos perferendis error accusamus et sed, amet vitae unde
						temporibus! Placeat perferendis minima provident tempore
						fugit est nostrum pariatur, possimus quo quia saepe
						tenetur nulla corrupti dolore neque amet! Molestias
					</span>
				</div>
				<div className="w-full h-fit flex flex-col justify-center items-center overflow-hidden">
					<ImageGallery
						images={[
							"/blogexample.jpg",
							"/phone.png",
							"/qr_example.png",
						]}
					/>
					{/* <Image src={"/blogexample.jpg"} alt="Image" width={1024} height={1024} className="w-full h-full border-2 border-slate-900 object-cover drag-none rounded-md mt-0.5 mb-0.5 ml-1 mr-1 cursor-pointer"/> */}
				</div>
				<div className="w-full min-h-14 flex flex-col justify-center items-center overflow-hidden">
					<div className="w-full h-full flex flex-row justify-center items-center mr-1 ml-1">
						<div className="flex flex-row select-none pl-5 pr-5 h-full w-fit min-w-32 cursor-pointer opacity-50 active:opacity-100 justify-center items-center">
							<FaCircleArrowUp
								size={25}
								className="min-w-[32px]"
							/>
							<span className="text-xl ml-1.5 ellipsis w-full text-center">
								{likes}
							</span>
						</div>
						<div className="flex flex-row select-none pl-5 pr-5 h-full max-w-[250px] w-full cursor-pointer opacity-50 active:opacity-100 justify-center items-center border-l border-black">
							<FaMessage size={25} className="min-w-[32px]" />
							<span className="text-lg ml-5 ellipsis w-full text-start">
								Comment
							</span>
						</div>
						<div className="flex flex-row select-none h-full min-w-16 cursor-pointer opacity-50 active:opacity-100 justify-center items-center border-l border-black">
							<FaBookmark size={25} />
						</div>
						<div className="flex flex-row select-none h-full min-w-16 cursor-pointer opacity-50 active:opacity-100 justify-center items-center border-l border-black">
							<FaShare size={25} />
						</div>
					</div>
				</div>
				{showMenu && (
					<div
						ref={menuRef}
						className="absolute top-10 select-none right-5 w-36 h-fit overflow-hidden rounded-[6px] shadow-black shadow-sm p-2 border"
						style={{
							background: theme?.theme.colors.primary,
							borderColor: theme?.theme.colors.secondary,
						}}>
						<div className="hover:opacity-100 mb-1 opacity-75 cursor-pointer flex flex-row justify-start items-center">
							<FaEyeSlash />
							<span className="ml-1">Not interested</span>
						</div>
						<div className="hover:opacity-100 mb-1 opacity-75 cursor-pointer flex flex-row justify-start items-center">
							<FaGavel />
							<span className="ml-1">Report</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
interface ImageGalleryProps {
	images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [showModal, setShowModal] = useState<boolean>(false);
	const theme = React.useContext(ThemeContext);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<div className="relative select-none">
				<div
					onClick={openModal}
					className="flex flex-row flex-wrap justify-center items-center no-drag drag-none w-[100%] max-w-[600px] rounded-md object-cover min-h-[350px] h-[350px] max-h-[350px] mobile-p-2 overflow-hidden cursor-pointer">
					<Image
						src={images[currentIndex]}
						alt={`Image ${currentIndex + 1}`}
						width={1024}
						height={1024}
						className="w-full h-full object-cover drag-none mobile-p-2"
					/>
				</div>
				{showModal && (
					<div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 bg-black bg-opacity-50">
						<button
							onClick={closeModal}
							className="absolute top-0 z-50 right-0 m-4 ml-0 mr-2 text-lg text-white p-5 bg-black bg-opacity-50 rounded-lg">
							<FaX />
						</button>
						<div
							className="relative z-40 p-4 rounded-md"
							onClick={closeModal}>
							<div className="relative">
								<Image
									src={images[currentIndex]}
									alt={`Image ${currentIndex + 1}`}
									width={1024}
									height={1024}
									className="max-w-screen object-cover image-prev-pc max-h-screen rounded-md bg-gray-900"
								/>
							</div>
						</div>
						<button
							onClick={handlePrevious}
							className="absolute top-1/2 left-4 transform z-50 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-5">
							<FaArrowLeft />
						</button>
						<button
							onClick={handleNext}
							className="absolute top-1/2 right-4 transform z-50 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-5">
							<FaArrowRight />
						</button>
					</div>
				)}
			</div>
			<p className="text-center -mt-5 z-10 select-none mb-2 rounded-full font-bold p-5 pt-1 pb-1 bg-black bg-opacity-50 text-white">
				{currentIndex + 1} of {images.length}
			</p>
		</>
	);
};
