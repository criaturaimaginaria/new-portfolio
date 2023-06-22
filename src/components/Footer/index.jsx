import React, { useEffect, useState, useContext } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import {  ContactForm } from "@/components";
import { LanguageContext } from '../../contexts/LenguageContext';

export const Footer = () => {
  const windowSize = useWindowSize();

  const github = "/images/network/github.svg";
  const linkedin = "/images/network/linkedin.png";
  const youtube = "/images/network/youtube.png";

  


  const { language } = useContext(LanguageContext);

  // Translations based on the current language
  const translations = {
    es: {
      title: 'Contáctame',
      text: 'Utilice el siguiente formulario o envíe un correo a:',
    },
    en: {
      title: 'Contact me',
      text: 'Use the form below or send an email to:',
    },
    it: {
      title: 'Contattami',
      text: 'Utilizza il modulo sottostante o invia una mail a:',
    },
  };


  return (
    <div className="footer">
      <img src="/images/whiteWave.svg"></img>
      <div className="background-image" />
      <div className="footer__contactForm__container">
        <div className="footer__contactF__texts">
          <h1>{translations[language].title} </h1>
          <p>{translations[language].text} </p>
          <p>valkjavalkja@gmail.com</p>
        </div>
        <div className="footer__contactF__networks">
           <div className="footer__networks" alt="github">
              <a href="https://github.com/criaturaimaginaria" target="_blank" rel="noopener noreferrer">
                <img src={github}></img>
              </a>
           </div>
           <div className="footer__networks" alt="linkedin">
              <a href="https://www.linkedin.com/in/valent%C3%ADn-berardi-890827119/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin}></img>
              </a>
           </div>
           <div className="footer__networks" alt="youtube">
              <a href="https://www.youtube.com/channel/UCSJQMZALjc4pqR5FTnsn8TA" target="_blank" rel="noopener noreferrer">
                <img src={youtube}></img>
              </a>
           </div>
        </div>

      </div>
    <ContactForm />
    </div>
  );
};

export default Footer;
