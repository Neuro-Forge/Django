import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Datacontext from '../context/datacontext'
import styled from 'styled-components'
import axios from 'axios'

export const Cart = () => {

  const { cart, setCart } = useContext(Datacontext)

  const fetchCart = async () => {
    const username = localStorage.getItem('username')

    if (!username) {
      console.warn('Cannot fetch cart: username not found in localStorage')
      setCart([])
      return
    }

    try {
      console.log('Fetching cart for user:', username)
      const response = await axios.get(
        "http://127.0.0.1:8000/api/Cart/",
        {
          params: { username },
          withCredentials: true,
        }
      )

      console.log('Cart items fetched:', response.data)
      setCart(response.data)

    } catch (error) {
      console.error("Cart fetch error:", error.response?.data || error.message)
      setCart([])
    }
  }

  useEffect(() => {
    fetchCart()
  }, [setCart])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <button onClick={fetchCart} style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Refresh Cart
      </button>
      {!cart || cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <p>Total items: {cart.length}</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id || item.product_id} style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px' }}>
                <strong>{item.product_title || item.title}</strong>
                <p>Product ID: {item.product_id}</p>
                <p>Quantity: {item.quantity || 1}</p>
                {item.product_price && <p>Price: ₹{item.product_price}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

}

const StyledWrapper = styled.div`
  /* ALL OF YOUR CSS GOES HERE */
`;

export default Cart;