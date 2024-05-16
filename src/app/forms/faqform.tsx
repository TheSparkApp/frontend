import { useEffect, useState } from "react";

interface FAQFormProps {
	theme?: any;
}

const FAQForm: React.FC<FAQFormProps> = ({ theme }) => {
	const [question, setQuestion] = useState<string>("");
	const [isTokenSet, setIsTokenSet] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsTokenSet(true);
		} else setIsTokenSet(false);
	}, []);

	const handleQuestionChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setQuestion(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return isTokenSet ? (
		<form
			onSubmit={handleSubmit}
			className="w-fit mt-2 max-w-[900px] min-w-[400px] pl-2 pr-2 justify-start items-center flex-col rounded-md flex p-2"
			style={{
				background: theme?.theme.colors.secondary,
			}}>
			<div className="flex flex-col w-11/12 pb-2" id="Category">
				<h1
					style={{ color: theme?.theme.colors.text }}
					className="text-3xl font-black italic text-center w-full mb-3 select-none">
					Any more questions?
				</h1>
				<div className="w-full h-fit group mb-2">
					<label
						htmlFor="question"
						className="block text-xs font-medium opacity-75 mb-1 ml-0.5"
						style={{
							color: theme?.theme.colors.text,
						}}>
						QUESTION *
					</label>
					<input
						style={{
							background: theme?.theme.colors.background,
							color: theme?.theme.colors.text,
						}}
						autoCorrect="off"
						autoComplete="off"
						id="question"
						name="question"
						required
						className="min-w-full w-full h-10 rounded-sm mt-1 p-1 pl-2 pr-4 outline-none border-none text-white focus:rounded-md ease-in transition-all duration-75"
						value={question}
						onChange={handleQuestionChange}
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
					Submit question
				</button>
			</div>
		</form>
	) : (
		<h1
			className="mt-5 text-xl font-black italic bg-red-600 rounded-sm p-2"
			style={{
				color: theme?.theme.colors.text,
			}}>
			You must be logged in to ask a question!
		</h1>
	);
};

export default FAQForm;
