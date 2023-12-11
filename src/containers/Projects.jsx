import React from 'react'
import { SectionTitle, CardProject } from '../components'
import { projectsData } from '../utils/utils'
import './Projects.css'

const Projects = () => {
  return (
    <section className="portfolio_projects-section">
      <SectionTitle title="Meus Projetos" />
      <div className="portfolio_projects-container">
        {projectsData.map((project) => <CardProject project={project} key={project.title} />)}
      </div>
    </section>
  )
}

export default Projects