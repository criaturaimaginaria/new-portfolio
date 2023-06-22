import React,{useState, useRef, useContext}  from 'react'
import { LanguageContext } from '../../contexts/LenguageContext';

const ContactForm = () => {
  const [sent, setSent] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [inputValu2, setInputValue2] = useState("");
  const [inputValu3, setInputValue3] = useState("");
// const prompt = () => {
//   return (
//     <div className={sent ? 'sented' : 'notSent'}>
//     </div>
//   )
// }



const { language } = useContext(LanguageContext);

const translations = {
  es: {
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
  },
  en: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
  },
  it: {
    name: 'Nome',
    email: 'E-mail',
    message: 'Messaggio',
  },
};


  return (
    <div id='contactForm'>
      <form action="https://formsubmit.co/valkjavalkja2@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="http://localhost:3000/ThankYou" ></input>
        <div >
          <input className='inp1' id='ch' type="text" name="name"  placeholder={translations[language].name} required onChange={(e) => setInputValue(e.target.value)}></input>
        </div>
        <div>
          <input className='inp2'id='ch' type='email' name="email" placeholder={translations[language].email} required  onChange={(e) => setInputValue2(e.target.value)}></input>
        </div>
        <div>
          <textarea className='inp4'  id="message" type="text"  name="message"  placeholder={translations[language].message} required onChange={(e) => setInputValue3(e.target.value)}></textarea>
        </div>
       <div className={ (inputValue && inputValu2 && inputValu3) == "" ? "noSent" : "sented"}>
       {/* <div className='form_button'> */}
          <button type='submit' onClick={ () => {setSent(!sent)} }>Send</button>
        </div>
      </form>   
    </div>
  )
}

export default ContactForm