import React, { useContext, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import Datacontext from '../context/datacontext'
import { ToastContainer } from 'react-toastify'

export const Search_product = () => {
  const { term } = useParams()
  const { products: allProducts, addtocart } = useContext(Datacontext) || {}

  const normalized = (term || '').trim().toLowerCase()

  const results = useMemo(() => {
    const list = Array.isArray(allProducts) ? allProducts : []
    if (!normalized) return []

    return list.filter((p) => {
      const title = (p?.title || '').toLowerCase()
      const description = (p?.description || '').toLowerCase()
      const category = (p?.category || '').toLowerCase()

      return (
        title.includes(normalized) ||
        description.includes(normalized) ||
        category.includes(normalized)
      )
    })
  }, [allProducts, normalized])

  return (
    <div className="container my-5">
      <ToastContainer />
      <h2 className="mb-3">Search results for: {term}</h2>

      {normalized && results.length === 0 && (
        <div className="mt-4">
          <p>No matching products found.</p>
        </div>
      )}

      {!normalized && <p>Type something in the search bar.</p>}

      {results.length > 0 && (
        <div className="row d-flex justify-content-center">
          {results.map((product, index) => (
            <div
              key={product.id || index}
              className="col-lg-3 col-md-6 col-sm-6 my-3 d-flex justify-content-center align-items-center"
            >
              <div className="card product-card h-100">
                <Link to={`/product/${product.id}`} className="image-container">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body d-flex flex-column background-light">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text flex-grow-1">
                    {product.description?.substring(0, 100)}...
                  </p>
                  <p className="price mb-2">₹{product.price}</p>
                  <div className="d-flex gap-3 mt-auto">
                    <button type="button" className="btn btn-primary btn-sm">
                      Buy now
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => addtocart(product.id, product.title, product.price, product.imgSrc)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

