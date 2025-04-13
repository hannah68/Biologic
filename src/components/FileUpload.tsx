import React from "react";
import { useNavigate } from "react-router-dom";

import { parseCSV, readFileAsString } from "../utils";

export interface Data {
	[key: string]: string | number;
}

function FileUpload() {
	const navigate = useNavigate();
	const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.target.files !== null) {
			const file = e.target.files[0];
			if (!file || file.type !== "text/csv") {
				alert("Please upload a valid CSV file");
				return;
			}
			try {
				const csvString = await readFileAsString({ file });
				const data = parseCSV(csvString);
				navigate("/dashboard", { state: { data } });
			} catch (error) {
				console.error("Error reading file:", error);
			}
		}
	};

	return (
		<div className="w-full flex justify-center items-center">
			<label
				htmlFor="csvUpload"
				className="border-2 border-dashed border-stone-400 p-8 rounded-md flex justify-center items-center cursor-pointer hover:text-lime-800 transition"
			>
				<p className="text-stone-500 text-xl">
					Drag and drop a file here, or{" "}
					<span className="underline">click to select one</span>.
				</p>
				<input
					type="file"
					accept=".csv"
					onChange={handleFileUpload}
					id="csvUpload"
					className="hidden"
				/>
			</label>
		</div>
	);
}

export default FileUpload;
