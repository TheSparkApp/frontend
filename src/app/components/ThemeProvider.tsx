"use client";
import { Theme, lightTheme, themes } from "@/design/themes";
import React, { createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";

type ThemeContextType = {
	theme: Theme;
	switchTheme: (newTheme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProviderComponent = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = React.useState(() => {
        let storedTheme;
        if (typeof localStorage !== 'undefined') {
            storedTheme = localStorage.getItem('theme');
        }
        const themeToUse = storedTheme ? JSON.parse(storedTheme) : lightTheme;
        console.log('Using theme:', themeToUse);
        return themeToUse;
    });

    const switchTheme = (newTheme: Theme) => {
        const foundTheme = themes.find((theme) => theme.name === newTheme.name);
        if (foundTheme) {
            setTheme(foundTheme);
        } else {
            setTheme(lightTheme);
        }
    };

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('theme', JSON.stringify(theme));
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProviderComponent };
