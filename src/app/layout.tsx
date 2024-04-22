import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviderComponent } from "./components/ThemeProvider";

export const metadata: Metadata = {
	title: "Spark",
	description: "",
	icons: {
		icon: [
			"/favicon.ico"
		]
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="./favicon.ico" sizes="any" />
			</head>
			<body>
				<ThemeProviderComponent>   
					{children}
				</ThemeProviderComponent>
			</body>
		</html>
	);
}
