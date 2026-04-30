import React, { useState, useEffect } from 'react'
import Datacontext from './datacontext'
import { items } from './data.js'

export const datastate = (props) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState(items)

    // Log for debugging
    console.log('datastate - products:', products.length)
    console.log('datastate - setProducts:', typeof setProducts)

  return (
    <Datacontext.Provider value={{ 
      cart, 
      setCart, 
      products, 
      setProducts 
    }}>
      {props.children}
    </Datacontext.Provider>
  )
}
