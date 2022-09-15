import React from 'react'
import './Contact.css'

const Contact = () => {


  return (
  <>
    <form className='Form_contact' action="https://formsubmit.co/e84c595746051d176d7a83da5fd2f7ed" method="POST">
    <div>Asunto: <br /><input type="text" name='Asunto'/></div>
    <div>Contacto: <br /><input type="text" name='Contacto'/></div>
    <div>Mensaje: <br /><textarea type="text" name='Mensaje'/></div>
    <button type='submit'>Enviar!</button>

    </form>
  </>
  )
}

export default Contact