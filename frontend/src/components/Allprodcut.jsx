import React, { useContext } from 'react'
import Datacontext from '../context/datacontext'

export const All_products = (props) => {
  const { products } = useContext(Datacontext)
  
  console.log("my products:", products)

  return (
    <div>
      <h1>Product List</h1>
      {/* Check if products exists before mapping to avoid errors */}
      {products && products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  )
}
