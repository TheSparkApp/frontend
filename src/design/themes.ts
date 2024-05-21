export interface Theme {
	name: string;
	colors: {
		logo_white: boolean;
		primary: string;
		accent: string;
		secondary: string;
		background: string;
		text: string;
		text_secondary: string;
		text_third: string;
		text_negative: string;
		text_link: string;
	};
	fonts: {
		body: string;
		heading: string;
	};
}

export const lightTheme: Theme = {
	name: "light",
	colors: {
		logo_white: true,
		primary: "#DBDFE4",
		accent: "#212121",
		secondary: "#ffffff",
		background: "#f1f1f1",
		text: "#000",
		text_secondary: "#111",
		text_third: "#000",
		text_link: "#0095ff",
		text_negative: "#fff",
	},
	fonts: {
		body: "'system-ui', sans-serif",
		heading: "'system-ui', sans-serif",
	},
};
export const darkTheme: Theme = {
	name: "dark",
	colors: {
		logo_white: false,
		primary: "#232323",
		accent: "#FFB800",
		secondary: "#343434",
		background: "#121212",
		text: "#fff",
		text_secondary: "#fff",
		text_third: "#fff",
		text_link: "#e8b923",
		text_negative: "#fff",
	},
	fonts: {
		body: "'system-ui', sans-serif",
		heading: "'system-ui', sans-serif",
	},
};

export const duskBlueTheme: Theme = {
	name: "duskBlue",
	colors: {
		logo_white: false,
		primary: "#404258",
		accent: "#FFB800",
		secondary: "#474E68",
		background: "#50577A",
		text: "#fff",
		text_secondary: "#fff",
		text_third: "#fff",
		text_link: "#0095ff",
		text_negative: "#fff",
	},
	fonts: {
		body: "'system-ui', sans-serif",
		heading: "'system-ui', sans-serif",
	},
};

// DEPRECATED, PREPARE FOR REMOVAL

// export const defaultTheme: Theme = {
//     name: "default",
//     colors: {
//         logo_white: false,
//         primary: "#1f2937", // Why Spark? background
//         accent: "#FFB800",
//         secondary: "#d1d5db", // Navbar background
//         background: "#6b7280", // Page background
//         text: "#FFF", // Text color
//         text_secondary: "#fff",
//         text_third: "#fff",
//         text_link: "#0095ff",
//         text_negative: "#fff",
//     },
//     fonts: {
//         body: "'system-ui', sans-serif",
//         heading: "'system-ui', sans-serif",
//     },
// };

export const defaultTheme = darkTheme;

export const themes: Array<Theme> = [defaultTheme, lightTheme, darkTheme, duskBlueTheme];
