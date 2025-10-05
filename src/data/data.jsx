
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
		language: {
			label: "Select Language",
		},
		home: {
			title: "Here I am, I am this, this is me",
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
					description: "Daily morning meditation to promote mindfulness and inner peace.",
					learnMore: "Learn More",
				},
				{
					title: "Meditation",
					date: "09 Sep. 2025",
					description: "Daily morning meditation to promote mindfulness and inner peace.",
					learnMore: "Learn More",
				},
			]
		}
	},

	it: {
		language: {
			label: "Seleziona lingua",
		},
		home: {
			title: "Ecco io sono, io sono questo, questo sono io",
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
					image: "today.jpg",
					description: "Meditazione quotidiana per promuovere la consapevolezza e la pace interiore.",
					learnMore: "Scopri di più",
				},
				{
					title: "Meditazione",
					date: "09 Set. 2025",
					image: "today.jpg",
					description: "Meditazione quotidiana per promuovere la consapevolezza e la pace interiore.",
					learnMore: "Scopri di più",
				},
			],
		}

	},
	de: {
		language: {
			label: "Sprache auswählen",
		},
		home: {
			title: "Hier bin ich, ich bin das, das bin ich",
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
					image: "today.jpg",
					date: "05 Sep. 2025",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					learnMore: "Erfahren Sie mehr",
				},
				{
					title: "Meditation",
					image: "today.jpg",
					date: "09 Sep. 2025",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					learnMore: "Erfahren Sie mehr",
				},
			],
		},
	},
};