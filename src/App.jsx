
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
import { useTheme, useMediaQuery } from "@mui/material";

function App() {
	const [mode] = useState("light");

	return (
		<LanguageProvider>
			<ThemeProvider theme={themes[mode]}>
				<CssBaseline />
				<Router>
					<ScrollToTop />
					<ResponsiveRoutes />
				</Router>
			</ThemeProvider>
		</LanguageProvider>
	);
}

function ResponsiveRoutes() {
	const theme = useTheme();
	const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

	if (isMdUp) {

		return (
			<Routes>
				<Route
					path="/la-sfera"
					element={
						<>
							<CustomBar />
							<Box id="home"><Home /></Box>
							<Box id="who-we-are"><WhoWeAre /></Box>
							<Box id="events"><Events /></Box>
							<Box id="contact"><Contact /></Box>
						</>
					}
				/>
				<Route path="/events/:route" element={<EventDetail />} />
			</Routes>
		);
	}

	return (
		<>
			<CustomBar />
			<Routes>
				<Route path="/la-sfera" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/who-we-are" element={<WhoWeAre />} />
				<Route path="/events" element={<Events />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/events/:route" element={<EventDetail />} />
			</Routes>
		</>
	);
}


export default App
