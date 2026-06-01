import React, { useState, useEffect } from 'react'
import Datacontext from './datacontext'
import { items } from './data.js'
 import { ToastContainer, toast, Bounce} from 'react-toastify';
 import axios from "axios"
export const datastate = (props) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState(items)
  const  addtocart = async (id, title, price, imgSrc) => {
      const obj = { id, title, price, imgSrc };

      const addtocart = async (product) => {

  try {

    const token = localStorage.getItem("token")

    console.log("TOKEN:", token)

    const response = await axios.post(
      "http://127.0.0.1:8000/api/Cart/",
      {
        product_id: product.id,
        product_category: product.category,
        product_title: product.title,
        product_imgSrc: product.imgSrc,
        product_description: product.description,
        product_price: product.price
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    console.log(response.data)

  } catch (error) {

    console.log(error.response?.data)
    console.log(error.response?.status)
    console.log(error)

  }

}

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
