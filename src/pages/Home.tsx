import FileUpload from "../components/FileUpload";
import Sidebar from "../components/Sidebar";
//#4d9900
function Home() {
	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<Sidebar companyName="BiologIC Technologies" />

			{/* Main Content Area (Right side) */}
			<div className="flex-1 bg-gray-100 p-6">
				<div className="bg-white w-full h-full rounded shadow-md flex justify-center items-center">
					<div className="">
						<h2 className="text-xl font-semibold mb-4 text-pink-300">
							Upload Telemetry Data
						</h2>
						<FileUpload />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
