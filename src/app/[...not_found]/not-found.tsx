"use client";
import { ThemeContext } from "@/components/ThemeProvider";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
	const router = useRouter();

	const theme = React.useContext(ThemeContext);

	return (
		<div className="flex flex-col items-center justify-center h-screen" style={{ background: theme?.theme.colors.background }}>
			<h1 className="text-2xl mb-4" style={{ color: theme?.theme.colors.text }}>404 - Page Not Found</h1>
			<p style={{ color: theme?.theme.colors.text }}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
			<button className="mt-4 px-4 py-2 rounded cursor-pointer" style={{ color: theme?.theme.colors.text_link }} onClick={() => router.push("/")}>
				Go to Home Page
			</button>
		</div>
	);
}
