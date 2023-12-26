import './Contact.css';
import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { BsMailboxFlag } from "react-icons/bs";

import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Contact = () => {
    const [ emailCopied, setEmailCopied ] = useState(false);
    const emailRef = useRef(null);


    const handleEmailCopy = () => {
      const email = emailRef.current.textContent;
      navigator.clipboard.writeText(email);

      console.log(emailRef.current)

      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000)
    }
    

  return (
    <footer className="porfolio_contact-container">
      <div className="porfolio_contact-container_top">
        <div className="portfolio_contact-container_title">
            <BsMailboxFlag className='mailBox-icon' />
            <p>Me envie um email</p>
        </div>
        <p className={`porfolio_contact-container_email ${emailCopied ? 'copied' : ''}`} ref={emailRef}>simonfranklin.54@gmail.com</p>
        <button className="copy_email_btn" onClick={handleEmailCopy}>{emailCopied? 'Email copiado!' : 'Copiar'}</button> 
      </div>
      <div className="porfolio_contact-container_bottom">
          <p className="portfolio_contact-container_title">
            Links para contato
          </p>
          <div className="portfolio_contact-container_links">
            <a href="https://github.com/simonfranklin1" target='_blank'><VscGithub /></a>
            <a href="https://docs.google.com/document/d/10jVe3tEInT2ziCtU4MPdN6SJX4GrTaQr/edit?usp=drive_link&ouid=113300837558869934481&rtpof=true&sd=true" target='_blank'><IoDocumentText /></a>
            <a href="https://www.linkedin.com/in/simon-franklin-1a8976274/" target='_blank'><FaLinkedinIn /></a>
          </div>
      </div>
    </footer>
  )
}

export default Contact