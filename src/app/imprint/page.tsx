"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import { ThemeContext } from "../../components/ThemeProvider";
import "../util.css";
import Footer from "@/components/homepage/Footer";

export default function Imprint() {
	const theme = React.useContext(ThemeContext);
	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main className="w-full h-screen flex flex-col overflow-hidden transition-all ease-in duration-75" style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<div className="w-full h-full flex flex-col justify-center items-center">
					<div className="w-1/3 h-fit-mt-16 flex flex-col justify-start items-start">
						<div className="w-full p-3 flex flex-col justify-center items-center select-none drag-none" style={{ color: theme?.theme.colors.text }}>
							<h1 className="text-4xl font-bold">Imprint</h1>
							<p className="text-sm font-normal mt-1">
								<i>information in accordance with §5 TMG</i>
							</p>
							<p className="text-lg font-normal mt-5">Rainer Winkler</p>
							<p className="text-lg font-normal mt-5">Altschauerberger Str. 8</p>
							<p className="text-lg font-normal">91448 Emskirchen</p>
							<p className="text-lg font-normal">Germany</p>

							{/* Hello dear reader, why are you looking at this old commit :D To let you know, this is just an example address */}

							<p className="text-lg font-normal mt-5">
								<strong>Contact:</strong>
							</p>
							<p className="text-lg font-normal mt-1">
								Email:{" "}
								<a href="mailto:spark-org@dxby.dev" style={{ color: theme?.theme.colors.text_link }}>
									spark-org@dxby.dev
								</a>
							</p>
							<p className="text-lg font-normal mt-1">
								Phone:{" "}
								<a href="tel:+491234567890" style={{ color: theme?.theme.colors.text_link }}>
									+49 123 4567890
								</a>
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
