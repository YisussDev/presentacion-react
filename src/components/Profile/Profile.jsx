import React from 'react'
import './Profile.css'
import jp from './images/jpperfil.png'
import './Button.css'


const Profile = () => {
  return (
    <div className='Profile'>
      <img src={jp} alt="" />
      <div>
        <h1>Jesús Alberto Paguay Naranjo</h1>
        <h2>React Js Developer</h2>
        <p>Yo soy Jesus, muchas gracias por visitar mi portafolio, aquí podrás encontrar información 
          de mis proyectos y mis habilidades, no dudes en contactarte conmigo 😉🐱
        </p>
        <a download='CVJP' href='./documents/CVJP.pdf'>
        <button className="cta">
          <span>Descargar CV</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
        </a>
      </div>

    </div>
  )
}

export default Profile
