import React from 'react'
import './SectionTitle.css'
import { HeaderAnimation } from '../utils/Animation'

const SectionTitle = ({title}) => {

  return (
    <>
      <HeaderAnimation>
        <div className="portfolio_section-title">
            <div></div>
            <h3 className="section-title">{title}</h3>
        </div>
      </HeaderAnimation>
    </>
  )
}

export default SectionTitle