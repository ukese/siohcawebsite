import React from 'react'
import './funding.css'
import { RiArrowRightSLine} from  'react-icons/ri';
import Fade from 'react-reveal/Fade';
import { ReactComponent as UM } from  '../../assets/svg/funding-logos/um.svg'
import { ReactComponent as ESS } from  '../../assets/svg/funding-logos/ess.svg'
import { ReactComponent as MIZS } from  '../../assets/svg/funding-logos/mizs.svg'

const Funding = () => {
  return (
    <Fade>
      <div className='funding'>

          <h2 className='margin-bottom-2'> Funding</h2>
          <div className='funding-box-row margin-bottom-1'>
            <p>This project was funded by <b> University of Maribor Faculty of Medicine </b> for 4 months between 1st of March and 30th of June 2022.</p>
            
          </div>
          <div className='funding-box-row margin-bottom-2'>
            <p>It is currently cofinanced by <b>the Republic of Slovenia</b> and <b>the European Social Fund</b>.</p>
          </div>
          <div className='funding-logos'>
            <div className='funding-logos-item' id='um'><UM/></div>
            <div className='funding-logos-item'><ESS/></div>
            <div className='funding-logos-item'><MIZS/></div>
          </div>
        </div>

    </Fade>
  )
}

export default Funding
