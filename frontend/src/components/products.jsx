import React, { useContext } from 'react'
import { Link , useLocation} from 'react-router-dom'
import { shopbycategory as Shopbycategory } from './shopbycategory'
import Datacontext from '../context/datacontext'
import { ToastContainer, toast, Bounce} from 'react-toastify';
export const Products = ({items}) => {
  
  const {addtocart} = useContext(Datacontext)
  
  const { pathname } = useLocation()
  return (
    <>
    <ToastContainer/>
    {(pathname === '/' || pathname === '/products') && <Shopbycategory />}
      
      <div className='container my-5'>
        <div className='row d-flex justify-content-center'>
        {items?.map((product, index) => (
          <div 
            key={product.id || index} 
            className='col-lg-3 col-md-6 col-sm-6 my-3 d-flex justify-content-center align-items-center'>
            
            <div className='card product-card h-100'>
              <Link to={`/product/${product.id}`} className='image-container'>
                <img 
                  src={product.imgSrc} 
                  alt={product.title}
                  className='card-img-top' 
                /> 
              </Link>
              <div className='card-body d-flex flex-column background-light'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text flex-grow-1'>{product.description?.substring(0, 100)}...</p>
                <div className='rating mt-auto'>
                  <span className='badge bg-warning'>★★★★☆ (4.5)</span>
                </div>
                <p className='price mb-2'>₹{product.price}</p>
                <button type="button" className="btn btn-primary btn-sm gap-2"> Buy now</button>
                <button type="button" className="btn btn-secondary btn-sm" 
                onClick={() => addtocart(product.id, product.title, product.price, product.imgSrc)}
                >Add to cart</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}
