import React from 'react'
import { SectionTitle } from '../components'
import Simon from '../assets/img/IMG_1466.PNG'
import './About.css'
import { timeLineData } from '../utils/utils'

import { FaCode, FaRegLightbulb, FaRocket } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import TimeLine from '../components/TimeLine'

import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <section id='about_me' className="portfolio_about-container" style={{ overflow: 'hidden' }}>
      <SectionTitle title="sobre mim" />

      <div className="portfolio_about-me">
        <Fade direction='left' duration={1500}>
          <div className="about_me_image">
            <img src={Simon} alt="Simon Franklin" />
          </div>
        </Fade>
        <Fade direction='right' duration={1500} delay={500}>
          <div className="about_me_info">
            <h3>Simon Franklin</h3>
            <ul>
              <li><FaCode /> Desenvolvendo interfaces desde 2022</li>
              <li><FaGraduationCap /> Cursando Sistemas de Informação</li>
              <li><FaRegLightbulb /> Interesse em Desenvolvimento Front End</li>
              <li><FaRocket /> Trabalhando como Desenvolvedor Front End</li>
            </ul>
          </div>
        </Fade>
      </div>
      <Fade duration={1500} delay={750}>
        <TimeLine timeLineData={timeLineData} />
      </Fade>
    </section>
  )
}

export default About