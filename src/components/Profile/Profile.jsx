import React from 'react'
import './Profile.css'
import jp from './images/jpperfil.png'


const Profile = () => {
  return (
    <div className='Profile'>
      <img src={jp} alt="" />
      <div>
        <h1>Jesús Alberto Paguay Naranjo</h1>
        <h2>React Js Developer</h2>
        <p>Mucho gusto, me presento, soy un 
        estudiante de Ingeniería Electrónica 
        que le apasionó el mundo del desarrollo 
        web y la programación, con muchas 
        ganas de seguir aprendiendo, de 
        trabajar y crecer junto a mis colegas, gracias 
        por visitar mi página web :)</p>
      </div>

    </div>
  )
}

export default Profile
