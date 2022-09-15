import React from 'react'
import './Proyect.css'
import {dataProyects} from '../data/data.js'
import CardProyect from './CardProyect'


const Proyect = () => {
  return (
    <div className='Proyect'>
      {
        dataProyects.map(res =>{
          return <CardProyect
          key={res.name}
          img={res.image}
          name={res.name}
          description={res.description}
          react={res.react}
          html={res.html}
          css={res.css}
          js={res.js}
          link={res.link}
          />
        })
      }
    </div>
  )
}

export default Proyect