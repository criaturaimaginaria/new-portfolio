import Head from "next/head";
import { Home, StackCards, AboutMe, Footer } from "@/components";

export default function HomeSingle() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="Portfolio" content="Portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
        <div className="Empty1__main"></div>
        <div className="AboutMeContainer__main">
         <AboutMe />
        </div>
        <div className="stackContainer__main">
         <StackCards />
         <Footer />   
        </div>
      </main>
      
    </>
  );
}
