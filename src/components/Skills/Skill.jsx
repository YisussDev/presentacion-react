import React from 'react'
import { FaHtml5, FaJs, FaCss3, FaReact, FaGitAlt } from 'react-icons/fa';
import './Skills.css'

const Skill = () => {
  return (
    <div className="Skills">
      <h1>Mis Habilidades</h1>
      <div className='Card'>
        <div><FaHtml5 /></div>
        <div><FaJs /></div>
        <div><FaCss3 /></div>
        <div><FaReact /></div>
        <div><FaGitAlt /></div>
      </div>  
    </div>
  )
}

export default Skill