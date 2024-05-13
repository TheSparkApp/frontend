"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Params = {
	params: {
		codeId?: string;
	};
};

export default function GroupPage({ params }: Params) {
	const { codeId } = params;

	const router = useRouter();
	if (!codeId) {
		if (!codeId || !/^\d+$/.test(codeId)) {
			router.push("/auth/login");
		}
	}

	return (
		<div>
			<h1>QR CODE mit code: {codeId} wird validiert</h1>
		</div>
	);
}
