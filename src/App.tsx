import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
			<Toaster
				position="top-center"
				reverseOrder={false}
				toastOptions={{
					style: {
						background: "#f3f0ee",
						color: "#050505",
					},
				}}
			/>
		</>
	);
}

export default App;
