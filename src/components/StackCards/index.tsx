// import React from 'react'
import React, { useEffect, useRef, useState, useContext } from 'react';
import { LanguageContext } from '../../contexts/LenguageContext';

interface CardData {
  title: string;
  content: string;
  img: string;
  link: string;
  skills:any;
}


export const StackCards = () => {

    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef<HTMLDivElement | null>(null);
  // console.log(isVisible, "visible")

    useEffect(() => {
      const handleScroll = () => {
        if (divRef.current) {
          const divPosition = divRef.current.getBoundingClientRect();
  
          // Check if the div is within the viewport
          if (divPosition.top < window.innerHeight) {
            setIsVisible(true);
            window.removeEventListener('scroll', handleScroll);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const { language } = useContext(LanguageContext);

    // Translations based on the current language
    const translations:any = {
      es: {
        title3: 'Test político',
        description: 'Widu es una aplicación mobile creada en Ract Native. Dicha aplicación fue empezada por un equipo diferente, así que tuvimos que primero adaptarnos al código ya existente. La aplicación permite calcular tu huella de CO2 y te recompensa por alcanzar objetivos.',
        description2: 'Esta web te permite comprar partituras utilizando bitcoin via lightning network. Está hecha con reactjs y cuenta con un pequeño backend en nodejs.',
        description3: 'Test político de tres ejes creado con vanilla JS y realizado para el canal de youtube "El gentil hombre"',
        description4: 'Odigos es una empresa mexicana enfocada en la venta y marketing de bienes raíces. Tuve la oportunidad de trabajar para varios de sus proyectos utilizando, nextjs, tailwind y varias otras tecnologías. Acá se puede apreciar su página de bienvenida, la cual también ayudé a desarrollar.',
      },
      en: {
        title3: 'Political test',
        description: 'Widu is a mobile app created in Ract Native. That app was started by a different team, so we had to adapt to the existing code first. The app allows you to calculate your CO2 footprint and rewards you for reaching targets.',
        description2: 'This website allows you to buy sheet music using bitcoin via lightning network. It is made with reactjs and has a small nodejs backend.',
        description3: 'Three-axis political test created with vanilla JS and made for the youtube channel "El gentil hombre"',
        description4: 'Odigos is a Mexican company focused on the sale and marketing of real estate. I had the opportunity to work for several of their projects using, nextjs, tailwind and various other technologies. Here you can see their landing page, which I also helped develop.',
      },
      it: {
        title3: 'Prova politico',
        description: "Widu è un'applicazione mobile creata in Ract Native. Quell'app è stata avviata da un team diverso, quindi abbiamo dovuto prima adattarci al codice esistente. L'app ti consente di calcolare la tua impronta di CO2 e ti premia per il raggiungimento degli obiettivi.",
        description2: 'Questo sito Web ti consente di acquistare spartiti utilizzando bitcoin tramite la rete Lightning. È realizzato con reactjs e ha un piccolo backend nodejs.',
        description3: 'Test politico a tre assi creato con vanilla JS e realizzato per il canale youtube "El gentil hombre"',
        description4: "Odigos è una società messicana focalizzata sulla vendita e commercializzazione di immobili. Ho avuto l'opportunità di lavorare per molti dei loro progetti utilizzando, nextjs, tailwind e varie altre tecnologie. Qui puoi vedere la loro pagina di benvenuto, che ho anche contribuito a sviluppare.",
      },
    };
  

    const description:any = {
      es: {
        title: 'Algunos trabajos',
        description: 'Bueno, acá están algunos proyectos en los que trabajé, dos son de ',
        description2: ', uno es un proyecto personal y el último es un test político 3D para el canal de youtube',
      },
      en: {
        title: 'Some works',
        description: 'Well, here are just a few projects I worked on. Two are fromm',
        description2: ', one is a personal project and the last one is a 3D political quiz for the youtube channel',
      },
      it: {
        title: 'Alcuni lavori',
        description: 'Ecco alcuni progetti su cui ho lavorato, due sono di ',
        description2: ", uno è un progetto personale e l'ultimo è un test politico in 3D per il canale youtube ",
      },
    };

    const cardsData: CardData[] = [
        {
          title: 'Widu',
          content: `${translations[language].description}`, 
          img: "/images/projects/widu.png",
          link:"https://widu.app/",
          skills:{
            img1:"/images/skills/react.png",
            img2:"/images/skills/native.png",
            img3:"",
          },
        },
        {
          title: 'Lightning store',  
          content: `${translations[language].description2}`, 
          img: "/images/projects/lightning.png",
          link:"https://btc-lightning-store.web.app/",
          skills:{
            img1:"/images/skills/react.png",
            img2:"/images/skills/node.png",
            img3:"/images/skills/css.png",
          },
        },
        {
          title: `${translations[language].title3}`, 
          content: `${translations[language].description3}`, 
          img: "/images/projects/test.png",
          link:"https://test.elgentilhombre.com/",
          skills:{
            img1:"/images/skills/html.png",
            img2:"/images/skills/css.png",
            img3:"/images/skills/js.png",
          },
        },
        {
          title:  'Odigos studio',
          content: `${translations[language].description4}`, 
          img: "/images/projects/odigos.png",
          link:"https://www.odigos.mx/",
          skills:{
            img1:"/images/skills/nextjs.png",
            img2:"/images/skills/tailwind.png",
            img3:"/images/skills/css.png",
            img4:"/images/skills/typescript.png",
          },
        },

      ];

    return (
        <div id='stack_cards' className='stackCards'>
            <img className='stackCards__topSvg' src="/images/waveBlack.svg"></img>
            {/* <img className='stackCards__background' src="/images/di.jpg"></img> */}
            <div className='stackCards__titleContainer'>
                <h1 style={{color:`${isVisible  == true ? '#a60feb' : 'black'}`, transition: ' 5s ease',}}>
                  {description[language].title}
                  <div id={isVisible  == true ? 'worksBorder' : 'worksBorder__hidden' }/>
                </h1>
                <div ref={divRef} className='stackCards__titleContainer__detail'>
                    ♦
                </div>
                <p>
                  {description[language].description} 
                  <u>
                    <a href="https://www.yoorco.com/" target="_blank" rel="noreferrer" style={{color:`black`, marginLeft:"4px"}}>
                      Yoorco 
                    </a>
                  </u> {description[language].description2}
                   <u>
                      <a href="https://www.youtube.com/@ElGentilhombre" target="_blank" rel="noreferrer" style={{color:`black`, marginLeft:"4px"}}>
                        El Gentil Hombre
                      </a>
                   </u>
                </p>
            </div>

            <div className='cardsContainer'>
                <ul id="cards">
                    {cardsData.map((data, index) => (
                    <li key={index} className="card" id={`card_${index + 1}`}>
                        <div className="card__content">
                            <div className='card__content__box2'>
                                <a href={data.link} target="_blank" rel="noopener noreferrer">
                                    <div className='stackCard__imgContainer'>
                                        <img src={data.img}></img>
                                    </div>
                                </a>
                            </div>
                            <div className='card__content__box1'>
                                <b className='satackCard__title'>{data.title}</b>
                                <div className='skills'>
                                  {data.skills.img1 && (
                                    <div className='skills__imgContainer'>
                                      <img src={data.skills.img1} alt="Skill 1" />
                                    </div>
                                  )}
                                  {data.skills.img2 && (
                                    <div className='skills__imgContainer'>
                                      <img src={data.skills.img2} alt="Skill 2" />
                                    </div>
                                  )}
                                  {data.skills.img3 && (
                                    <div className='skills__imgContainer'>
                                      <img src={data.skills.img3} alt="Skill 3" />
                                    </div>
                                  )}
                                  {data.skills.img4 && (
                                    <div className='skills__imgContainer'>
                                      <img src={data.skills.img4} alt="Skill 3" />
                                    </div>
                                  )}
                                </div>
                                <p className='stackText__1'>{data.content}</p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default StackCards