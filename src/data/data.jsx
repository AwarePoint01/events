import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa';
import EventIcon from '@mui/icons-material/Event';
import PhoneIcon from '@mui/icons-material/Phone';

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
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Who We Are", id: "who-we-are", icon: <SpaIcon /> },
				{ label: "Events", id: "events", icon: <EventIcon /> },
				{ label: "Contact", id: "contact", icon: <PhoneIcon /> },
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
					title: "Healing energy",
					subtitle: "Daily morning meditation to promote mindfulness and inner peace.",
					route: "healing-energy",
					info: [
						{
							date: "05 Sep. 2025",
							location: "Stuttgart, Germany",
							urlmap: "https://www.google.com/maps/place/Stuttgart,+Germany/@48.7758459,9.1829321,12z/data=!3m1!4b1!4m5!3m4!1s0x4799fbbfbbd8e7c7:0x422d6cdbf2a0e0b8!8m2!3d48.7758459!4d9.1829321",
						},
						{
							date: "06 Sep. 2025",
							location: "Milan, Italy",
							urlmap: "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4642035,9.189982,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c6e0d308f8e7:0x2a9cfcf8b1a0e0b8!8m2!3d45.4642035!4d9.189982",
						},
					],
					image: "img/healingEnergy.jpg",
					description: "Daily morning meditation to promote mindfulness and inner peace.",
				},
				{
					title: "Meditation",
					subtitle: "Daily morning meditation to promote mindfulness and inner peace.",
					route: "meditation",
					info: [
						{
							date: "05 Sep. 2025",
							location: "Stuttgart, Germany",
							urlmap: "https://www.google.com/maps/place/Stuttgart,+Germany/@48.7758459,9.1829321,12z/data=!3m1!4b1!4m5!3m4!1s0x4799fbbfbbd8e7c7:0x422d6cdbf2a0e0b8!8m2!3d48.7758459!4d9.1829321",

						},
						{
							date: "06 Sep. 2025",
							location: "Milan, Italy",
							urlmap: "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4642035,9.189982,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c6e0d308f8e7:0x2a9cfcf8b1a0e0b8!8m2!3d45.4642035!4d9.189982",

						},
					],
					image: "img/meditation.jpg",
					description: "Daily morning meditation to promote mindfulness and inner peace.",
				},
				{
					title: "Reading",
					subtitle: "Group reading to explore new books and share ideas.",
					route: "reading",
					info: [
						{
							date: "No events currently scheduled",
							location: null,
							urlmap: null,
						},
					],
					image: "img/reading.jpg",
					description: "Group reading to explore new books and share ideas.",
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
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Chi Siamo", id: "who-we-are", icon: <SpaIcon /> },
				{ label: "Eventi", id: "events", icon: <EventIcon /> },
				{ label: "Contatti", id: "contact", icon: <PhoneIcon /> },
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
			description: "Siamo un’azienda leader nell’ambito dell’educazione, della formazione e dell’istruzione, i 3 Pilastri sui quali si regge la crescita umana. Mettiamo al centro di ogni nostro programma la consapevolezza di sé per aiutare studenti, insegnanti, educatori, genitori, professionisti, imprenditori, dipendenti aziendali e tutte quelle persone che desiderano sviluppare competenze e conoscenze negli 8 campi della vita: Salute-Spirito, Lavoro-Finanze, Amicizia-Collettività, Affetti-Famiglia.",
		},
		events: {
			title: "Eventi",
			description: "Scopri i nostri eventi in programma.",
			details: [
				{
					title: "Energia risanante",
					subtitle: "Un percorso straordinario che ti condurrà verso un profondo equilibrio energetico e una trasformazione interiore che ti permetterà di acquisire le tecniche per riequilibrare te stesso e gli altri, favorendo un autentico stato di benessere.",
					route: "healing-energy",
					info: [
						{
							date: "05 Sep. 2025",
							location: "Stuttgart, Germany",
							urlmap: "https://www.google.com/maps/place/Stuttgart,+Germany/@48.7758459,9.1829321,12z/data=!3m1!4b1!4m5!3m4!1s0x4799fbbfbbd8e7c7:0x422d6cdbf2a0e0b8!8m2!3d48.7758459!4d9.1829321",
						},
						{
							date: "06 Sep. 2025",
							location: "Milan, Italy",
							urlmap: "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4642035,9.189982,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c6e0d308f8e7:0x2a9cfcf8b1a0e0b8!8m2!3d45.4642035!4d9.189982",
						},
					],
					image: "img/healingEnergy.jpg",
					description: "Energia a piene mani è un approccio unico e naturale per ristabilire equilibrio e armonia, sia dentro di noi che nelle relazioni con gli altri. Questo metodo si fonda su un principio fondamentale: La Salute è l’espressione naturale di un equilibrio profondo tra corpo, mente e spirito. Raggiungere questo stato significa imparare ad amarci autenticamente e a rispettare il nostro naturale flusso energetico. Solo così è possibile promuovere la guarigione e ritrovare una connessione profonda con noi stessi. Un viaggio trasformativo che ti guiderà a risvegliare l’energia vitale già presente in te. Attraverso il metodo, scoprirai come applicare questa energia per il tuo benessere personale e per quello degli altri, sia in sessioni individuali che di gruppo.",
				},
				{
					title: "Meditazione",
					subtitle: "Fermati ora con me e pensa per un momento che il respiro è proprio ciò che ti consente di vivere.",
					route: "meditation",
					info: [
						{
							date: "Non ci sono eventi in programma al momento",
							location: null,
							urlmap: null,
						},
					],
					image: "img/meditation.jpg",
					description: "La meditazione è il ponte che ti permette di entrare in quella dimensione della tua esistenza in cui mente e cuore dialogano, dove tu preesisti alle tue memorie, alle tue illusioni, alle tue paure, alle tue angosce e questo è il luogo della possibilità.<br/><br/>Le emozioni più profonde di questo luogo interiore non urlano, non condannano, non accusano, non recriminano mai, anzi, si manifestano come pace, gioia, armonia e una felicità intensa che sorge spontanea e naturale dal tuo cuore e ti pervade tutto, illuminando il tuo pensiero e rendendolo più creativo, focalizzato e operativo.<br/><br/>La meditazione della consapevolezza è, dunque, uno strumento per entrare in contatto con questo mondo della possibilità. È proprio questo passo in dentro che ti permette di essere autentico fuori e quando sei autentico fuori, cioè sei fuori come sei dentro, diventi magnetico, empatico, attento e disponibile.",
				},
				{
					title: "Lettura",
					subtitle: "Lettura di gruppo per esplorare nuovi libri e condividere idee.",
					route: "reading",
					info: [
						{
							date: "Non ci sono eventi in programma al momento",
							location: null,
							urlmap: null,
						},
					],
					image: "img/reading.jpg",
					description: "Lettura di gruppo per esplorare nuovi libri e condividere idee.",
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
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Wer wir sind", id: "who-we-are", icon: <SpaIcon /> },
				{ label: "Veranstaltungen", id: "events", icon: <EventIcon /> },
				{ label: "Kontakt", id: "contact", icon: <PhoneIcon /> },
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
					title: "Heilungsenergie",
					subtitle: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					route: "healing-energy",
					info: [
						{
							date: "05 Sep. 2025",
							location: "Stuttgart, Germany",
							urlmap: "https://www.google.com/maps/place/Stuttgart,+Germany/@48.7758459,9.1829321,12z/data=!3m1!4b1!4m5!3m4!1s0x4799fbbfbbd8e7c7:0x422d6cdbf2a0e0b8!8m2!3d48.7758459!4d9.1829321",
						},
						{
							date: "06 Sep. 2025",
							location: "Milan, Italy",
							urlmap: "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4642035,9.189982,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c6e0d308f8e7:0x2a9cfcf8b1a0e0b8!8m2!3d45.4642035!4d9.189982",
						},
					],
					image: "img/healingEnergy.jpg",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
				},
				{
					title: "Meditation",
					subtitle: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					route: "meditation",
					info: [
						{
							date: "Es sind derzeit keine Veranstaltungen geplant",
							location: null,
							urlmap: null,
						},
					],
					image: "img/meditation.jpg",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
				},
				{
					title: "Vorlesung",
					subtitle: "Vorlesungsgruppe, um neue Bücher zu erkunden und Ideen auszutauschen.",
					route: "reading",
					info: [
						{
							date: "Es sind derzeit keine Veranstaltungen geplant",
							location: null,
							urlmap: null,
						},
					],
					image: "img/reading.jpg",
					description: "Vorlesungsgruppe, um neue Bücher zu erkunden und Ideen auszutauschen.",
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