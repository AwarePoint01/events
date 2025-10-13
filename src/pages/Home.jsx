import { Typography, Container } from "@mui/material";
import homeImg from "../assets/img/homepage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";

function Home() {
	const { data } = useLanguage();

	return (
		<Container sx={{ backgroundImage: `url(${homeImg})` }}>
			<Typography variant="h1" sx={{ color: "white", borderRadius: "1%", padding: "0.1em 0.5em", margin: 0, backdropFilter: "blur(10px)", overflow: "hidden", }}>
				{data.home?.title}
			</Typography>
		</Container>
	)
}

export default Home;
