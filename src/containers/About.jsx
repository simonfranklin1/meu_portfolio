import React from 'react'
import { SectionTitle } from '../components'
import Simon from '../assets/img/IMG_1466.PNG'
import './About.css'
import { timeLineData } from '../utils/utils'

import { FaCode, FaRegLightbulb, FaRocket } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import TimeLine from '../components/TimeLine'

const About = () => {
  return (
    <section id='about_me' className="portfolio_about-container">
      <SectionTitle title="sobre mim" />

      <div className="portfolio_about-me">
        <div className="about_me_image">
          <img src={Simon} alt="Simon Franklin" />
        </div>
        <div className="about_me_info">
          <h3>Simon Franklin</h3>
          <ul>
            <li><FaCode /> Desenvolvendo interfaces e projetos pessoais desde 2022</li>
            <li><FaGraduationCap /> Cursando Análise e Desenvolvimento de Sistemas</li>
            <li><FaRegLightbulb /> Interesse em Desenvolvimento Front End</li>
            <li><FaRocket /> Buscando oportunidade para atuar na área</li>
          </ul>
        </div>
      </div>
      <TimeLine timeLineData={timeLineData} />
    </section>
  )
}

export default About