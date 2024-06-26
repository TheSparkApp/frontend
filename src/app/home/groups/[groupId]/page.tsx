"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Params = {
	params: {
		groupId?: string;
	};
};

export default function GroupPage({ params }: Params) {
	const { groupId } = params;
	const router = useRouter();
	if (!groupId) {
		if (!groupId || !/^\d+$/.test(groupId)) {
			router.push("/home/groups");
		}
	}

	return (
		<div>
			<h1>Gruppe mit ID: {groupId} wird geladen</h1>
		</div>
	);
}
