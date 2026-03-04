import { Container, Typography } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import contactImg from '../assets/img/contactpage.jpg';
import { Box } from '@mui/system';

function Contact() {
	const { data } = useLanguage();
	return (
		<Container sx={{
			display: "flex",
			flexDirection: { xs: "column", md: "row" },

			gap: 4,
		}}>
			<Container>
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

			</Container>
			<Container sx={{ backgroundImage: `url(${contactImg})` }} />
		</Container>
	);
}

export default Contact;
