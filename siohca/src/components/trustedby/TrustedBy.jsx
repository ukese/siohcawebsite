import React from 'react'
import './trustedby.css'
import Fade from 'react-reveal/Fade';
import { ReactComponent as UKCMB } from '../../assets/svg/trusted-by-logos/ukcmb.svg'
import { ReactComponent as UKCLJ } from '../../assets/svg/trusted-by-logos/ukclj.svg'
import { ReactComponent as SZUM } from '../../assets/svg/trusted-by-logos/szum.svg'
import { ReactComponent as UMMF } from '../../assets/svg/trusted-by-logos/ummf.svg'
import { ReactComponent as ULMF } from '../../assets/svg/trusted-by-logos/ulmf.svg'
import { ReactComponent as ZDAD } from '../../assets/svg/trusted-by-logos/zdad.svg'
import { ReactComponent as SLORS } from '../../assets/svg/trusted-by-logos/slors.svg'
import { Link } from 'react-router-dom';


const TrustedBy = () => {
  return (
    <Fade bottom>
    <div className='trustedby-box'>
      <div className='margin-bottom-2'><h2>Trusted by</h2></div>
      <div className='trustedby-logos'>
        <Link to={"https://www.mf.um.si/"} target="_blank">
          <div className='trustedby-logos-item'><UMMF/></div>
        </Link>
        <Link to={"https://www.mf.uni-lj.si/"} target="_blank">
          <div className='trustedby-logos-item'><ULMF /></div>
        </Link>
        <Link to={"https://www.ukc-mb.si/"} target="_blank">
          <div className='trustedby-logos-item'><UKCMB/></div>
        </Link>
        <Link to={"https://www.kclj.si/"} target="_blank">
          <div className='trustedby-logos-item'><UKCLJ/></div>
        </Link>
        <Link to={"https://www.zd-mb.si/"} target="_blank">
          <div className='trustedby-logos-item'><ZDAD/></div>
        </Link>
        <Link to={"https://www.szum.si/"} target="_blank">
          <div className='trustedby-logos-item'><SZUM/></div>
        </Link>
        <Link to={"http://slors.szum.si/"} target="_blank">
          <div className='trustedby-logos-item'><SLORS/></div>
        </Link>
      </div>
      
    </div>
    </Fade>
  )
}

export default TrustedBy
