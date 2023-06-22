import React, { useEffect, useState, useContext } from "react";
import { Parallax } from "react-parallax";
// import { styles } from '@/styles/Home.module.css';
import useWindowSize from "@/hooks/useWindowSize";
import { LanguageContext } from '../../contexts/LenguageContext';

export const Home = () => {
  const windowSize = useWindowSize();
  // const img1 = "/images/homeBackground.png";
  const img1 = "/images/7.png";
  // const img1 = "/images/1.jpg";

  // const logo = "/images/LOGOTIPO.svg";
  const logo = "/images/LOGOTIPO.png";
  // const logo = "/images/logotipo2.png";

  // actual page scrollheight
  const [pageCounter, setPageCounter] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageCounter(window.pageYOffset);
    });
  }, [setPageCounter]);

  const insideStyles = {
    // background: "#fff",
    color: "#fff",
    fontSize: "4em",
    position: "fixed",
    padding: 20,
    top: "40%",
    width: "100%",
    textAlign: "center",
    height: "200vh",
    marginLeft: "auto",
    marginRight: "auto",
    transorm: "translate(-50%, -50%)",
    zIndex: 3,
  };

  const spaceContainer = {
    color: "#fff",
    textAlign: "center",
    zIndex: 3,
  };


const { language } = useContext(LanguageContext);

const translations = {
  es: {
    title: 'Bienvenido :)',
    description: 'Bienvenido a mi portfolio!',
  },
  en: {
    title: 'Welcome :)',
    description: 'Welcome to my portfolio!',
  },
  it: {
    title: 'Benvenuto :)',
    description: 'Benvenuto nel mio portfolio!',
  },
};

  return (
    <div className="Home">
      <Parallax
        // bgImage={img1}
        strength={200}
        renderLayer={(percentage) => {
          return (
            <div className="Home__Parallax1">
              {/* {console.log(percentage, "percentage--")} */}
              <div
                style={{
                  position: "fixed",
                  display: "flex",
                  flexDirection: "column",
                  // position: "absolute",
                  zIndex: 2,
                  // background: `rgba(225, 125, 9, ${percentage * 1})`,
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  left: "0%",
                  top: "0%",
                  filter: `grayscale(${ 2 - percentage})`,
                  // filter: `grayscale(0)`,
                  width: "100vw",
                  height: "100vh",
                  transform: `scale(${0.9 + percentage / 10})`,
                }}
              />
              <div style={insideStyles}>
                {" "}
                <p
                  style={{
                    color: "#fff",
                    // filter: `blur(${percentage - 1}vw)`,
                    // filter: `blur(${Math.pow(percentage, 2) - 1}vw)`,
                    filter: ` ${
                      windowSize.width < 640
                        ? `blur(${Math.pow(percentage, 3.8) - 1}vw)`
                        : `blur(${Math.pow(percentage, 3.5) - 1}vw)`
                    }`,
                    userSelect: "none",
                  }}
                >
                  <img className="Home__logo" src={logo}></img>
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20vh",
                    filter: ` ${
                      windowSize.width < 640
                        ? `blur(${Math.pow(percentage, 3.1) - 1}vw)`
                        : `blur(${Math.pow(percentage, 2) - 1}vw)`
                    }`,
                  }}
                >

                </div>
              </div>
            </div>
          );
        }}
      >
        <div
          // parallax scroll height
          style={
            windowSize.width < 640 ? { height: "130vh" } : { height: "255vh" }
          }
        >
          {/* <div style={insideStyles}></div> */}
        </div>
      </Parallax>
      <Parallax>
        <div style={spaceContainer} className="Home__Space">
          <Parallax
            strength={-200}
            className={
              windowSize.width < 640
                ? "Home__Space__txtContainer"
                : "Home__Space__text1"
            }
            renderLayer={(percentage) => {
              return (
                <div 
                style={{
                  position: 'relative',
                  padding:"2vw",
                  textAlign:"center"
                }}
                  >
                  <div
                    style={{
                      // position: "absolute",
                      // zIndex: 2,
                      // left: "0%",
                      // top: "0%",
                      // marginBottom: `${Math.pow(percentage, 5) - 1}vw`,
                      // width: "100vw",
                      // height: "100vh",
                      // color: "red",
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      // width:"50%",
                      width:`${percentage * 130}%`,
                      background: '#393939'
                    }}
                  ></div>
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        height: '3px',
                        width:`${percentage * 130}%`,
                        background: '#393939'
                          }}
                  ></div>
                  {/* {console.log(percentage * 50, "porc")} */}
                  <b
                    className="Home__Space__text1"
                    //  style={{marginBottom:`${Math.pow(10, percentage)  + 1}vw`}}
                    //  style={{color: `rgba(225, 125, 9, ${percentage * 1})`}}
                    style={{fontFamily: 'Anton, sans-serif',
                      color: `rgba(${255 - percentage * 850}, ${255 - percentage * 850},
                      ${255 - percentage * 850}, ${percentage * 0.9}) `, 
                    }}
                  >
                    {translations[language].description}
                  </b>

                  <p
                    className="Home__Space__text2"
                    style={{
                      color: `rgba(${255 - percentage * 600}, ${255 - percentage * 600},
                      ${255 - percentage * 600}, ${percentage * 0.9})`,
                    }}
                  >
                    {translations[language].title}
                  </p>
                </div>
              );
            }}
          ></Parallax>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
