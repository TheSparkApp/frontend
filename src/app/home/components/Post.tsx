import { ThemeContext } from "@/components/ThemeProvider";
import NumberFormatter from "@/util/numberFormatter";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaBookmark, FaCircleArrowUp, FaEllipsisVertical, FaEyeSlash, FaGavel, FaMessage, FaShare, FaX } from "react-icons/fa6";

export const Post: React.FC = () => {
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