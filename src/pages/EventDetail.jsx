import { Container, Typography, Button } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";
import Divider from '@mui/material/Divider';
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function EventDetail() {
	const { route } = useParams();
	const navigate = useNavigate();
	const { data } = useLanguage();

	const event = data.events?.details.find((event) => event.route === route);
	if (!event) return <Typography>Event not found</Typography>;


	return (
		<>

			<Container sx={{
				backgroundImage: `url(${event.image})`,
				height: "50vh",
				backgroundSize: "cover",
				backgroundPosition: "center",
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				zIndex: -1
			}} />
			<Container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", backgroundColor: "white", mt: '50vh', mb: 4 }}>
				<Container sx={{ p: 4, justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column", ml: 2 }}>
					<Button variant="contained" sx={{ height: 50, mb: 3, backgroundColor: "text.secondary", color: "white" }} onClick={() => navigate(-1)}>
						<ArrowBackIcon sx={{ mr: 1 }} />
						Back
					</Button>
					<Typography variant="h1" pb={3}>
						{event.title}
					</Typography>
					<Typography variant="h5" >
						{event.description}
					</Typography>
				</Container>
				<Container sx={{ p: 4, justifyContent: "center", flexDirection: "column" }}>
					{event.info.map((info, index) => (
						<>
							<Typography variant="h5" key={index}>
								{info.date}
							</Typography>
							{info.location && (
								<Divider sx={{ width: "80%", p: 2, pb: 6 }} >
									<Typography sx={{
										p: 1,
										cursor: "pointer",
										transition: "transform 0.30s ease, box-shadow 0.30s ease",
										"&:hover": {
											transform: "scale(1.2)",

										}
									}}
										variant="h6"
										key={`location-${index}`}
										onClick={() => window.open(info.urlmap, "_blank")}
									>
										{info.location}
									</Typography>
								</Divider>
							)}
						</>
					))}
				</Container >

			</Container >
		</>
	);
}

export default EventDetail;
