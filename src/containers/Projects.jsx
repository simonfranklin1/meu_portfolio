import React from 'react'
import { SectionTitle, CardProject } from '../components'
import { projectsData } from '../utils/utils'
import './Projects.css'
import { ProjectsAnimation } from '../utils/Animation'

const Projects = () => {
  return (
    <section className="portfolio_projects-section" style={{overflow: 'hidden'}}>
      <SectionTitle title="Meus Projetos" />
        <div className="portfolio_projects-container">
          <ProjectsAnimation> 
            {projectsData.map((project) => <CardProject project={project} key={project.title} />)}
          </ProjectsAnimation>
        </div>
    </section>
  )
}

export default Projects