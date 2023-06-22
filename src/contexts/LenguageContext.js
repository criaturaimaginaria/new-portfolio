// contexts/LanguageContext.js
import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
import {  Header } from "../components/Header";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const router = useRouter();
  const actualRoute = router.pathname;

  const [language, setLanguage] = useState('en'); // Set your default language here

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {actualRoute == "/ThankYou" ? <></> : <Header />}
      {children}
    </LanguageContext.Provider>
  );
};
