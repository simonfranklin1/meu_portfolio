import { BsMailboxFlag } from "react-icons/bs";
import { SectionTitle } from '../components';
import './Contact.css';
import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    const [ emailCopied, setEmailCopied ] = useState(false);
    const emailRef = useRef(null);


    const handleEmailCopy = () => {
      const email = emailRef.current.textContent;
      navigator.clipboard.writeText(email);

      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000)
    }
    

  return (
    <section className="porfolio_contact-container">
        <SectionTitle title={'Contato'} />

        <Fade duration={1000} triggerOnce>
          <div className="portfolio_contact-container_mailBox">
              <div className="mailBox-header">
                  <BsMailboxFlag />
                  <p>Me envie um email</p>
              </div>
              <div className="portfolio_contact-container_mailBox-copy">
                  <p className={`contact_email ${emailCopied ? 'copied' : ''}`} ref={emailRef}>simonfranklin.54@gmail.com</p>
                  <button className="contact_copy-btn" onClick={() => handleEmailCopy()}>{emailCopied? 'Email copiado!' : 'Copiar'}</button>
              </div>
          </div>
        </Fade>
    </section>
  )
}

export default Contact