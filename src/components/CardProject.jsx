import React from 'react'
import './CardProject.css'

const CardProject = ({project}) => {
  return (
    <div className="project-card">
      <a href={project.deploy} target='_blank' style={{cursor: 'pointer'}}><img src={project.image} style={{width: '100%'}}  className='project-card_image' /></a>
      <div className="project-card_info">
          <p className="project-card_info-title" style={{textAlign: 'center', fontSize: '20px'}}>{project.title}</p>
          <p className="project-card_info-text" style={{textAlign: 'justify'}}>{project.text}</p>
      </div>
      <div className="project-card_links">
                <a href={project.repo} target='_blank' >
                  <button style={{textTransform: 'uppercase'}}>Repositório</button>
                </a>
                <a href={project.deploy} target='_blank' >
                  <button style={{textTransform: 'uppercase'}}>Projeto</button>
                </a>
      </div>
    </div>
  )
}

export default CardProject