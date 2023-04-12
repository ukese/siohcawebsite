import React from 'react'
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import './acknowledgements.css'
import Fade from 'react-reveal/Fade';
import {AcknowledgementsItems} from './AcknowledgementsItems';
import { RiArrowRightSLine} from  'react-icons/ri';

const Acknowledgements = () => {
  return (
    <Fade bottom >
    <div className='acknowledgements-box'>
        <div className='acknowledgements-box-column-title'> 
            <h2 className='margin-bottom-2'>We would like to thank</h2>
        </div>
        <div className='acknowledgements-box-column'>
            {AcknowledgementsItems.map((item, index) => {
              return (
                <div className='acknowledgements-box-row margin-bottom-1'>
                    
                    <p className='text'>
                        <Link to={item.link}> <b>{item.name}</b> </Link>
                        {item.text}
                    </p>
                </div>
                );})}
        </div>
    </div>
    </Fade>
  )
}

export default Acknowledgements
