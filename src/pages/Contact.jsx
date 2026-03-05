import { Typography } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import contactImg from '../assets/img/contactpage.jpg';
import { Box, Grid } from '@mui/system';

function Contact() {
	const { data } = useLanguage();
	return (
		<Grid container
			sx={{
				minHeight: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "stretch",
				backgroundColor: "background.default",

			}}>
			<Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center", }}>
				<Box
					component="img"
					src={contactImg}
					alt="Contact Image"
					sx={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</Grid>
			<Grid size={{ xs: 12, md: 6 }}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					mt: 15,
					height: "100%",
				}}>
				<Typography variant="h1">
					{data.contact?.title}
				</Typography>
				<Typography variant="h5" >
					{data.contact?.description}
				</Typography>
				<Typography variant="h5" >
					{data.contact?.email}
				</Typography>
				<Box sx={{ mt: 5 }}>
					{data.contact?.socials?.map((social, index) => (
						social.url && (
							<a
								key={index}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								style={{ marginRight: "8px" }}
							>
								{social.icon}
							</a>
						)
					))}
				</Box>
			</Grid>
		</Grid>
	);
}

export default Contact;
