import React, { useContext, useEffect } from 'react'
import Datacontext from '../context/datacontext'
import { Products } from './products.jsx'
import './Products.css'
import { Videoplayer as Videopalyer } from './videoplayer.jsx'

export const All_products = (props) => {
  const { products: allProducts } = useContext(Datacontext)
  console.log('All_products context:', allProducts)
  
  return (
    <div className='products-container'>
     <Videopalyer src="https://images.samsung.com/is/content/samsung/assets/in/smartphones/galaxy-s25-ultra/videos/galaxy-s25-ultra-features-highlights-galaxy-ai-a_v3.webm?imbypass=true" /> 
      <Products items={allProducts} />
    </div>
  )
}
