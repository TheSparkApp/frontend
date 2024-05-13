"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Params = {
	params: {
		userId?: string;
	};
};

export default function GroupPage({ params }: Params) {
	const { userId } = params;

	const router = useRouter();
	if (!userId) {
		if (!userId || !/^\d+$/.test(userId)) {
			router.push("/home/groups");
		}
	}

	return (
		<div>
			<h1>Userprofile mit ID: {userId} wird geladen</h1>
		</div>
	);
}
