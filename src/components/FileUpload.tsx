import React, { useState } from "react";
import { parseCSV, readFileAsString } from "../utils";
import { useNavigate } from "react-router-dom";

export interface Data {
	[key: string]: string | number;
}

function FileUpload() {
	const navigate = useNavigate();
	const [uploadedData, setUploadedData] = useState<Data[]>([]);

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
				setUploadedData(data);
				navigate("/dashboard", { state: { data } });
			} catch (error) {
				console.error("Error reading file:", error);
			}
		}
	};

	console.log(111, uploadedData);

	return (
		<div className="w-full flex justify-center items-center">
			<label
				htmlFor="csvUpload"
				className="border-2 border-dashed border-gray-400 p-8 rounded-md flex justify-center items-center cursor-pointer hover:bg-gray-50 transition"
			>
				<p className="text-gray-500">
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
