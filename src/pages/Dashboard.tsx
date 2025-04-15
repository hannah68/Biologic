import { useLocation } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";

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
		keys,
	} = useChartCustom({
		data,
		selectedMetric,
	});

	const options = keys.map((metric) => ({
		value: metric,
		label: metric,
	}));

	if (!data) {
		return <div>No data available</div>;
	}
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div className="w-full bg-stone-950 p-6">
				<h2 className="text-2xl font-bold mb-8 text-stone-300 pt-4">
					DASHBOARD
				</h2>
				<div className="bg-stone-900 border border-stone-500 h-[780px] rounded-2xl shadow-md px-10 py-5 relative">
					{/* OVERVIEW */}

					<div className="flex justify-center gap-12 pt-10">
						<div className="flex flex-col space-y-5 pt-4">
							{metricsAverage.map((metric) => {
								return (
									<button
										className="bg-stone-950 p-4 rounded-xl shadow-xlg border border-stone-700 hover:border-stone-400"
										key={metric.name}
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
						<div className="flex flex-col">
							<div className="flex justify-between">
								<Select
									options={options}
									onChange={(selected) =>
										setSelectedmetric(selected?.value ?? "")
									}
									className="mt-2 w-[180px]"
									styles={{
										control: (base, state) => ({
											...base,
											backgroundColor: "#0c0a09",
											borderColor: "#365314",
											borderRadius: "0.5rem",
											borderWidth: "2px",
											color: "white",
											boxShadow: state.isFocused ? "none" : "none",
											"&:hover": {
												borderColor: "#365314",
											},
										}),
										menu: (base) => ({
											...base,
											backgroundColor: "#0c0a09",
											borderRadius: "0.5rem",
											zIndex: 9999,
										}),
										option: (base, state) => ({
											...base,
											backgroundColor: state.isFocused ? "#404040" : "#0c0a09",
											color: "white",
											cursor: "pointer",
										}),
										singleValue: (base) => ({
											...base,
											color: "white",
										}),
									}}
								/>

								<button
									onClick={() => {
										setRange([0, xAxisLabels.length - 1]);
										setTooltipVisible(false);
									}}
									className="mt-2 mr-4 px-4 py-2 bg-stone-950 rounded-md cursor-pointer font-semibold hover:bg-lime-800 text-white shadow-md border-2 border-lime-800 hover:border-stone-950"
								>
									Clear Filter
								</button>
							</div>

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
		</div>
	);
}

export default Dashboard;
