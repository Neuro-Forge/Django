import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Datacontext from '../context/datacontext'
import styled from 'styled-components';
export const Cart = () => {

  const { cart } = useContext(Datacontext)

  return (
    <div className='container my-5'>

      {cart.length === 0 ? (
        <div className='text-center'>
          <h1>Your cart is empty</h1> 
          <Link to='/' className='btn btn-warning mt-3'>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <h1 className='row  d-flex justyfy-content-center '>
            {cart.map((product) => <div key={product.id} className='col-lg-8 col-md-10 my-3'>
                <div className='card card-card'>
                  <div className="row g-0 align-items-center">
                    <div className="col-md-4 d-flex justify-content-center">
                      <img src={product.imgSrc} alt="w" className="card-img" />
                    </div>
                  </div>
                    <div className="col-md-6">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">Price: ₹{product.price}</p>
                        <button className="btn btn-danger btn-sm">Remove</button>
                      </div>
                    </div>
                </div>

            </div>)}
          </h1>
        </div>
      )}

    </div>
  )
}