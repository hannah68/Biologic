import Papa from "papaparse";
import { Data } from "./components/FileUpload";

export const readFileAsString = ({ file }: { file: File }): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (e) => {
			const result = e?.target?.result as string;
			if (!result) reject(new Error("File is empty"));
			resolve(result);
		};
		reader.onerror = () => {
			reject(new Error(`Unable to read file. ${reader.error}`));
		};
		reader.readAsText(file);
	});
};

export const parseCSV = (csvString: string): Data[] => {
	const { data } = Papa.parse(csvString, {
		header: true,
		skipEmptyLines: true,
	});
	return data as Data[];
};
