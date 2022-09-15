import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './image/jplogo.png'
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaWrench, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Nav = () => {
  let navigate = useNavigate();
  const [actual, setActual] = useState(1);
  return (
    <NavBar>
      <Logo src={logo} />
        <Buttons>
          <Button style={actual===1?{color: '#00B871'}:null} onClick={()=> {setActual(1); navigate('/')}}><FaHome /></Button>
          <Button style={actual===2?{color: '#00B871'}:null} onClick={()=> {setActual(2); navigate('/profile')}}><FaUser /></Button>
          <Button style={actual===3?{color: '#00B871'}:null} onClick={()=> {setActual(3); navigate('/skills')}}><FaWrench /></Button>
          <Button style={actual===4?{color: '#00B871'}:null} onClick={()=> {setActual(4); navigate('/proyects')}}><FaCode /></Button>
          <Button style={actual===5?{color: '#00B871'}:null} onClick={()=> {setActual(5); navigate('/contact')}}><FaEnvelope /></Button>
        </Buttons>
        <Contact>
          <Button href='https://github.com/YisussDev' target='_blank'  ><FaGithub /></Button>
          <Button href='https://www.linkedin.com/in/jesuspaguayn/' target='_blank' ><FaLinkedin /></Button>
        </Contact>
    </NavBar>
  )
}

export default Nav

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  z-index: 100000;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  position: fixed;
  background-color: transparent;
  left: 0;
  top: 0;
  &{
    @media (min-width: 600px) {
      padding: 20px 0;
      width: 5rem;
      height: 100%;
      background-color: #1A1A1A;
      flex-direction: column;
      box-shadow: 0 0 10px 5px black;
    }
  }
`
const Logo = styled.img`
  height:2.5rem;
  width:2.5rem;
  object-fit: contain;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;
  position: fixed;
  z-index: 10000000;
  right: 0;
  top: 10px;
  &{
    @media (min-width: 600px) {
      top: auto;
      right: auto;
      height:calc(10rem + 40px);
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      width:2rem;
      
    }
  }
`
const Button = styled.a`
  width:2rem;
  margin-top: 8px;
  height:2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color:#333333;
  & svg {
    width: 2rem;
    height: 2rem;
    transition: all 0.3s linear;
  };
  & svg:hover {
    transition: all 0.3s linear;
    scale: 1.1;
    fill: #00B871;
  };
  &:hover{
    cursor: pointer;
  }
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
  right: 20px;
  align-items: center;
  min-height: calc(4rem + 16px);
  width:2rem;
  &{
    @media (min-width: 600px) {
      position: relative;
      right: auto;
      bottom: auto;
    }
  }
`