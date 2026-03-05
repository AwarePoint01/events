import { Typography, Button, Grid } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";
import Divider from '@mui/material/Divider';
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from "@mui/system";

function EventDetail() {
	const { route } = useParams();
	const navigate = useNavigate();
	const { data } = useLanguage();

	const event = data.events?.details.find((event) => event.route === route);
	if (!event) return <Typography>Event not found</Typography>;

	return (
		<>
			<Box sx={{
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
				<Grid size={{ xs: 12 }}>
					<Button variant="contained" sx={{ height: 50, mt: 3, mb: 3, backgroundColor: "text.secondary", color: "white" }} onClick={() => navigate(-1)}>
						<ArrowBackIcon sx={{ mr: 1 }} />
						Back
					</Button>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<Grid container direction="column" spacing={3}>
						<Grid >
							<Typography variant="h2" pb={3}>
								{event.title}
							</Typography>
						</Grid>
						<Grid >
							<Typography variant="h5" >
								{event.description}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }} direction="column" spacing={5}					>

					<Grid sx={{ mb: 5, }}>
						<Typography variant="h3" sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							mb: 2,
						}}>
							{data.events?.subtitle}
						</Typography>
					</Grid>
					{event.info.map((info, index) => (
						<div key={index}>
							<Grid sx={{
								display: "flex",
								mb: 2,
							}}>
								<Typography variant="h5">{info.date}</Typography>
							</Grid>
							{
								info.location && (
									<Grid sx={{ mb: 5, }}>
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
		</>
	);
}

export default EventDetail;
