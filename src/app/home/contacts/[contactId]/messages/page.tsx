"use client";
import { Contact } from "@/app/home/components/Contact";
import { useRouter } from "next/navigation";
import React from "react";
import Contacts, { MessageTab } from "../../page";
import { ThemeContext } from "@/components/ThemeProvider";

type Params = {
	params: {
		contactId?: string;
	};
};
export default function ContactMessages({ params }: Params) {
	const { contactId } = params;
	const router = useRouter();
	const theme = React.useContext(ThemeContext);

	return (
		<Contacts params={{ contactId: contactId }}>
			<div
				className="w-[60%] h-full absolute z-50 flex flex-col"
				style={{
					background: theme?.theme.colors.background,
				}}>
				<MessageTab
					icon={""}
					lastSeen="Yesterday"
					name={`${contactId}`}
					status="Status"
				/>
			</div>
		</Contacts>
	);
}
