import { Typography, Container } from "@mui/material";
import homeImg from "../assets/img/homepage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "@mui/material/styles";

function Home() {
	const { data } = useLanguage();
	const theme = useTheme();


	return (
		<Container sx={{ backgroundImage: `url(${homeImg})` }}>
			<Typography variant="h1"
				sx={{
					color: "white",
					padding: "0.1em 0.5em",
					margin: 0,
					//backdropFilter: "blur(10px)",
					overflow: "hidden",
					textShadow: theme.customShadows.textStrong,
				}}>
				{data.home?.title}
			</Typography>
		</Container>
	)
}

export default Home;
