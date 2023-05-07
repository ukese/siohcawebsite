import React from 'react'
import  './utstein.css'
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom";

const Utstein = () => {
  return (
    
      <div className='utstein'>
        <Fade bottom>

      <div className='utstein-text'>
        <div className='utstein-text-column'>
          <p className='margin-bottom-1'>
            <b>The Utstein Style</b> is a set of guidelines for <b>uniform reporting of cardiac arrest</b>.
          </p>
          <p className='margin-bottom-1'>It was first proposed for emergency medical services in <b>1991</b>. </p>
          <Link to='https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000000144'>
            <button>
              The complete consensus article.
            </button>
          </Link>
        </div>
          <div className='utstein-text-column'>
            <p className='margin-bottom-1'>The name derives from a <b>1990 conference</b> of the <b>European Society of Cardiology</b>, the <b>European Academy of Anesthesiology</b>, the <b>European Society for Intensive Care Medicine</b>, and related national societies, held at the Utstein Abbey on the island of Mosterøy, Norway.</p>
          </div>
      </div>
      <div className='utstein-title'>
        <h1 >Utstein 2015 OHCA </h1>
        <h3 className='margin-bottom-2'>reporting template </h3>
      </div>

    </Fade>
    </div>
  )
}

export default Utstein
