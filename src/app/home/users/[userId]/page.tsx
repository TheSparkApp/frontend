import React from "react";

type Params = {
	params: {
		userId?: string;
	};
};

export default function GroupPage({ params }: Params) {
	const { userId } = params;

	if (!userId) {
		return <div>Fehler: Keine User-ID angegeben.</div>;
	}

	return (
		<div>
			<h1>Userprofile mit ID: {userId} wird geladen</h1>
		</div>
	);
}
