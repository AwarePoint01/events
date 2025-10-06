
export default {
	settings: {
		languages: {
			label: "Language",
			options: [
				{ value: "gb", name: "English" },
				{ value: "it", name: "Italiano" },
				{ value: "de", name: "Deutsch" },
			],
		},
	},
	gb: {
		appBar: {
			tab: [
				{ label: "Home", link: "/" },
				{ label: "Who We Are", link: "/" },
				{ label: "Events", link: "/" },
				{ label: "Contact", link: "/" },
			],
			language: {
				label: "Select Language",
			},
		},

		home: {
			title: "I am this, this is me",
		},
		whoWeAre: {
			title: "Who we are",
			description: "We are a team of professionals dedicated to providing the best solutions for our clients.",
		},
		events: {
			title: "Events",
			description: "Check out our upcoming events.",
			details: [
				{
					title: "Meditation",
					date: "05 Sep. 2025",
					image: "img/today.jpg",
					description: "Daily morning meditation to promote mindfulness and inner peace.",
					learnMore: "Learn More",
				},
				{
					title: "Meditation",
					date: "09 Sep. 2025",
					image: "img/meditation.jpg",
					description: "Daily morning meditation to promote mindfulness and inner peace.",
					learnMore: "Learn More",
				},
			]
		},
		contact: {
			title: "Contact",
			description: "Get in touch with us.",
			email: "Email: contact@example.com",
		},
	},

	it: {
		appBar: {
			tab: [
				{ label: "Home", link: "/" },
				{ label: "Chi Siamo", link: "/" },
				{ label: "Eventi", link: "/" },
				{ label: "Contatti", link: "/" },
			],
			language: {
				label: "Seleziona lingua",
			},
		},
		home: {
			title: "Io sono questo, questo sono io",
		},
		whoWeAre: {
			title: "Chi siamo",
			description: "Siamo un team di professionisti dedicati a fornire le migliori soluzioni per i nostri clienti.",
		},
		events: {
			title: "Eventi",
			description: "Scopri i nostri eventi in programma.",
			details: [
				{
					title: "Meditazione",
					date: "05 Set. 2025",
					image: "img/today.jpg",
					description: "Meditazione quotidiana per promuovere la consapevolezza e la pace interiore.",
					learnMore: "Scopri di più",
				},
				{
					title: "Meditazione",
					date: "09 Set. 2025",
					image: "img/meditation.jpg",
					description: "Meditazione quotidiana per promuovere la consapevolezza e la pace interiore.",
					learnMore: "Scopri di più",
				},
				{
					title: "Lettura",
					date: "12 Set. 2025",
					image: "img/reading.jpg",
					description: "Lettura di gruppo per esplorare nuovi libri e condividere idee.",
					learnMore: "Scopri di più",
				},
			],
		},
		contact: {
			title: "Contatti",
			description: "Mettiti in contatto con noi.",
			email: "Email: contatti@esempio.com",
		},
	},
	de: {
		appBar: {
			tab: [
				{ label: "Home", link: "/" },
				{ label: "Who We Are", link: "/" },
				{ label: "Events", link: "/" },
				{ label: "Contact", link: "/" },
			],
			language: {
				label: "Sprache auswählen",
			},

		},
		home: {
			title: "Ich bin das, das bin ich",
		},
		whoWeAre: {
			title: "Wer wir sind",
			description: "Wir sind ein Team von Fachleuten, das sich der Bereitstellung der besten Lösungen für unsere Kunden widmet.",
		},
		events: {
			title: "Veranstaltungen",
			description: "Schauen Sie sich unsere bevorstehenden Veranstaltungen an.",
			details: [
				{
					title: "Meditation",
					image: "img/today.jpg",
					date: "05 Sep. 2025",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					learnMore: "Erfahren Sie mehr",
				},
				{
					title: "Meditation",
					image: "img/meditation.jpg",
					date: "09 Sep. 2025",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					learnMore: "Erfahren Sie mehr",
				},
			],
		},
		contact: {
			title: "Kontakte",
			description: "Nehmen Sie Kontakt mit uns auf.",
			email: "Email: kontakte@beispiel.com",
		},
	},
};