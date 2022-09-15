import React from 'react'
import styled, { keyframes } from 'styled-components'
//import styled from 'styled-components'
import Intermitent from './Intermitent'

const Welcome = () => {
  return (
    <RenderW>
        {/* <Title>Hi, <br />
        i'm Jesus, <br />
        web developer.
        </Title> */}
        <Intermitent />

    </RenderW>
  )
}

export default Welcome

// const Title = styled.h1`
// display: flex;
// align-items: center;
// padding-left: 3rem;
// color: white;
// font-size:4rem;
// margin: auto 0px;
// z-index: 10;
// filter: drop-shadow(2px 2px 4px black);
// `

const render = keyframes`
    0%{
        scale: 0;
    }
    50%{
        scale: 1.2;
    }
    100%{
        scale: 1;
    }
`
const RenderW = styled.div`
animation: ${render} .5s linear;
`