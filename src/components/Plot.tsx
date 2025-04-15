import "chartjs-adapter-date-fns";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	TimeScale,
	Filler,
	TooltipItem,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";
import RcTooltip from "rc-tooltip";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	TimeScale,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	zoomPlugin
);

function Plot({
	plotData,
	xAxisLabels,
	keyToUse,
	range,
	setRange,
	setTooltipVisible,
	isTooltipVisible,
}: {
	plotData: number[];
	xAxisLabels: (number | string)[];
	keyToUse: string;
	range: number[];
	setRange: React.Dispatch<React.SetStateAction<number[]>>;
	isTooltipVisible: boolean;
	setTooltipVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const filteredLabels = useMemo(
		() => xAxisLabels.slice(range[0], range[1] + 1),
		[xAxisLabels, range]
	);
	const filteredData = useMemo(
		() => plotData.slice(range[0], range[1] + 1),
		[plotData, range]
	);

	return (
		<div className="bg-stone-950 p-4 rounded-xl shadow-md h-full border border-stone-700">
			<div className="w-full" style={{ height: "520px", width: "950px" }}>
				<Line
					data={{
						labels: filteredLabels,
						datasets: [
							{
								label: keyToUse,
								data: filteredData,
								fill: true,
								borderColor: "#638f31",
								backgroundColor: "rgba(132, 204, 22, 0.2)",
								borderWidth: 2,
								tension: 0.4,
							},
						],
					}}
					options={{
						responsive: true,
						plugins: {
							tooltip: {
								callbacks: {
									label: (tooltipItem: TooltipItem<"line">) => {
										console.log(tooltipItem);
										return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
									},
								},
							},

							zoom: {
								pan: {
									enabled: true,
									mode: "xy",
									threshold: 10,
								},
								zoom: {
									wheel: {
										enabled: true,
									},
									pinch: {
										enabled: true,
									},
									mode: "xy",
								},
							},
						},
						scales: {
							x: {
								ticks: {
									color: "#f2ffe6",
								},
								title: {
									display: true,
									text: "Timestamp",
								},
							},
							y: {
								ticks: {
									color: "#f2ffe6",
								},
							},
						},
					}}
				/>
			</div>
			<div className="mt-8 px-4">
				<p className="text-md text-white mb-4 text-center">Filter Time Range</p>
				<div className="relative">
					<Slider
						range
						min={0}
						max={xAxisLabels.length - 1}
						defaultValue={[0, xAxisLabels.length - 1]}
						value={range}
						className="slider"
						onChangeComplete={() => setTooltipVisible(true)}
						onChange={(value) => {
							if (Array.isArray(value)) {
								setRange(value);
								setTooltipVisible(true);
							}
						}}
						handleRender={(node, props) =>
							isTooltipVisible ? (
								<RcTooltip
									overlay={xAxisLabels[props.value]}
									placement="top"
									key={props.index}
									motion={{ motionName: "rc-slider-tooltip-motion" }}
									getTooltipContainer={() => document.body}
								>
									{node}
								</RcTooltip>
							) : (
								<>{node}</>
							)
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default Plot;
