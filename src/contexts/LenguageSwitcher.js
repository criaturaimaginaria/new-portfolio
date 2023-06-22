// LanguageSwitcher.js
import React, { useContext } from 'react';
import { LanguageContext } from './LenguageContext';

function LanguageSwitcher() {
  const { language, handleLanguageChange } = useContext(LanguageContext);

  const handleSwitchLanguage = (newLanguage) => {
    handleLanguageChange(newLanguage);
  };

  return (
    <div className='languajeContainer'>
      <button className={language == 'es' ? 'languageTrue' : 'languageFalse'} onClick={() => handleSwitchLanguage('es')}>
        Español
      </button>
      <button className={language == 'en' ? 'languageTrue' : 'languageFalse'} onClick={() => handleSwitchLanguage('en')}>
        English
      </button>
      <button className={language == 'it' ? 'languageTrue' : 'languageFalse'} onClick={() => handleSwitchLanguage('it')}>
        Italiano
     </button>
    </div>
  );
}

export default LanguageSwitcher
