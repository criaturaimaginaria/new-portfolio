import React, { useEffect, useState, useContext } from "react";
import { Parallax } from "react-parallax";
// import { styles } from '@/styles/Home.module.css';
import useWindowSize from "@/hooks/useWindowSize";
import { LanguageContext } from '../../contexts/LenguageContext';


export const AboutMe = () => {
  const windowSize = useWindowSize();

  // actual page scrollheight
  const [pageCounter, setPageCounter] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageCounter(window.pageYOffset);
    });
  }, [setPageCounter]);

  const insideStyles = {
    // background: "#fff",
    // backgroundImage: 'url(/images/disk2.png)',
    // backgroundSize: 'cover',
    // backgroundAttachment:'fixed',
    // backgroundRepeat: 'no-repeat',

    color: "#fff",
    fontSize: "4em",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // position: "fixed",
    // padding: 20,
    top: "40%",
    width: "100%",
    textAlign: "center",
    height: "200vh",
    marginLeft: "auto",
    marginRight: "auto",

    zIndex: 3,
  };







  const { language } = useContext(LanguageContext);

  // Translations based on the current language
  const translations = {
    es: {
      title: 'Acerca de mi',
      text1: 'Soy programador frontend. Empecé mi camino en 2021 y desde entonces trabajé en varios proyectos, algunos de ellos son proyectos personales, proyectos freelance o de',
      text2: 'Yoor-co,',
      text3: 'la empresa en la que trabajo desde hace un año y medio, un lugar agradable con grandes personas donde aprendí muchas cosas. Realmente disfruto aprendiendo y desarrollando cosas geniales con JS y también creo que CSS es una herramienta realmente hermosa.',
      text4: 'Hablo español, inglés y estudio italiano. También me encanta leer, editar cosas con photoshop y tocar y componer música, esa es mi otra gran pasión. Si alguien está interesado en escuchar este es mi canal de ',
    },
    en: {
      title: 'A bit about me',
      text1: 'I´m a frontend programmer. I started my journey in 2021 and since then I worked in several projects, some of them are personal projects, freelance projects or from',
      text2: 'Yoor-co,',
      text3: 'the compny I´ve been working for a year and a half, a nice place with great people, people where I learned a lot of things. I really enjoy learning and developing cool things with JS and I also think that CSS is a really beautiful tool.',
      text4: 'I speak Spanish, English and study Italian, I also love to read, edit things with photoshop and play and compose music, that´s my other big passion. If anyone is interested to give a listen here es my ',
    },
    it: {
      title: 'Su di me',
      text1: 'Sono un programmatore frontend. Ho iniziato il mio viaggio nel 2021 e da allora ho lavorato a diversi progetti, alcuni dei quali sono progetti personali, progetti freelance o da',
      text2: 'Yoor-co,',
      text3: " l'azienda in cui lavoro da un anno e mezzo, un bel posto con persone fantastiche, persone dove ho imparato molte cose. Mi piace molto imparare e sviluppare cose interessanti con JS e penso anche che i CSS siano uno strumento davvero bello.",
      text4: 'Parlo spagnolo, inglese e studio italiano. Mi piace anche leggere, modificare le cose con Photoshop e suonare e comporre musica, questa è la mia altra grande passione. Se qualcuno è interessato a dare un ascolto qui è il mio canale',
    },
  };

  return (
    <div  className="AboutMe">
      <Parallax
        // bgImage={img1}
        strength={200}
        renderLayer={(percentage) => {
          return (
            <div className="">
     
              <div
                style={{
                  // position: "fixed",
                  
        // backgroundImage: 'url(/images/disk2.png)',
        // backgroundSize: 'cover',
        // backgroundAttachment:'fixed',
        // backgroundRepeat: 'no-repeat',

                  display: "flex",
                  justifyContent:"center",
                  flexDirection: "column",
                  position: "absolute",
                  zIndex: 2,
                  // background: `rgba(225, 125, 9, ${percentage * 1})`,
                  // backgroundImage: `url(${img1})`,
                  backgroundColor: "black",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  // opacity:"50%",
                  opacity: `${Math.pow(percentage, 30)}%`,
                  left: "0%",
                  top: "0%",
                  filter: `grayscale(${100 / (percentage * 100)})`,
                  width: "100vw",
                  height: "200vh",
                  transform: `scale(${0.9 + percentage / 10})`,
                  zIndex:"-2",
                }}
              />
              <div className="AboutMe__space">
              </div>
              <div style={insideStyles}>
                <div className="aboutMe__diskBack" style={{
                        // position: 'absolute',
                        // top: 0,
                        // left: 0,
                        // width: '100%',
                        // height: '100%',
                        // backgroundImage: ` ${
                        //   windowSize.width < 640
                        //     ? `url(/images/disk2mobile.png)`
                        //     : `url(/images/disk2.png)`
                        // }`,
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat',
                        // backgroundSize: ` ${
                        //   windowSize.width < 640
                        //     ? `100% 100%`
                        //     : `cover`
                        // }`,
                        opacity: ` ${
                          windowSize.width < 640
                            ? `${0.8 - (Math.pow( percentage, 1.7) - 1)}`
                            : `${0.8 - (Math.pow( percentage, 2.2) - 1)}`
                        }`,
                        // opacity:`${0.8 - (Math.pow( percentage, 2.2) - 1)}`,
                        filter:`blur(${Math.pow( percentage, 3.35) - 1}vw)`,
                      }}></div>

                <div
                  style={{
                    color: "#fff",
                    filter: ` ${
                      windowSize.width < 640
                        ? `blur(${Math.pow( percentage, 3.5) - 3}vw)`
                        : `blur(${0.8 - (Math.pow( percentage, 3.5) - 1)}vw)`
                    }`,
                  }}
                >
                  <p id="about__me" className="about__title">{translations[language].title}</p>

                  <div className="AboutMe__textbox">
                    <div className="AboutMe__circle">
                      <img src="/images/selfie.jpg"></img>
                    </div>
                    <p> 
                      {translations[language].text1} 
                      <b>{translations[language].text2}</b> 
                      {translations[language].text3}
                    </p>
                    <p>
                      {translations[language].text4} <a href="https://www.youtube.com/@criaturaimaginaria5230/featured" target="_blank" rel="noreferrer"> YouTube :).</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      >
        <div
          // parallax scroll height
          style={
            windowSize.width < 640 ? { height: "130vh", background:"#fff" } : { height: "240vh", background:"blue" }
          }
        >

        </div>
      </Parallax>

    </div>
  );
};

export default AboutMe;
