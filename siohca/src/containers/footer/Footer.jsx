import React from 'react'
import './footer.css'
import { ReactComponent as Logo } from  '../../assets/svg/brand/logo-large.svg';


const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-logo'>
        <Logo/>
      </div>
      <div className='footer-text'>
      Ekipa SiOHCA, 2023
      </div>
     
    </div>
  )
}

export default Footer
