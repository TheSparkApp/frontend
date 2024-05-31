"use client";
import React, { Suspense } from "react";
import { NavBar } from "../components/NavBar";
import { ThemeContext } from "@/components/ThemeProvider";
import { SideBar } from "../components/SideBar";
import Mainapp from "../mainapp";

export default function ContactPage() {
	const theme = React.useContext(ThemeContext);

	return (
		<Mainapp>
			<span>Contacts</span>
		</Mainapp>
	);
}
