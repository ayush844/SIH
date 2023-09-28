import React, { useState } from 'react'
import './Carausel.css'
import { slides } from '../Helpers/CarauselData'

const Carausel = () => {

    const [currImg, setCurrImg] = useState(0);

  return (
    <div className='carausel'>
      <div className="carausel-inner" style={{backgroundImage: `url(${slides[currImg].img})`}}>
        <div className="left" onClick={() => {(currImg > 0) ? setCurrImg(currImg-1) : setCurrImg(slides.length-1)}}>❰</div>
        <div className="center"></div>
        <div className="right" onClick={() => {(currImg < slides.length - 1) ? setCurrImg(currImg+1) : setCurrImg(0)}}>❱</div>
      </div>
    </div>
  )
}

export default Carausel
