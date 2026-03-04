import * as React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import eventImg from "../assets/img/eventspage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';

function Events() {
	const { data } = useLanguage();
	const navigate = useNavigate();

	const handleClickOpen = (route) => {
		navigate(`/events/${route}`);
	};


	return (
		<Container >
			<Container
				sx={{
					position: "absolute",
					backgroundImage: `url(${eventImg})`,
					filter: "opacity(50%) sepia(20%) contrast(60%)",
					zIndex: -1,

				}}
			/>
			<Typography variant="h1" sx={{ paddingTop: 20 }} >
				{data.events?.title}
			</Typography>

			<Grid container spacing={{ lg: 10 }} sx={{ margin: 5 }} justifyContent="center">
				{data.events?.details.map((event, index) => (
					<Grid item size={{ xs: 12, md: 4, lg: 3 }} key={index}>
						<Card
							key={index}
							onClick={() => handleClickOpen(event.route)}
							sx={{
								transition: "transform 0.30s ease, box-shadow 0.30s ease",
								"&:hover": {
									transform: "scale(1.1)",
									boxShadow: 12,
								},
								cursor: "pointer",
								overflow: "hidden",
								display: "flex",
								flexDirection: "column",
								width: { xs: "100%", sm: "90%", md: "100%" },
							}}>
							<CardHeader
								title={event.title}
							/>
							<CardMedia image={event?.image} />
							<CardContent>
								<Typography variant="body1" >
									{event.subtitle}
								</Typography>
							</CardContent>
							<CardContent sx={{ mt: "auto", textAlign: "center" }}>
								<Typography variant="body1" sx={{ fontWeight: 600 }}>
									{event.next}{event.info[0].date}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container >
	);
}
export default Events;