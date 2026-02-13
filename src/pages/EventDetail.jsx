import { Container, Typography, Button } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";
import Divider from '@mui/material/Divider';

function EventDetail({ event, onBack }) {
	if (!event) return null;
	const { data } = useLanguage();

	return (
		<>

			<Container sx={{ backgroundImage: `url(${event.image})`, height: "50vh" }} />
			<Button variant="contained" sx={{ height: 50, mt: 2, ml: 2, backgroundColor: "text.secondary", color: "white" }} onClick={onBack}>
				← Back
			</Button>
			<Container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", }}>
				<Container sx={{ p: 4, justifyContent: "flex-start", }}>
					<Typography variant="h1">
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
