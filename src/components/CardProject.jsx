import React from 'react'
import './CardProject.css'
import { RiGitRepositoryLine } from "react-icons/ri";
import { CgMediaLive } from "react-icons/cg";

const CardProject = ({project}) => {
  return (
    <div className="project-card">
      <a href={project.deploy} target='_blank'>
        <img src={project.image} style={{width: '100%'}}  className='project-card_image' />
      </a>
      <div className="project-card_info">
          <p className="project-card_info-title" style={{textAlign: 'center', fontSize: '20px'}}>{project.title}</p>
          <p className="project-card_info-text" style={{textAlign: 'justify'}}>{project.text}</p>
      </div>
      <div className="project-card_links">
                <a href={project.repo} target='_blank' >
                  <button style={{textTransform: 'uppercase'}} className='project-card_links-repo_btn'>
                    Repositório <RiGitRepositoryLine />
                  </button>
                </a>
                <a href={project.deploy} target='_blank' >
                  <button style={{textTransform: 'uppercase'}} className='project-card_links-demo_btn'>
                    Site no Ar <CgMediaLive/>
                  </button>
                </a>
      </div>
    </div>
  )
}

export default CardProject