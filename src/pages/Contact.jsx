import { Container, Typography } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import contactImg from '../assets/img/contactpage.jpg';

function Contact() {
	const { data } = useLanguage();
	return (
		<Container sx={{ flexDirection: "row", }}>
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
			</Container>
			<Container sx={{ backgroundImage: `url(${contactImg})` }} />
		</Container>
	);
}

export default Contact;
