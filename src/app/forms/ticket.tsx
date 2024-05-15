import React, { useState } from "react";

interface TicketFormProps {
	theme?: any;
}

const TicketForm: React.FC<TicketFormProps> = ({ theme }) => {
	const [category, setCategory] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setCategory(event.target.value);
	};

	const handleSubjectChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSubject(event.target.value);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form
            onSubmit={handleSubmit}
			className="w-fit mt-2 max-w-[900px] min-w-[400px] pl-2 pr-2 justify-start items-center flex-col rounded-md flex p-2"
			style={{
				background: theme?.theme.colors.secondary,
			}}>
			<div className="flex flex-col w-11/12 pb-2" id="Category">
				<h1
					style={{ color: theme?.theme.colors.text }}
					className="text-4xl font-black italic text-center w-full mb-3 select-none">
					Create your ticket
				</h1>
				<label
					htmlFor="Category"
					className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
					style={{ color: theme?.theme.colors.text }}>
					CATEGORY *
				</label>
				<select
					style={{
						background: theme?.theme.colors.background,
						color: theme?.theme.colors.text,
					}}
					className="h-10 p-2 font-semibold rounded-sm cursor-pointer select-none"
					required
					value={category ?? ""}
					onChange={handleCategoryChange}>
					<option value="" disabled>
						Select the category of your problem
					</option>
					<option value="bug">
						Error / Bug / Problem with SPARK
					</option>
					<option value="accountproblem">
						Problem with my account
					</option>
					<option value="logintrouble">
						Login Trouble / Unable to Access Account
					</option>
					<option value="browsercompatibility">
						Browser Compatibility / Cross-Browser Issues
					</option>
					<option value="technicalissue">
						Technical Issue / Performance Problem
					</option>
					<option value="accountbanned">
						Account Banned / Suspension without Cause
					</option>
					<option value="other">Other Issue / Not Listed Here</option>
				</select>
				<div className="w-full h-fit group mb-2 mt-2">
					<label
						htmlFor="subject"
						className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
						style={{
							color: theme?.theme.colors.text,
						}}>
						SUBJECT (Write briefly what it is about) *
					</label>
					<input
						style={{
							background: theme?.theme.colors.background,
						}}
						autoCorrect="off"
						autoComplete="off"
						id="subject"
						name="subject"
						className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
						value={subject}
						required
						onChange={handleSubjectChange}
					/>
				</div>
				<div className="w-full h-fit group mb-2">
					<label
						htmlFor="email"
						className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
						style={{
							color: theme?.theme.colors.text,
						}}>
						CONTACT EMAIL *
					</label>
					<input
						style={{
							background: theme?.theme.colors.background,
						}}
						autoCorrect="off"
						autoComplete="off"
						id="email"
						type="email"
						name="email"
						required
						className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
						value={email}
						onChange={handleEmailChange}
					/>
				</div>
				<button
					id="submit-btn"
					style={{
						background: theme?.theme.colors.background,
						color: theme?.theme.colors.text,
					}}
					type="submit"
					className="w-full h-10 font-semibold text-xl rounded-sm mt-2 transition-all ease-in hover:opacity-90 hover:rounded-md duration-[45ms]">
					Submit ticket
				</button>
			</div>
		</form>
	);
};

export default TicketForm;
