"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
	const searchParams = useSearchParams();
    const q = searchParams.get("q");
	if(!q) window.location.href = "/home";
	return <div>
		You are on subpage /search?q=... ! TODO: Implement API and backend & Search system
		<h1>Suchergebnisse für: {q}</h1>
		</div>;
}
