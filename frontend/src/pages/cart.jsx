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
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Shopping Cart</h1>
      <button onClick={fetchCart} style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Refresh Cart
      </button>
      {!cart || cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Total items: {cart.length}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {cart.map((item) => (
              <div key={item.id || item.product_id} style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {item.product_imgSrc && (
                  <img 
                    src={item.product_imgSrc} 
                    alt={item.product_title} 
                    style={{ 
                      width: '100%', 
                      height: '250px',
                      objectFit: 'cover',
                      backgroundColor: '#f0f0f0'
                    }} 
                  />
                )}
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '16px', margin: '0 0 10px 0', minHeight: '40px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                    {item.product_title || item.title}
                  </h3>
                  <p style={{ color: '#666', margin: '5px 0', fontSize: '13px', minHeight: '36px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                    {item.product_description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#28a745', margin: 0 }}>₹{item.product_price}</p>
                    <div style={{ backgroundColor: '#f0f0f0', padding: '5px 10px', borderRadius: '4px', fontSize: '14px' }}>Qty: {item.quantity || 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

}

const StyledWrapper = styled.div`
  /* ALL OF YOUR CSS GOES HERE */
`;

export default Cart;