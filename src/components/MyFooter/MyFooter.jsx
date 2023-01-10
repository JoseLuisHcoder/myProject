import React from 'react'
import './MyFooter.css'
import '../../App.css'

const MyFooter = () => {
  return (
    <div className='myfooter'>
      <div className='myfooter__container'>
          <p className='myfooter__title'>Jose Luis Huanca @ 2023</p>
          <div className='myfooter__colors'>
              <div className='color1'></div>
              <div className='color2 '></div>
              <div className='color3'></div>
              <div className='color4'></div>
          </div>
          <div className='myfooter__end'>"Thank you for the inspiration, from Miguel Basanta"</div>
      </div>
    </div>
  )
}

export default MyFooter