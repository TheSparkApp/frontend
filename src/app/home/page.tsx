"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function MainApp() {
	const events = useSearchParams();
    const event = events.get("events");
	return <div>
		{event? <h1>Lade event im header: {event}</h1> : <div></div>}
		You are on mainpage /home/ oder /home?events=... für events! TODO: Implement API and backend
		</div>;
}
