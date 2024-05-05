import React from "react";

type Params = {
	params: {
		postId?: string;
	};
};

export default function PostPage({ params }: Params) {
	const { postId } = params;

	if (!postId) {
		return <div>Fehler: Keine Post-ID angegeben.</div>;
	}

	return (
		<div>
			<h1>Post mit ID: {postId}:</h1>
		</div>
	);
}
