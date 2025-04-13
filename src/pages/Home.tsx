import FileUpload from "../components/FileUpload";
import Sidebar from "../components/Sidebar";

function Home() {
	return (
		<div className="flex min-h-screen">
			<Sidebar />

			<div className="w-full bg-stone-950 p-6">
				<div className="h-full rounded-xl shadow-md px-10 py-5 flex justify-center items-center">
					<div>
						<h2 className="text-4xl font-semibold mb-15 text-lime-700 text-center">
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
