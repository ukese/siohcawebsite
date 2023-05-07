import React from 'react'
import './about.css'
import {default as Logo} from '../../assets/3d-icons/Logo.js';
import {default as LogoMedium} from '../../assets/3d-icons/LogoMedium.js';
import {default as LogoSmall} from '../../assets/3d-icons/LogoSmall.js';
import {DiGithubFull} from 'react-icons/di';
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom";



function About() {
  return (
    
    <div className='about-siohca'>
      <div className='column-box'>
    
        <h1>OHCA </h1>


        <h1>registry </h1>

        <h1 className='margin-bottom-1'>Slovenia </h1>



        <p className='margin-bottom-1'>Interdisciplinary student project run by University of Maribor Faculty of medicine. Our goal is to develop an open-source software to help track and analyse OHCA.</p>

        <p className='margin-bottom-2'>In depth documentation can be found on our </p>

          <Link  to="https://github.com/SterArcher/OHCA-registry-Slovenia">
            <button>
              <DiGithubFull  size={60}/> 
            </button>
          </Link>
      </div>
  

      <div className='canvas3d'>
        <Logo/>
      </div>
      <div className='canvas3d-medium'>
        <LogoMedium/>
      </div>
      <div className='canvas3d-small'>
        <LogoSmall/>
      </div>

    </div>
  )
}

export default About
