import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({title}) => {

  return (
    <div className="portfolio_section-title">
        <div></div>
        <h3 className="section-title">{title}</h3>
    </div>
  )
}

export default SectionTitle