import { useState, useContext } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../../contexts/LenguageSwitcher';
import { LanguageContext } from '../../contexts/LenguageContext';

export const Header = () => {
  const palmer = "/images/PALMERA.png";

  const [activeNav, setActiveNav] = useState(false);
  const router = useRouter()
  const { pathname } = router
  
  const toggleNav = () => {
    setActiveNav(!activeNav);
    const bodyStyle = document.body.style;
    const servicesScrollLock = () => {
      !activeNav ?
        (bodyStyle.overflowY = "hidden") : (bodyStyle.overflowY = "auto");
    };
    servicesScrollLock();
  };



  const { language } = useContext(LanguageContext);

  // Translations based on the current language
  const translations = {
    es: {
      Content: 'Contenidos',
      about: 'Sobre mi',
      Portfolio: 'Portfolio',
      contact: 'Contacto',
    },
    en: {
      Content: 'Contents',
      about: 'About me',
      Portfolio: 'Portfolio',
      contact: 'Contact',
    },
    it: {
      Content: 'Contenuto',
      about: 'Su di me',
      Portfolio: 'Portfolio',
      contact: 'Contatti',
    },
  };



  return (
    <div id="Header">
      <div className="Header__box1">
        <Link href={'/'}>
          <div className="Header__logo">
            {/* <Image alt="Logo" fill={true} src={Logo} /> */}
            <LanguageSwitcher />
          </div>
        </Link>
      </div>
      <div className="Header__box2">
        <ul>
          <li className="mobileMenu__firsts">{translations[language].Content} |</li>
          <li><a href="#about__me">{translations[language].about}</a></li>
          <li><a href="#stack_cards">{translations[language].Portfolio}</a></li>
          <li><a href="#contactForm">{translations[language].contact}</a></li>
        </ul>
        <div onClick={toggleNav} className={`${activeNav ? 'Header__chevron-active' : 'Header__chevron'}`}>
          <div className={`${activeNav ? 'chevron1-active' : 'chevron1'}`}></div>
          <div className={`${activeNav ? 'chevron2-active' : 'chevron2'}`}></div>
          <div className={`${activeNav ? 'chevron3-active' : 'chevron3'}`}></div>
        </div>
      </div>
      <div className={`${activeNav ? 'mobileMenu-active' : 'mobileMenu'}`}>
        <ul>
          <li className="mobileMenu__firsts">{translations[language].Content}</li>
          <li className="mobileMenu__firsts">─</li>
          <li onClick={toggleNav}><a href="#about__me">{translations[language].about}</a></li>
          <li onClick={toggleNav}><a href="#stack_cards">{translations[language].Portfolio}</a></li>
          <li onClick={toggleNav}><a href="#contactForm">{translations[language].contact}</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
