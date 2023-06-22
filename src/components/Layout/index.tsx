import { ReactNode } from "react";
import react, {useState} from "react";
import {  Header, StackCards } from "..";

interface props {
  children: ReactNode;
}

export default function Layout({ children }: props) {

  const [sideMenu, setSideMenu] = useState(false);

  const status = () => {
      setSideMenu(!sideMenu)

      const bodyStyle = document.body.style; 
        const servicesScrollLock = () => { !sideMenu ? 
        (bodyStyle.overflowY = "hidden") : (bodyStyle.overflowY = "auto"); }; 
        servicesScrollLock(); 
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}