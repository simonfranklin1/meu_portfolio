import React from 'react'
import './Header.css'
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Fade, Reveal } from 'react-awesome-reveal';
import { HeaderAnimation } from '../utils/Animation';

const Header = () => {
  
  return (
    <section className='portfolio_header'>
        <HeaderAnimation>
          <div className="portfolio_header-title">
            <p>Oi, eu sou o Simon</p>
            <h2 className='portfolio_header-title_first'>React
            <span className="title-icons">
              <a href="https://github.com/simonfranklin1" target="_blank">
                <FaGithub />
              </a>
              <a href="https://docs.google.com/document/d/10jVe3tEInT2ziCtU4MPdN6SJX4GrTaQr/edit?usp=drive_link&ouid=113300837558869934481&rtpof=true&sd=true" target='_blank'>
                <IoDocumentText />
              </a>
              <a href="https://www.linkedin.com/in/simon-franklin-1a8976274/" target='_blank'>
                <FaLinkedin />
              </a>
              </span>
            </h2>
            <h2>Developer</h2>
          </div>
          <a href="#about_me" className="portfolio_header-link">
            <button className="portfolio_header-btn">
              Sobre mim
            </button>
          </a>
        </HeaderAnimation>
        
    </section>
  )
}

export default Header