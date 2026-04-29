import React, { useContext, useEffect } from 'react'
import Datacontext from '../context/datacontext'

export const All_products = (props) => {
  const context = useContext(Datacontext)
  const { products } = context || {}
  
  useEffect(() => {
    console.log("my products:", products)
  }, [products])

  return (
    <div style={{ display: 'none' }}>
      <h1>Product List</h1>
    </div>
  )
}
