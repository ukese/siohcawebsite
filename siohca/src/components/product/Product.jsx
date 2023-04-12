import React from 'react'
import './product.css'
import formPhoto from '../../assets/img/form.png'



function Product() {
  return (
    
    <div className='product'>
      <div className='product-image'>
        <img src={formPhoto} alt='form'/>
      </div>
      <div className='product-text'>
        <h1 className='margin-bottom-2'>Product</h1>
        <p>Based on the Utstein model of reporting</p>
        <p> we design a digital and ready-to-print form with a modern and user friendly UI</p>
       
      </div>
    </div>
  )
}

export default Product
