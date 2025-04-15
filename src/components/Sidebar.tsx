import { Link } from "react-router-dom";
import { IoAnalytics } from "react-icons/io5";
import { AiFillExperiment } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
	return (
		<div className="w-[350px] bg-stone-950 flex flex-col border-r border-stone-500">
			<h1 className="text-2xl font-semibold text-stone-200 bg-lime-700 pt-10 pl-8 h-24">
				The Smart Platform
			</h1>

			<div className="mt-20 space-y-4 pl-10">
				<Link
					to="/"
					className="flex uppercase items-center gap-2 text-xl py-2 text-lime-700 font-semibold cursor-pointer"
				>
					<MdDashboard />
					<span>Dashboard</span>
				</Link>
				<div className="flex text-stone-300 font-semibold uppercase items-center gap-2 text-xl py-2 hover:text-lime-700 cursor-pointer">
					<AiFillExperiment />
					<span>Design</span>
				</div>
				<div className="flex text-stone-300 font-semibold uppercase items-center gap-2  text-xl py-2 hover:text-lime-700 cursor-pointer">
					<IoAnalytics />
					<span>Analyze</span>
				</div>
				<div className="flex text-stone-300 font-semibold uppercase items-center gap-2 text-xl py-2 hover:text-lime-700 cursor-pointer">
					<IoMdSettings />
					<span>Settings</span>
				</div>
			</div>

			<div className="mt-auto bg-stone-900 text-stone-300 text-center flex gap-2 py-4 border-t border-stone-500 justify-center">
				<div className="flex flex-col items-center">
					<p className="text-2xl font-bold tracking-wider">BiologIC</p>
					<p className="text-sm">Technologies</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
