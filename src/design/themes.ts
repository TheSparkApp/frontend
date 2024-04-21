export interface Theme {
    name: string;
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
    };
    fonts: {
        body: string;
        heading: string;
    };
}

export const defaultTheme: Theme = {
    name: "default",
    colors: {
        primary: "#1f2937", // Why Spark? background
        secondary: "#d1d5db", // Navbar background
        background: "#6b7280", // Page background
        text: "#FFFFFF", // Text color
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Roboto', sans-serif",
    },
};

export const lightTheme: Theme = {
    name: "light",
    colors: {
        primary: "#1976d2",
        secondary: "#dc004e",
        background: "#ffffff",
        text: "#000000",
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Roboto', sans-serif",
    },
};
export const darkTheme: Theme = {
    name: "dark",
    colors: {
        primary: "#90caf9",
        secondary: "#f48fb1",
        background: "#121212",
        text: "#ffffff",
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Roboto', sans-serif",
    },
};

export const duskBlueTheme: Theme = {
    name: "duskBlue",
    colors: {
        primary: "#404258",
        secondary: "#474E68",
        background: "#50577A",
        text: "#6B728E",
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Roboto', sans-serif",
    },
};

export const themes: Array<Theme> = [lightTheme, darkTheme];