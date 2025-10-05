import { Typography, Container } from "@mui/material";
import homeImg from "../assets/img/homepage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";

function Home() {
	const { data } = useLanguage();

	return (
		<Container sx={{ backgroundImage: `url(${homeImg})` }}>
			<Typography variant="h1" sx={{ color: "white" }}>
				{data.home?.title}
			</Typography>
		</Container>
	)
}

export default Home;
