import React, { useContext, useEffect, useState } from 'react'
import Datacontext from '../context/datacontext'
import { Products } from './products.jsx'
import './Products.css'
import { Videoplayer as Videopalyer } from './videoplayer.jsx'
import { Videos } from '../context/data'

export const All_products = (props) => {
  const { products: allProducts } = useContext(Datacontext)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  // Rotate videos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % Videos.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Get the current video to display
  const currentVideo = Videos[currentVideoIndex]
  
  console.log('All_products context:', allProducts)
  console.log('Current video:', currentVideo)
  
  return (
    <div className='products-container'>
      {/* Display rotating category video */}
      {currentVideo && (
        <Videopalyer 
          src={currentVideo.url} 
          fallbackMessage={`${currentVideo.name} - Featured Products`}
        />
      )}
      
      {/* Show category label */}
      <div className="text-center my-3">
        <h2 className="text-light">
          {currentVideo ? `${currentVideo.name} Products` : 'All Products'}
        </h2>
        <p className="text-muted">
          Browse our amazing collection of products
        </p>
      </div>
      
      <Products items={allProducts} />
    </div>
  )
}
