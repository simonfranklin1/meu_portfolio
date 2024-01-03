import { SectionTitle } from "../components";
import { skillsData } from '../utils/utils';
import './Skills.css'
import { Fade } from "react-awesome-reveal";

const Skills = () => {

  const handleShowDescription = (idx) => {
    const descriptions = document.querySelectorAll(".portfolio_skills-description_text");
    document.querySelector(".instruction").classList.add('hidden')
    descriptions[idx].classList.remove('hidden');
  }

  const handleHiddenDescription = (idx) => {
    const descriptions = document.querySelectorAll(".portfolio_skills-description_text");
    document.querySelector(".instruction").classList.remove('hidden')
    descriptions[idx].classList.add('hidden');
  }

  return (
    <section className="portfolio_skills-section" style={{overflow: 'hidden'}}>
      <SectionTitle title={'minhas habilidades'} />
        <div className="portfolio_skills-container">
          <div className="portfolio_skills-icons">
            <Fade direction="left" duration={1000}>
              {skillsData.map((skill, index) => (
                <div className="skill_box" key={index} onMouseEnter={() => handleShowDescription(index)} onMouseLeave={() => handleHiddenDescription(index)}>{skill.icon}</div>
              ))}
            </Fade>
          </div>
        <div className="portfolio_skills-descriptions">
            <Fade direction="right" duration={1000}>
              <h3 className="instruction">/* Passe o cursor do mouse no card para ler */</h3>
              {skillsData.map((skill) => (
                <div className="portfolio_skills-description_text hidden" key={skill.title}>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </Fade>
        </div>
      </div>
    </section>
  )
}

export default Skills