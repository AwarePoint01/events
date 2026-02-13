
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themes } from "./theme/Theme.jsx";
import { Box } from "@mui/system";
import Home from "./pages/Home.jsx";
import CustomBar from "./components/AppBar.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import { LanguageProvider } from './context/LanguageContext.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDetail from "./pages/EventDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
	const [mode] = useState("light");

	return (
		<LanguageProvider>

			<ThemeProvider theme={themes[mode]}>
				<CssBaseline />
				<Router>
					<ScrollToTop />
					<Routes>
						{/* Vista principale con tutte le sezioni */}
						<Route path="/events" element={
							<>
								<CustomBar />
								<Box id="home"><Home /></Box>
								<Box id="who-we-are"><WhoWeAre /></Box>
								<Box id="events"><Events /></Box>
								<Box id="contact"><Contact /></Box>
							</>
						} />

						<Route path="/events/:route" element={
							<>
								<EventDetail />
							</>
						} />
					</Routes>
				</Router>
			</ThemeProvider>
		</LanguageProvider>
	)
}

export default App
