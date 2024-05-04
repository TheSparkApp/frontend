"use client";
import React, { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Search() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const q = searchParams.get("q");
	if (!q) {
		router.prefetch("/home");
		router.push("/home");
	}
	return (
		<div>
			<h1>Suchergebnisse für: {q}</h1>
		</div>
	);
}

export default function SearchPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Search />
		</Suspense>
	);
}
