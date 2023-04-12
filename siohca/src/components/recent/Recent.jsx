import React from 'react'
import './recent.css'
import {Link} from "react-router-dom";




function Recent() {
  return (
    
    <div className='recent'>
      <h2>Check out our blog!</h2>
      <div className='blog-posts'>
        <div className='blog-post box'></div>
        <div className='blog-post box'></div>
        <div className='blog-post box'></div>
      </div>
      <div className='recent-button'>
        <Link to='/posts'>
          <div className='button'>
            More content here
          </div>
        </Link>
        </div>
    </div>
  )
}

export default Recent
