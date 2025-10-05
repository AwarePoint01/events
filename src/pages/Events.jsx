import * as React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import eventImg from "../assets/img/eventspage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";

const images = import.meta.glob("../assets/img/*", { eager: true });

function Events() {
	const { data } = useLanguage();
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
			<Typography variant="h1" >
				{data.events?.title}
			</Typography>
			<Typography variant="h5" >
				{data.events?.description}
			</Typography>

			<Container sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
			}}>
				{data.events?.details.map((event, index) => (

					<Card key={index}>
						<CardHeader
							title={event.title}
							subheader={event.date}
						/>
						<CardMedia image={event?.image} />
						<CardContent>
							<Typography variant="h5" component="div">
								{event.title}
							</Typography>
							<Typography variant="body2" >
								{event.description}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">{event.learnMore}</Button>
						</CardActions>
					</Card>
				))}
			</Container>
		</Container >
	);
}
export default Events;