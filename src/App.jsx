
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themes } from "./theme/Theme.jsx";
import Home from "./pages/Home.jsx";
import CustomBar from "./components/AppBar.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import Events from "./pages/Events.jsx";
import { LanguageProvider } from './context/LanguageContext.jsx';

function App() {
	const [mode] = useState("light");

	return (
		<LanguageProvider>

			<ThemeProvider theme={themes[mode]}>
				<CssBaseline />
				<CustomBar />
				<Home />
				<WhoWeAre />
				<Events />
			</ThemeProvider>
		</LanguageProvider>
	)
}

export default App
