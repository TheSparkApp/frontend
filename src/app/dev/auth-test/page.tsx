"use client";
import React, { useState } from "react";
import crypto from "crypto";
import { Base64 } from "js-base64";
import generateToken, { validateToken } from "./tokenGen";
import { LOGO } from "@/components/LOGO";
import { ThemeContext } from "@/components/ThemeProvider";
import { useRouter } from "next/navigation";

function Page() {
	const [id, setId] = useState<number | null>(null);
	const [password, setPassword] = useState("");
	const [token, setToken] = useState("");
	const [validationResult, setValidationResult] = useState(false);
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	const handleGenerateToken = () => {
		if (id !== null && password !== "") {
			const accountCreation = "2024-06-03T21:50:13.236Z";
			const newToken = generateToken(id, password, accountCreation);
			setToken(newToken);
			setValidationResult(false);
		}
	};

	const handleValidateToken = () => {
		if (token !== "" && password !== "") {
			const accountCreation = "2024-06-03T21:50:13.236Z";
			const isValid = validateToken(token, password, accountCreation);
			setValidationResult(isValid);
		}
	};

	return (
		<main className="w-full h-screen flex flex-col overflow-hidden transition-all ease-in duration-75" style={{ background: theme?.theme.colors.background }}>
			<div className="w-full items-center justify-center flex">
				<LOGO width="320px" height="120px" white={!theme?.theme.colors.logo_white} />
			</div>
			<div className="h-fit w-full flex flex-col justify-center items-center">
				<a onClick={() => router.push("/dev")} className="text-center text-4xl font-black mt-2 text-blue-400 border-2 border-blue-500 border-solid cursor-pointer w-fit p-1 pl-2 pr-2 rounded-lg hover:bg-blue-900 transition-all">
					Return to DEV
				</a>
				<div className="w-full h-full flex flex-row items-start justify-center pl-10 pr-10 gap-10 mt-10 flex-wrap">
					<div className="border-[1px] rounded-xl border-white border-solid p-2 w-96 flex flex-col items-center mt-1">
						<h1 className="text-white text-3xl">Token generator</h1>
						<input type="number" placeholder="Enter some id (will be autogenerated)" value={id || ""} onChange={(e) => setId(Number(e.target.value))} className="mt-5 rounded-lg w-11/12 h-10 text-white bg-gray-800 pl-3 pr-5 outline-none text-xl" />
						<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-5 rounded-lg w-11/12 h-10 text-white bg-gray-800 pl-3 pr-5 outline-none text-xl" />
						<div onClick={handleGenerateToken} className="mt-5 p-2 bg-gray-800 rounded-md text-2xl text-white cursor-pointer hover:bg-gray-700 select-none">
							Generate
						</div>
						<p className="text-white mt-5 p-2 bg-black rounded-md">{token}</p>
					</div>
					<div className="border-[1px] rounded-xl border-white border-solid p-2 w-96 flex flex-col items-center mt-1">
						<h1 className="text-white text-3xl">Token Validator</h1>
						<input type="text" placeholder="Enter token to validate" value={token} onChange={(e) => setToken(e.target.value)} className="mt-5 rounded-lg w-11/12 h-10 text-white bg-gray-800 pl-3 pr-5 outline-none text-xl" />
						<div onClick={handleValidateToken} className="mt-5 p-2 bg-gray-800 rounded-md text-2xl text-white cursor-pointer hover:bg-gray-700 select-none">
							Validate
						</div>
						<p className="text-white mt-5 p-2 bg-black rounded-md">{validationResult ? "Token is valid" : "Token is invalid"}</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Page;
