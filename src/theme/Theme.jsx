import { createTheme, responsiveFontSizes } from '@mui/material';


const baseTheme = createTheme({
	typography: {
		fontFamily: "'Poiret One', cursive",
		h1: {
			fontSize: "5rem",
			fontWeight: 600,
			letterSpacing: "0.05em",
			marginBottom: "1rem",
		},
		h4: {
			fontWeight: 600,
		},
		body: {
			fontSize: "1.2rem",
			letterSpacing: "0.02em",
		},

	},
	customShadows: {
		textLight: "2px 2px 4px rgba(0, 0, 0, 0.5)",
		textStrong: "4px 4px 6px rgba(0, 0, 0, 0.7)",
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: "1.2rem",
					color: "black",
					textTransform: "none",
					height: "100%"
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(64, 44, 44, 0.2)', // semitrasparente
					backdropFilter: 'blur(10px)', // sfocatura
					WebkitBackdropFilter: 'blur(10px)', // per Safari
					zIndex: (theme) => theme.zIndex.drawer + 1,

				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					display: "flex",
					justifyContent: "center",
					flexDirection: "row",

				},
			},
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: false,
				disableGutters: true
			},
			styleOverrides: {
				root: {
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					p: 3,
					margin: 0,

				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: ({ theme }) => ({
					boxShadow: theme.shadows[10],
					maxWidth: 345,
					borderRadius: 15,
					margin: 20,
				}),

			},
		},
		MuiCardMedia: {
			styleOverrides: {
				root: {
					height: 140,
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: 15,
					padding: 20,
					minWidth: 800,
					minHeight: 600,
				},
			},
		},
	},
});


const lightTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'light',
	},
	primary: {
		main: "#384037",
	},
	secondary: {
		main: "#9c27b0",
	},
	background: {
		default: "#fafafa",
	},

});

const darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'dark',
	},
	primary: {
		main: "#042343ff",
	},
	secondary: {
		main: "#896e8eff",
	},
	background: {
		default: "#0b0000ff",
	},
});


export const themes = {
	light: responsiveFontSizes(lightTheme),
	dark: responsiveFontSizes(darkTheme),
};
