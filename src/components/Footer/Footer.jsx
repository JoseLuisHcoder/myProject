import React from 'react'
import ('./Footer.css')


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
          <p className='footer__title'>Jose Luis Huanca @ 2023</p>
          <div className='footer__colors'>
              <div className='color1'></div>
              <div className='color2 '></div>
              <div className='color3'></div>
              <div className='color4'></div>
          </div>
          <div className='footer__end'>"Thank you for the inspiration, from Miguel Basanta"</div>
      </div>
    </div>
  )
}

export default Footer