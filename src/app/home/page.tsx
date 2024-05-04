"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Search() {
	const searchParams = useSearchParams();
	const event = searchParams.get("events");

	return event ? <h1>Lade event im header: {event}</h1> : <div></div>;
}

export default function MainApp() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Search />
		</Suspense>
	);
}
