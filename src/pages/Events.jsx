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
			<Typography variant="h1" sx={{ paddingTop: 10 }} >
				{data.events?.title}
			</Typography>

			<Container sx={{
				display: "flex",
				flexWrap: "wrap",
				flexDirection: { xs: "column", md: "row" },
			}}>
				{data.events?.details.map((event, index) => (

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
						}}>
						<CardHeader
							title={event.title}
						/>
						<CardMedia image={event?.image} />
						<CardContent>
							<Typography variant="h6" >
								{event.subtitle}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Container>
		</Container >
	);
}
export default Events;