import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom

function Sidebar({ companyName }: { companyName: string }) {
	const location = useLocation(); // Get the current location

	return (
		<div className="w-64 bg-gray-800 text-white flex flex-col">
			{/* Product Name */}
			<div className="flex items-center justify-center h-16 bg-gray-900">
				<h1 className="text-2xl font-semibold">Qudos</h1>
			</div>

			{/* Sidebar Navigation */}
			<div className="mt-10 space-y-4 px-6">
				<Link
					to="/"
					className={`block text-gray-300 hover:text-white py-2 ${
						location.pathname === "/" ? "bg-gray-700" : ""
					}`}
				>
					Home
				</Link>

				<div className="text-gray-300 hover:text-white py-2">Settings</div>
			</div>

			{/* Company Name at the bottom */}
			<div className="mt-auto text-gray-300 text-center py-4 border-t border-gray-600">
				<p>{companyName}</p>
			</div>
		</div>
	);
}

export default Sidebar;
