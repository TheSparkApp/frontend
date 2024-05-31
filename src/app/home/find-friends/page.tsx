"use client";
import React, { Suspense } from "react";
import { NavBar } from "../components/NavBar";
import { ThemeContext } from "@/components/ThemeProvider";
import { SideBar } from "../components/SideBar";
import Mainapp from "../mainapp";

export default function FindFriendsPage() {
	const theme = React.useContext(ThemeContext);

	return (
		<Mainapp>
			<span>Find friends</span>
		</Mainapp>
	);
}
