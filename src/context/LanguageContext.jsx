import { createContext, useState, useContext } from "react";
import jsonData from "../data/data.jsx";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
	const getInitialLanguage = () => localStorage.getItem("language") || "it";
	const [language, setLanguage] = useState(getInitialLanguage);

	const switchLanguage = (lang) => {
		setLanguage(lang);
		localStorage.setItem("language", lang);
	};

	const data = jsonData[language] || jsonData["it"];
	const settings = jsonData.settings || {};

	return (
		<LanguageContext.Provider value={{ language, switchLanguage, data, settings }} key={language}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageProvider;
