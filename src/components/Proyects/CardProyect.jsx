import React from 'react'
import { FaHtml5, FaJs, FaCss3, FaReact } from 'react-icons/fa';

const CardProyect = ({name, img, react, js, css, html, description, link}) => {
  return (
    <a href={link} rel="noreferrer" target="_blank" className='Proyect_card'>
        <img src={img} alt="" />
        <div className='Proyect_hover'>
          <h1>{name}</h1>
          <p>{description}</p>
          <div className='Proyect_habilities'>
            {css&&<div><FaCss3 /></div>}
            {html&&<div><FaHtml5 /></div>}
            {js&&<div><FaJs /></div>}
            {react&&<div><FaReact /></div>}
          </div>
        </div>
      </a>
  )
}

export default CardProyect