import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Menu, MenuItem, Button } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useState } from "react";

function CustomBar() {
	const { language, switchLanguage, settings, data } = useLanguage();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => { setAnchorEl(event.currentTarget); };
	const handleClose = (lang) => { if (lang) switchLanguage(lang); setAnchorEl(null); };

	return (

		<AppBar position="fixed">
			<Toolbar disableGutters>
				<Box >
					{data.appBar.tab.map((tab) => (
						<Button key={tab.label}>
							<Typography sx={{ fontWeight: 600, letterSpacing: "0.1em" }}>{tab.label}</Typography>
						</Button>
					))}
				</Box>
				<Box >
					<Button onClick={handleClick}  >
						<Typography sx={{ fontWeight: 600, letterSpacing: "0.1em" }}>{data.appBar.language?.label}</Typography>
					</Button>
				</Box>
				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={() => handleClose(null)}
					anchorOrigin={{ vertical: "bottom", horizontal: "right", }}
					transformOrigin={{ vertical: "top", horizontal: "right", }} >
					{settings.languages.options.map((lang) => (
						<MenuItem
							key={lang.value}
							onClick={() => handleClose(lang.value)}
							selected={lang.value === language} >
							{lang.name}
						</MenuItem>
					))}
				</Menu>
			</Toolbar>
		</AppBar >

	)
}

export default CustomBar
