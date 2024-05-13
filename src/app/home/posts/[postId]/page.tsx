"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Params = {
	params: {
		postId?: string;
	};
};

export default function PostPage({ params }: Params) {
	const { postId } = params;

	const router = useRouter();
	if (!postId) {
		if (!postId || !/^\d+$/.test(postId)) {
			router.push("/home/groups");
		}
	}

	return (
		<div>
			<h1>Post mit ID: {postId}:</h1>
		</div>
	);
}
