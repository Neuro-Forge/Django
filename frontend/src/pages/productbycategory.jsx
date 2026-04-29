import React from 'react'
import { useParams } from 'react-router-dom'

export const Prodcut_bycategory = () => {
  const { cat } = useParams()
  return (
    <div className="container mt-5">
      <h2>Products by Category</h2>
      <p>Category: {cat}</p>
    </div>
  )
}