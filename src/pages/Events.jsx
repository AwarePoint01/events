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
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function Events() {
	const { data } = useLanguage();
	const [open, setOpen] = React.useState(false);
	const [detail, setDetail] = React.useState(null);

	const handleClickOpen = (index) => {
		setOpen(true);
		setDetail(data.events?.details[index]);
	};

	const handleClose = () => {
		setOpen(false);
		setDetail(null);
	};
	return (
		<>
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
								<Button size="small" onClick={() => handleClickOpen(index)}>{event.learnMore}</Button>
							</CardActions>
						</Card>
					))}
				</Container>
			</Container >

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{detail?.title}
				</DialogTitle>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers>
					<CardMedia image={detail?.image} />
					<DialogContentText id="alert-dialog-description">
						{detail?.description}
					</DialogContentText>
				</DialogContent>
			</Dialog >

		</>
	);
}
export default Events;