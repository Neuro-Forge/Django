import React, { useState, useEffect } from 'react'
import Datacontext from './datacontext'
import { items } from './data.js'
 import { ToastContainer, toast, Bounce} from 'react-toastify';
export const datastate = (props) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState(items)
    const  addtocart = (id, title, price, imgSrc) => {
        
      const obj = { id, title, price, imgSrc };
    
      toast.success('item added to cart successfully', {
         position: "top-left",
         autoClose: 1500,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
        transition: Bounce,
        });


      setCart([...cart, obj]);


    }
    // Log for debugging
    console.log('datastate - products:', products.length)
    console.log('datastate - setProducts:', typeof setProducts)
      
  return (
    <Datacontext.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
        addtocart,
      }}
    >
      {props.children}
    </Datacontext.Provider>
  )
}
