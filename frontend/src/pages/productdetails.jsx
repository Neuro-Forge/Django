import React, { useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Datacontext from '../context/datacontext'
import { Products } from '../components/products'

export const Product_details = () => {
  const { id } = useParams()
  const { products: allProducts } = useContext(Datacontext) || {}

  const product = useMemo(() => {
    if (!allProducts) return null

    const numericId = Number(id)
    const productList = Array.isArray(allProducts) ? allProducts : []

    return (
      productList.find((p) => {
        const pid = p?.id ?? p?._id
        return pid !== undefined && pid !== null && Number(pid) === numericId
      }) || null
    )
  }, [allProducts, id])

  const relatedProducts = useMemo(() => {
    if (!product || !allProducts) return []
    return allProducts
      .filter((p) => p.id !== product.id)
      .filter((p) => (p.category || '').toLowerCase() === (product.category || '').toLowerCase())
      .slice(0, 8)
  }, [product, allProducts])

  if (!product) {
    return (
      <div className="container mt-5">
        <h2>Product Details</h2>
        <p>Product not found.</p>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 ">
          <img src={product.imgSrc} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p className="">Category: {product.category}</p>
          <p className="fs-4">₹{product.price}</p>
          <p>{product.description}</p>
          <div className="flex-row-1 mb-3">
          <button type="button" className="btn btn-primary btn-lg me-2 ">Buy Now</button>
          <button type="button" className="btn btn-secondary btn-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <h3 className="mt-5 display-40 fw-bold justify-content-center text-center text-decoration-underline">Related Products</h3>
      <Products items={relatedProducts} />
    </div>
  )
}

