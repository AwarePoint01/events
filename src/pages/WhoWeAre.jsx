import { Container, Typography } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Box } from "@mui/system";
import logo from '../assets/img/la-sfera-logo.png';

function WhoWeAre() {
	const { data } = useLanguage();
	return (
		<Container sx={{
			display: "flex",
			flexDirection: { xs: "column", lg: "row" },
			justifyContent: "flex-start",
			p: 5,
			alignItems: "center"
		}}>
			<Box sx={{ textAlign: "center", }}>
				<Typography variant="h1">
					{data.whoWeAre?.title}
				</Typography>
				<Typography variant="h5" sx={{ m: 5, lineHeight: 1.8, }}>
					{data.whoWeAre?.description}
				</Typography>
			</Box>
			<Box
				component="img"
				src={logo}
				alt="La Sfera Logo"
				sx={{ height: 300, ml: 5 }}
			/>
		</Container>
	);
}

export default WhoWeAre;
