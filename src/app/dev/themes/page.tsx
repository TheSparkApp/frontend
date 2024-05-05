"use client";
import { LOGO } from "@/components/LOGO";
import { ThemeContext } from "@/components/ThemeProvider";
import { Theme, darkTheme, lightTheme, themes } from "@/design/themes";
import React, { ReactNode } from "react";

function Page() {
	const theme = React.useContext(ThemeContext);

	function switchT(t: Theme) {
		if (theme) {
			theme.switchTheme(t);
		}
	}

	let children: Array<ReactNode> = [];

	themes.forEach((t) => {
		let btn = (
			<button key={t.name} onClick={() => switchT(t)} style={{ color: theme?.theme.colors.text }}>
				{t.name.charAt(0).toUpperCase() + t.name.slice(1)}
			</button>
		);
		let found = false;
		children.forEach((c) => {
			if (React.isValidElement(c) && c.key === t.name) {
				found = true;
				return;
			}
		});
		if (!found) {
			children.push(btn);
		}
	});

	themes.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<main className="w-full h-screen flex flex-col overflow-hidden transition-all ease-in duration-75" style={{ background: theme?.theme.colors.background }}>
			<div className="w-full items-center justify-center flex">
				<LOGO width="320px" height="120px" white={!theme?.theme.colors.logo_white} />
			</div>
			<div className="h-fit w-full">
				<div className="w-full h-16 flex flex-row items-center justify-center pl-10 pr-10 gap-10">{children}</div>
				<div className="w-full h-full flex flex-col items-center">
					<a href="/dev" className="text-center text-4xl font-black mt-2 mb-5 text-blue-400 border-2 border-blue-500 border-solid cursor-pointer w-fit p-1 pl-2 pr-2 rounded-lg hover:bg-blue-900 transition-all">
						Return to DEV
					</a>
					<h1 style={{ color: theme?.theme.colors.text }} className="text-4xl font-bold">
						This is the text color!
					</h1>
					<h1 style={{ color: theme?.theme.colors.text }} className="pt-10 text-xl">
						You can see the background color behind this text!
					</h1>
					<a style={{ color: theme?.theme.colors.text_link }} href="/dev/themes" className="pt-10 text-xl">
						This is a link!
					</a>
					<h1 className="pt-10 text-3xl font-bold" style={{ color: theme?.theme.colors.text }}>
						Links
					</h1>
					<div className="w-full h-fit text-xl flex flex-row items-center justify-center gap-10 pt-10">
						<p style={{ color: theme?.theme.colors.text }}>Primary</p>
						<p style={{ color: theme?.theme.colors.secondary }}>Secondary</p>
						<p style={{ color: theme?.theme.colors.text_third }}>Third</p>
						<p style={{ color: theme?.theme.colors.text_negative }}>Negative</p>
						<p style={{ color: theme?.theme.colors.accent }}>Accent</p>
					</div>
				</div>
			</div>
			<div className="w-full h-full flex flex-row items-center justify-between pt-10">
				<div className="w-full h-full flex flex-row items-center justify-between" style={{ backgroundColor: theme?.theme.colors.primary }}>
					<h1 className="w-full h-full flex items-center justify-center text-center text-4xl font-bold" style={{ color: theme?.theme.colors.text }}>
						Primary color
					</h1>
				</div>
				<div className="w-full h-full flex flex-row items-center justify-between" style={{ backgroundColor: theme?.theme.colors.secondary }}>
					<h1 className="w-full h-full flex items-center justify-center text-center text-4xl font-bold" style={{ color: theme?.theme.colors.text }}>
						Secondary color
					</h1>
				</div>
			</div>
		</main>
	);
}

export default Page;
