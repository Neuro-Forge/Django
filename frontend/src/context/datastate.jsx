import React, { useState, useEffect } from 'react'
import Datacontext from './datacontext'
import { items } from './data.js'
 import { ToastContainer, toast, Bounce} from 'react-toastify';
 import axios from "axios"
export const datastate = (props) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState(items)
  const addtocart = async (id, title, price, imgSrc) => {
      const username = localStorage.getItem('username')
      const obj = { id, title, price, imgSrc };

      if (!username) {
        console.warn('Cannot add to cart: username not found in localStorage. Please log in first.')
        toast.error('Please log in first', {
          position: 'top-left',
          autoClose: 1500,
          theme: 'dark',
        })
        return
      }

      try {
        const token = localStorage.getItem('token')

        console.log('Adding to cart for user:', username, 'product:', id)

        const response = await axios.post(
          'http://127.0.0.1:8000/api/Cart/',
          {
            username,
            product_id: id,
            product_title: title,
            product_imgSrc: imgSrc,
            product_price: price,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        console.log('Cart response:', response.data)
        setCart([...cart, obj])
        
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
        
      } catch (error) {
        console.error('Cart error:', error.response?.data || error.message)
        toast.error('Failed to add item to cart', {
          position: 'top-left',
          autoClose: 1500,
          theme: 'dark',
        })
        return
      }
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
