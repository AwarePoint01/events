import { AppBar, Toolbar, Typography } from "@mui/material";
import { FormControl, Box, Select, MenuItem } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";

function CustomBar() {
	const { language, switchLanguage, settings, data } = useLanguage();


	return (

		<AppBar position="static">
			<Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
				<FormControl>
					<Box>
						<Typography>{data.language?.label}</Typography>
					</Box>

					<Select
						value={language}
						onChange={(e) => switchLanguage(e.target.value)}
					>

						{settings.languages.options.map((lang) => (
							<MenuItem key={lang.value} value={lang.value}>
								{lang.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Toolbar>
		</AppBar>

	)
}

export default CustomBar
