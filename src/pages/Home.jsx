import { Typography, Container } from "@mui/material";
import homeImg from "../assets/img/homepage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "@mui/material/styles";

function Home() {
	const { data } = useLanguage();
	const theme = useTheme();


	return (
		<Container sx={{ backgroundImage: `url(${homeImg})` }}>
			<Typography variant="subtitle1"
				sx={{
					color: "white",
					overflow: "hidden",
					textShadow: theme.customShadows.textStrong,
				}}>
				{data.home?.title}
			</Typography>
		</Container>
	)
}

export default Home;
