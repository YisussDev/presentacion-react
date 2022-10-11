import React from 'react'
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const Intermitent = () => {
    const saludo = "¡Bienvenido(a)!"
    const [text, setText] = useState('')
    const [controlador, setControlador] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      if(controlador<=saludo.length){
        setText(saludo.slice(0,controlador))
        setControlador(controlador + 1)
      }else{
        setTimeout(()=>{
            setControlador(0)
        },8000)
      }
    },300)
  },[controlador])

  return (
    <Message>
        {text}
    </Message>
  )
}

export default Intermitent

const inter = keyframes`
    0% {
        border-color: transparent ;
    }
    100% {
        border-color: black ;
    }
`

const Message = styled.div`
    display: flex;
    margin: auto auto;
    height: 90px;
    align-items: center;
    font-size: 3.5rem;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-right: 10px solid black;
    animation: ${inter} 1s infinite linear ;
`