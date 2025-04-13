import { useState } from "react";

import { Data } from "../components/FileUpload";

type Metric = {
	name: string;
	label: string;
	value: number;
	unit: string;
};

const getMinMax = (data: Data[], key: keyof Data) => {
	const values = data
		.map((d) => parseFloat(String(d[key])))
		.filter(Number.isFinite);
	return {
		min: Math.min(...values),
		max: Math.max(...values),
	};
};

const calculateAverage = (
	data: Data[],
	metric: string
): { name: string; value: number } => {
	const sum = data.reduce(
		(acc, item) => acc + parseFloat(item[metric] as string),
		0
	);
	return { name: metric, value: sum / data.length };
};

export const useChartCustom = ({
	data,
	selectedMetric,
}: {
	data: Data[];
	selectedMetric: string;
}) => {
	const keys = Object.keys(data[0] || {}).filter((key) => key !== "Timestamp");
	const keyToUse = selectedMetric !== "" ? selectedMetric : keys[1];
	const plotData = data.map((item) => parseFloat(String(item[keyToUse])));
	const xAxisLabels = data.map((item) => item.Timestamp);

	const [range, setRange] = useState<number[]>([0, xAxisLabels.length - 1]);
	const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);

	const avgTemp = calculateAverage(data, "Temperature_C");
	const avgOxygen = calculateAverage(data, "Oxygen_%");
	const avgPH = calculateAverage(data, "pH");
	const rpmStats = getMinMax(data, "Stirrer_Speed_RPM");
	const metricsAverage: Metric[] = [
		{
			name: "Temperature (Avg.)",
			label: "Temperature_C",
			value: avgTemp.value,
			unit: "°C",
		},
		{
			name: "Oxygen (Avg.)",
			label: "Oxygen_%",
			value: avgOxygen.value,
			unit: "%",
		},
		{ name: "PH (Avg.)", label: "pH", value: avgPH.value, unit: "" },
		{
			name: "Stirrer Speed (Min)",
			label: "Stirrer_Speed_RPM",
			value: rpmStats.min,
			unit: "RPM",
		},
		{
			name: "Stirrer Speed (Max)",
			label: "Stirrer_Speed_RPM",
			value: rpmStats.max,
			unit: "RPM",
		},
	];

	return {
		metricsAverage,
		plotData,
		xAxisLabels,
		keyToUse,
		range,
		setRange,
		setTooltipVisible,
		isTooltipVisible,
	};
};
