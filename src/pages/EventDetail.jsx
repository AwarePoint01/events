import { Container, Typography, Button, Grid } from "@mui/material";
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
			<Grid container
				spacing={5}
				sx={{
					backgroundColor: "white",
					mt: "50vh",
					mb: 4,
					px: { xs: 2, md: 4 },
				}}>
				<Grid item size={{ xs: 12 }}>
					<Button variant="contained" sx={{ height: 50, mt: 3, mb: 3, backgroundColor: "text.secondary", color: "white" }} onClick={() => navigate(-1)}>
						<ArrowBackIcon sx={{ mr: 1 }} />
						Back
					</Button>
				</Grid>
				<Grid item size={{ xs: 12, md: 6 }}>
					<Grid container direction="column" spacing={3}>
						<Grid item>
							<Typography variant="h1" pb={3}>
								{event.title}
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="h5" >
								{event.description}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item size={{ xs: 12, md: 6 }}>
					<Grid container direction="column" spacing={3}
						sx={{
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Grid item sx={{
							mb: 5,
						}}>
							<Typography variant="h3">
								{data.events?.subtitle}
							</Typography>
						</Grid>
						{event.info.map((info, index) => (
							<div key={index}>
								<Grid item >
									<Typography variant="h5">{info.date}</Typography>
								</Grid>
								{
									info.location && (
										<Grid item sx={{ mb: 5, }}>
											<Divider>
												<Typography
													variant="h6"
													sx={{
														overflow: "hidden",
														cursor: "pointer",
														transition: "transform 0.3s ease",
														"&:hover": { transform: "scale(1.2)" },

													}}
													onClick={() => window.open(info.urlmap, "_blank")}
												>
													{info.location}
												</Typography>
											</Divider>
										</Grid>
									)
								}
							</div>
						))}
					</Grid>
				</Grid >
			</Grid >
		</>
	);
}

export default EventDetail;
