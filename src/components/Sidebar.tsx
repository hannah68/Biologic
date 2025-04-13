import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<div className="w-[350px] bg-stone-950 flex flex-col border-r border-stone-500">
			<h1 className="text-3xl font-semibold text-stone-300 bg-lime-900 pt-10 pl-2 h-24">
				The Smart Platform
			</h1>

			<div className="mt-20 space-y-4 px-6">
				<Link
					to="/"
					className="uppercase block text-xl py-2 text-lime-700 font-semibold"
				>
					Home
				</Link>
				<div className="text-stone-400 font-semibold uppercase text-xl py-2 hover:text-lime-700">
					Design
				</div>
				<div className="text-stone-400 font-semibold uppercase text-xl py-2 hover:text-lime-700">
					Test
				</div>
				<div className="text-stone-400 font-semibold uppercase text-xl py-2 hover:text-lime-700">
					Settings
				</div>
			</div>

			<div className="mt-auto bg-stone-900 text-stone-400 text-center flex gap-2 py-4 border-t border-stone-500 justify-center">
				<div className="flex flex-col items-center">
					<p className="text-2xl font-bold tracking-wider">BiologIC</p>
					<p className="text-sm">Technologies</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
