import { useLocation } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Plot from "../components/Plot";
import { useChartCustom } from "../hooks/useChartCustom";

function Dashboard() {
	const [selectedMetric, setSelectedmetric] = useState<string>("");
	const location = useLocation();
	const data = location.state?.data;
	const {
		metricsAverage,
		plotData,
		xAxisLabels,
		keyToUse,
		range,
		setRange,
		isTooltipVisible,
		setTooltipVisible,
	} = useChartCustom({
		data,
		selectedMetric,
	});

	if (!data) {
		return <div>No data available</div>;
	}
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div className="w-full bg-stone-950 p-6">
				<div className="bg-stone-900 border border-stone-500 h-full rounded-2xl shadow-md px-10 py-5 relative">
					<h2 className="text-2xl font-bold mb-4 text-stone-300">DASHBOARD</h2>
					{/* OVERVIEW */}
					<button
						onClick={() => {
							setRange([0, xAxisLabels.length - 1]);
							setTooltipVisible(false);
						}}
						className="absolute top-8 right-15 mt-2 mr-4 px-4 py-2 hover:bg-stone-950 rounded-md cursor-pointer font-semibol bg-lime-800 text-white shadow-lg hover:border hover:border-2 hover:border-lime-700"
					>
						Clear Filter
					</button>
					<div className="flex justify-center gap-12 pt-5">
						<div className="flex flex-col space-y-5 pt-4">
							{metricsAverage.map((metric) => {
								return (
									<button
										className="bg-stone-950 p-4 rounded-xl shadow-xlg cursor-pointer border border-stone-700 hover:border-stone-400"
										key={metric.name}
										onClick={() => {
											setSelectedmetric(metric.label);
										}}
									>
										<h3 className="text-lg font-semibold text-lime-600 pb-2">
											{metric.name}
										</h3>
										<p className="text-white">
											{metric.value.toFixed(2)} {metric.unit}
										</p>
									</button>
								);
							})}
						</div>

						{/* PLOT */}
						<div className="h-[550px] pt-4">
							<div className="w-full h-full rounded flex  text-gray-500">
								<Plot
									plotData={plotData}
									xAxisLabels={xAxisLabels}
									keyToUse={keyToUse}
									range={range}
									setRange={setRange}
									setTooltipVisible={setTooltipVisible}
									isTooltipVisible={isTooltipVisible}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
