import React from 'react'
import { useParams } from 'react-router-dom'

export const Product_details = () => {
  const { id } = useParams()
  return (
    <div className="container mt-5">
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  )
}