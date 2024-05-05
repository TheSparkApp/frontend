"use client";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

// SHOUTOUTS TO
// https://github.com/elvessousa/next-intl/
// FOR THE INSPIRATION

export const defaultLocale = "en";
export const locales = ["en", "de"];
export const LanguageContext = createContext<[string, Dispatch<SetStateAction<string>>]>([defaultLocale, () => {}]);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocale] = useState(defaultLocale);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const language = localStorage.getItem("lang") || locale;
		setLocale(language);
	}, [locale]);

	return <LanguageContext.Provider value={[locale, setLocale]}>{children}</LanguageContext.Provider>;
}
