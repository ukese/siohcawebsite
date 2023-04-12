import React from 'react'
import './pub.css'
import {Link} from "react-router-dom";
import {Publications} from './Publications';
import {Press} from './Press';
import {Awards} from './Awards';
import Fade from 'react-reveal/Fade';


const Pub = () => {
  return (
    <div className='pub-container'>
      <Fade bottom delay={400}>
        <div className='pub-box'>
          <h2 className='margin-bottom-1'>Publications</h2>
          <div className='pub-list'>
            {Publications.map((item, index) => {
              return (
                <p key={index} className='margin-bottom-1'>
                  {item.date} - <Link to={item.link}> {item.name} </Link>
                </p>
                );})}
            </div>
        </div>
      </Fade>
      <Fade bottom delay={600}>
        <div className='pub-box'>
          <h2 className='margin-bottom-1'>Press clippings</h2>
          <div className='pub-list'>
            {Press.map((item, index) => {
              return (
                <p key={index} className='margin-bottom-1'>
                  {item.date} - <Link to={item.link}> {item.name} </Link>
                </p>
                );})}
            </div>
        </div>
      </Fade>
      <Fade bottom delay={800}>
        <div className='pub-box'>
          <h2 className='margin-bottom-1'>Awards</h2>
          <div className='pub-list'>
            {Awards.map((item, index) => {
              return (
                <p key={index} className='margin-bottom-1'>
                  {item.date} - <Link to={item.link}> {item.name} </Link>
                </p>
                );})}
            </div>
        </div>
    </Fade>
    </div>
  )
}

export default Pub
