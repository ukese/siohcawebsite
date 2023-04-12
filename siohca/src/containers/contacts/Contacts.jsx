import React from 'react'
import {VscMail, VscTwitter} from 'react-icons/vsc';
import {AiFillLinkedin} from 'react-icons/ai';
import './contacts.css'
import {Link} from "react-router-dom";
import {default as Phone} from '../../assets/3d-icons/Phone.js';
import Fade from 'react-reveal/Fade';
import call from '../../assets/img/call.png'

const Contacts = () => {
  return (
    <div className='contacts-box'>
      <div className='contacts-box-context'>
        <div className='contacts-box-title'>
          <Fade bottom> <h1 className='title margin-bottom-2 '>Get in touch!</h1>  </Fade>
          </div>
        <div className='two-columns'>
          <Fade bottom delay={500}>
            <div className='column-box'>
              <h2 className='margin-bottom-1'>Luka Petravić</h2>
              <div className='socials-box margin-bottom-1'>
                <Fade delay={700}><Link to="mailto:luka.petravic@student.um.si" target="_blank"> <VscMail/></Link></Fade>
                <Fade delay={900}><Link to="https://www.linkedin.com/in/luka-petravić-77608423a/" target="_blank"> <AiFillLinkedin/></Link></Fade>
                <Fade delay={1000}><Link to="https://twitter.com/LukaPetravic" target="_blank"> <VscTwitter/></Link></Fade>
              </div>
              <p>Address: Taborska ulica 8, 2000 Maribor, Slovenia</p>
            </div>
          </Fade>
          <Fade bottom delay={700}>
            <div className='column-box'>
              <h2 className='margin-bottom-1'>Rok Miklič</h2>
              <div className='socials-box margin-bottom-1'>
              <Fade delay={900}><Link to="mailto:rok.miklic@student.um.si" target="_blank"> <VscMail/></Link></Fade>
              <Fade delay={1000}><Link to="https://www.linkedin.com/in/rokmiklic/" target="_blank"> <AiFillLinkedin/></Link></Fade>
              <Fade delay={1100}><Link to="https://twitter.com/rok_____" target="_blank"> <VscTwitter/></Link></Fade>
              </div>
              <p>Address: Taborska ulica 8, 2000 Maribor, Slovenia</p>
            </div>
          </Fade>
        </div>

      </div>
      <div className='contacts-box-img'>
      <Fade bottom delay={200}> <div className='contacts-box-title-img'> <img src={call}></img></div> </Fade>
      </div>
      
      
    </div>
  
  )
}

export default Contacts
