import React, { useContext } from "react";
import { LanguageContext } from '../../contexts/LenguageContext';
import Link from 'next/link';

export const ThankYou = () => {

  const { language } = useContext(LanguageContext);

  // Translations based on the current language
  const translations = {
    es: {
      title: 'Gracias!',
      text: 'por contactarme. Responderé a la brevedad una vez veo el mensaje.',
      back:"Pagina principal"
    },
    en: {
      title: 'Thank you!',
      text: 'for contacting me. I will reply as soon as I see the message.',
      back:"Homepage"
    },
    it: {
      title: 'Grazie!',
      text: 'per avermi contattato. Risponderò non appena vedrò il messaggio.',
      back:"pagina iniziale"
    },
  };


  return (
    <div className="ThankYou">
        <div className="thankYou__top"></div>
        <div className="thankYou__bottom"></div>
        <div className="thankYou__left"></div>
        <div className="thankYou__right"></div>
        <div className="thankYou__img">
            <img src="/images/thankYou.png"></img>
        </div>
        <h1>{translations[language].title} </h1>
        <p>{translations[language].text} </p>   
        <div className="thankyou__button"> 
            <button>
                <Link href="/">
                    {translations[language].back}
                </Link>
             </button>
        </div>
       

    </div>
  );
};

export default ThankYou;
