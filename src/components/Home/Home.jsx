import styled from 'styled-components'
import Nav from '../Nav/Nav'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Welcome from '../Welcome/Welcome'
import Profile from '../Profile/Profile'
import Proyect from '../Proyects/Proyect'
import Skill from '../Skills/Skill'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <HashRouter>
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
    </HashRouter>
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