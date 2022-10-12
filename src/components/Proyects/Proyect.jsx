import React from 'react'
import './Proyect.css'
import {dataProyects} from '../data/data.js'
import { FaHtml5, FaJs, FaCss3, FaReact, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react'



const Proyect = () => {
  const [position, setPosition] = useState(0)
  const nextProyect = () =>{
    if(position < dataProyects.length-1){
      setPosition(position+1)
    }
    else if (position === dataProyects.length-1){
      setPosition(0)
    }
  }
  const previousProyect = () =>{
    if(position > 0){
      setPosition(position-1)
    }
    else if (position === 0){
      setPosition(dataProyects.length-1)
    }
  }
  return (
    <div className='proyects_carrousel'>
      <button className='previous_proyect' onClick={previousProyect}><FaArrowLeft /></button>
      <button className='next_proyect' onClick={nextProyect}><FaArrowRight /></button>
      <ul className='Proyect' style={{transform: `translateX(-${position*(100/(dataProyects.length))}%)`, width: `${(dataProyects.length)*100}%`}}>
        {
          dataProyects.map((proyect, index) => {
            return <li key={proyect.name} className='proyect_container'>
                      <div>
                        <h3>{proyect.name}</h3>
                        <p>{proyect.description}</p>
                        <div className='proyect_habilities'>
                        {proyect.html&&<div><FaHtml5 /></div>}
                        {proyect.css&&<div><FaCss3 /></div>}
                        {proyect.js&&<div><FaJs /></div>}
                        {proyect.react&&<div><FaReact /></div>}
                      </div>
                      </div>
                      <img src={proyect.image} alt="" />
                    </li>
          })
        }
      </ul>
    </div>
  )
}

export default Proyect


// {
//   dataProyects.map(res =>{
//     return <CardProyect
//     key={res.name}
//     img={res.image}
//     name={res.name}
//     description={res.description}
//     react={res.react}
//     html={res.html}
//     css={res.css}
//     js={res.js}
//     link={res.link}
//     />
//   })
// }