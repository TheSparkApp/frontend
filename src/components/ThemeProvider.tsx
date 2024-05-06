"use client";
import { Theme, lightTheme, darkTheme, duskBlueTheme, defaultTheme, themes } from "@/design/themes";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

type ThemeContextType = {
	theme: Theme;
	switchTheme: (newTheme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProviderComponent = ({ children }: { children: React.ReactNode }) => {
	let systemTheme: Theme;
	const router = useRouter();

	const [theme, setTheme] = React.useState(() => {
		let storedTheme;
		if (typeof localStorage !== "undefined") {
			storedTheme = localStorage.getItem("theme");
			systemTheme = window.matchMedia("(prefers-color-scheme: dark)") ? darkTheme : lightTheme;
		}
		const themeToUse = storedTheme ? themes.find((theme) => theme.name === JSON.parse(storedTheme || systemTheme).name) || systemTheme : systemTheme;
		return themeToUse || systemTheme || defaultTheme;
	});

	const switchTheme = (newTheme: Theme) => {
		const foundTheme = themes.find((theme) => theme.name === newTheme.name);
		if (foundTheme) {
			setTheme(foundTheme);
		} else {
			setTheme(systemTheme || defaultTheme);
		}
	};

	useEffect(() => {
		if (typeof localStorage !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)") ? darkTheme : lightTheme;
			let currentTheme: Theme | undefined;
			try {
				currentTheme = themes.find((theme) => theme.name === JSON.parse(storedTheme || '{"name": "none"}').name);
			} catch (e) {
				currentTheme = systemTheme || defaultTheme;
			}
			if (JSON.stringify(currentTheme) !== storedTheme) {
				setTheme(currentTheme || systemTheme);
			}
			localStorage.setItem("theme", JSON.stringify(theme));
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProviderComponent };
