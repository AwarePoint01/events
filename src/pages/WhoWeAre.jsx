import { Container, Typography } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";

function WhoWeAre() {
	const { data } = useLanguage();
	return (
		<Container>
			<Typography variant="h1">
				{data.whoWeAre?.title}
			</Typography>
			<Typography variant="h5" sx={{ m: 5 }}>
				{data.whoWeAre?.description}
			</Typography>
		</Container>
	);
}

export default WhoWeAre;
