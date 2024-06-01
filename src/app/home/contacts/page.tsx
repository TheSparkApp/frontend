"use client";
import React, { ReactNode, Suspense, useEffect, useRef, useState } from "react";
import { NavBar } from "../components/NavBar";
import { ThemeContext } from "@/components/ThemeProvider";
import { SideBar } from "../components/SideBar";
import Mainapp from "../mainapp";
import "../../util.css";
import Image from "next/image";
import { Contact } from "../components/Contact";
import { FaArrowLeft, FaEllipsisVertical } from "react-icons/fa6";
import { useRouter } from "next/navigation";
interface ContactProps {
	children?: ReactNode;
	params: {
		contactId?: string;
	};
}

export default function Contacts({ children, params }: ContactProps) {
	const { contactId } = params;
	const theme = React.useContext(ThemeContext);
	const [isStatusOpen, setisStatusOpen] = useState(false);
	const [isPhoneChatOpen, setisPhoneChatOpen] = useState(false);
	const postRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				postRef.current &&
				!postRef.current.contains(event.target as Node)
			) {
				setisStatusOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function handleEnterPress(event: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (event.key === "Enter") {
			event.preventDefault();
			console.log("Enter key pressed to upadte status");
			setisStatusOpen(false);
		}
	}

	return (
		<Mainapp>
			<div className="w-full max-w-[1000px] h-full flex flex-row relative">
				{contactId && (
					<div className="hidden show-phone">
						<div
							className=" w-full h-full absolute z-50 flex flex-col"
							style={{
								background: theme?.theme.colors.background,
							}}>
							<MessageTab
								icon={""}
								lastSeen="Yesterday"
								name={`${contactId}`}
								status="Status"
							/>
						</div>
					</div>
				)}
				<div
					className="min-w-[280px] max-w-[320px] w-[320px] mobile-p-2-3 rounded-r-md flex flex-col items-center overflow-hidden"
					style={{
						background: theme?.theme.colors.primary,
					}}>
					<div className="h-full overflow-y-scroll overflow-hidden w-full ml-5 pb-24">
						<div className="flex flex-row justify-center items-center w-full">
							<div
								className="flex flex-row rounded-md items-center ml-3 w-full mr-5 p-2 pt-1 pb-1 mt-3 select-none cursor-pointer hover:opacity-75 opacity-100"
								style={{
									background: theme?.theme.colors.secondary,
								}}
								onClick={() => {
									setisStatusOpen(!isStatusOpen);
								}}>
								<Image
									src={"/stein_pfp.png"}
									width={50}
									height={50}
									alt="Profile picture"
									className="object-cover min-h-[50px] min-w-[50px] w-[52px] h-[50px] max-w-[50px] max-h-[50px] rounded-full"
								/>
								<span className="opacity-75 text-xl ml-5">
									Status...
								</span>
							</div>
						</div>

						<div className="flex flex-row w-full items-center justify-start mt-4 ml-2">
							<span className="text-2xl mobile-4xl font-semibold text-left w-fit">
								Contacts
							</span>
							<span className="text-lg mobile-xl opacity-50 ml-5 text-left w-full mt-1">
								492
							</span>
						</div>
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
							id="102"
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
							lastMessage="Hello worlsd"
							icon="/stein_pfp.png"
							hasStory={false}
							id="10"
						/>
					</div>
				</div>
				<div
					className="w-full hide-phone3 ml-3"
					style={{
						background: theme?.theme.colors.secondary,
					}}>
					{children ? (
						children
					) : (
						<div className="w-full h-full flex flex-col justify-center items-center">
							<div
								className="p-3 rounded-md shadow-md"
								style={{
									background: theme?.theme.colors.primary,
								}}>
								Select a contact to start a chat (lade letzte
								convo)
							</div>
						</div>
					)}
				</div>
				{isStatusOpen && (
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
											Update
										</span>
									</div>
								</div>
							</div>
							<div className="w-full h-fit p-2 text-xl">
								<textarea
									placeholder="What are you doing?"
									className="bg-transparent w-full pl-4 pr-4 resize-none overflow-hidden"
									autoComplete="off"
									maxLength={30}
									spellCheck="false"
									onKeyDown={handleEnterPress}
									rows={1}
									style={{
										lineHeight: "1.5",
										height: "1.5em",
									}}></textarea>
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
interface MessagetabProps {
	icon: any;
	name: string;
	lastSeen: string;
	status: string;
}
export const MessageTab: React.FC<MessagetabProps> = ({
	icon,
	name,
	lastSeen,
	status,
}) => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	return (
		<div className="flex flex-col w-full h-full">
			<div
				className="w-full min-h-16 max-h-16 border-b flex flex-row items-center pl-3 pr-3"
				style={{
					background: theme?.theme.colors.primary,
					borderColor: theme?.theme.colors.secondary,
				}}>
				<div className="w-full h-full flex flex-row flex-nowrap mt-3 select-none">
					<div className="hidden show-phone mr-3 mt-0.5">
						<div className="flex justify-center items-center">
							<div
								className="flex justify-center select-none cursor-pointer rounded-md items-center p-4 group"
								style={{
									background: theme?.theme.colors.secondary,
									borderColor: theme?.theme.colors.primary,
								}}
								onClick={() => {
									router.push("/home/contacts");
								}}>
								<FaArrowLeft className="group-hover:opacity-75" />
							</div>
						</div>
					</div>
					<Image
						src={"/stein_pfp.png"}
						width={50}
						height={50}
						alt="Profile picture"
						className="object-cover no-drag min-h-[50px] min-w-[50px] w-[52px] h-[50px] max-w-[50px] max-h-[50px] rounded-full"
					/>
					<div className="flex flex-col ml-2">
						<span className="text-2xl mobile-2xl cursor-pointer hover:underline">
							{name}
						</span>
						<div className="flex flex-row justify-center items-center">
							<span className="text-sm opacity-50">{status}</span>
							<span className="ml-2 mr-2 opacity-50 font-bold">
								·
							</span>
							<span className="text-sm opacity-50 ellipsis">
								Last seen: {lastSeen}
							</span>
						</div>
					</div>
				</div>
				<div className="transition-all ease-in duration-100 group min-w-10 h-full rounded-md active:opacity-100 opacity-75">
					<div className="w-full flex flex-row justify-center items-center cursor-pointer select-none rounded-md h-full">
						<FaEllipsisVertical size={20} />
					</div>
				</div>
			</div>
			<div className="w-full h-full relative flex flex-col rounded-md overflow-hidden">
				<div className="w-full h-full overflow-scroll p-2">
					<div className="w-full h-full flex flex-col relative select-none">
						<MessageObj message="Hello world" sender={true} />
						<MessageObj message="Hello world" sender={false} />
						<MessageObj message="Hello world" sender={true} />
						<MessageObj message="Hello world" sender={true} />

					</div>
				</div>
				<form
					className="w-full relative min-h-16 h-16 pt-2 pb-2 mb-[60px] bg-black flex justify-start items-center"
					style={{
						background: theme?.theme.colors.background,
					}}>
					<input
						className="w-full mr-1 rounded-md outline-none border h-full ml-1 text-lg p-2"
						style={{
							background: theme?.theme.colors.primary,
							borderColor: theme?.theme.colors.secondary,
						}}
					/>
					<div
						className="rounded-md outline-none border min-w-12 min-h-12 ml-1 mr-1 cursor-pointer ease-in transition-all hover:-translate-y-0.5 active:translate-y-0 active:opacity-75"
						style={{
							background: theme?.theme.colors.primary,
							borderColor: theme?.theme.colors.secondary,
						}}></div>
					<div
						className="rounded-md outline-none border min-w-12 min-h-12 ml-1 mr-1 cursor-pointer ease-in transition-all hover:-translate-y-0.5 active:translate-y-0 active:opacity-75"
						style={{
							background: theme?.theme.colors.primary,
							borderColor: theme?.theme.colors.secondary,
						}}></div>
				</form>
			</div>
		</div>
	);
};
interface MessageProps {
	message: string;
	sender: boolean;
}
const MessageObj: React.FC<MessageProps> = ({ sender, message }) => {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();
	return sender ? (
		<div className="w-full text-left mt-5">
			<span className="p-2 bg-red-600 rounded-md rounded-bl-none">
				{message}
			</span>
		</div>
	) : (
		<div className="w-full text-right mt-5">
			<span className="p-2 bg-blue-600 rounded-md rounded-br-sm">
				{message}
			</span>
		</div>
	);
};
