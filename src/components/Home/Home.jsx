import styled, { keyframes } from 'styled-components'
import bg from './image/bg.png'
import Nav from '../Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from '../Welcome/Welcome'
import Profile from '../Profile/Profile'
import Proyect from '../Proyects/Proyect'
import Skill from '../Skills/Skill'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <BrowserRouter>
    <HomePage>
      <Nav />
      <PageRender>
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/skills' element={<Skill />} />
          <Route exact path='/proyects' element={<Proyect />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </PageRender>
    </HomePage>
    </BrowserRouter>
  )
}

export default Home


const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1A1A1A;
  & {@media (min-width: 600px) {
    padding-left:6rem;
    
  }}
`
const PageRender = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;

`
const intermitent = keyframes`
   0%{
    opacity: 1;
   }
   50%{
    opacity: 0.5;
   }
   100%{
    opacity: 1;
   }
`
const BackgroundImage = styled.img`
    height: auto;
    width: 40%;
    position: fixed;
    z-index: 1;
    right: 0px;
    animation: ${intermitent} .9s infinite linear;
`