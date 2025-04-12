import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Data } from "../components/FileUpload";

const calculateAverage = (data: Data[], metric: string): number | null => {
	const validData = data.filter(
		(item) => item[metric] !== undefined && item[metric] !== null
	);
	if (validData.length === 0) return null;

	const sum = validData.reduce(
		(acc, item) => acc + parseFloat(item[metric] as string),
		0
	);
	return sum / validData.length;
};

function Dashboard() {
	const location = useLocation();
	const data = location.state?.data;

	const avgTemp = calculateAverage(data, "Temperature_C");
	const avgOxygen = calculateAverage(data, "Oxygen_%");
	const avgPH = calculateAverage(data, "pH");

	if (!data) {
		return <div>No data available</div>;
	}
	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<Sidebar companyName="BiologIC Technologies" />

			{/* Main Content Area (Right side) */}
			<div className="flex-1 bg-gray-100 p-6">
				<div className="bg-white w-full h-full rounded shadow-md">
					<h2 className="text-xl font-semibold mb-4 text-pink-300">
						Dashboard Content
					</h2>
					<div className="flex">
						{/* Left Side - Three Vertical Boxes */}
						<div className="flex flex-col space-y-4 w-1/3 p-4">
							<div className="bg-white p-4 rounded shadow-md">
								<h3 className="text-lg font-semibold">Average Temperature</h3>
								<p>{avgTemp?.toFixed(2)} °C</p>
							</div>
							<div className="bg-white p-4 rounded shadow-md">
								<h3 className="text-lg font-semibold">Average Oxygen</h3>
								<p>{avgOxygen?.toFixed(2)} %</p>
							</div>
							<div className="bg-white p-4 rounded shadow-md">
								<h3 className="text-lg font-semibold">Average pH</h3>
								<p>{avgPH?.toFixed(2)}</p>
							</div>
						</div>

						{/* Right Side - Large Box for Plot/Graph */}
						<div className="w-2/3 p-4">
							<div className="bg-white h-full rounded shadow-md">
								<h3 className="text-xl font-semibold mb-4">Data Plot</h3>
								{/* Placeholder for the graph */}
								<div className="w-full h-64 bg-gray-200 rounded flex justify-center items-center text-gray-500">
									Graph will be here
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
