import React from 'react'
import './team.css'
import '../../app.css'
import template from './assets/template.jpeg'
import Fade from 'react-reveal/Fade';

const Team = () => {
  return (
    <Fade bottom>
    <div className='team-box box'>
        <h2 className='margin-bottom-1'> Meet the team! </h2>
        <h3 className='margin-bottom-1'> Mentors </h3>
        <div className='mentors-box margin-bottom-1'>
            <div className='card'>
                <img src={template}></img>
                <p > Matej Strnad</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p > Miha Brezovnik</p>
            </div>
            </div>
        <h3 className='margin-bottom-1'> Students </h3>
        <div className='students-box'>
            <div className='card'>
                <img src={template}></img>
                <p > Luka Petravić </p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p > Rok Miklič</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p> Evgenija Burger</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p> Tilen Pintarič</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p> Eva Poljanšek</p>
            </div>
            <div className='card'> 
                <img src={template}></img>
                <p> Urša Keše</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p> Domen Kulovec</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p> Miguel Faria Lopes</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p> Gašper Tomšič</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p> Ema Turnšek</p>
            </div>
            <div className='card'>
                <img src={template}></img>
                <p> Gašper Šircelj</p>
            </div>
        </div>
      
    </div>
    </Fade>
  )
}

export default Team
