import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Datacontext from '../context/datacontext'
import styled from 'styled-components';
import axios from 'axios'

export const Cart = () => {

  // CHANGED HERE
  const { cart, setCart } = useContext(Datacontext)

  useEffect(() => {

  const fetchCart = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/Cart/",
        {
          withCredentials: true,
        }
      )

      setCart(response.data)

    } catch (error) {

      console.log("Cart fetch error:", error)

    }

  }

  fetchCart()

}, [])

  return (
    <div className='container my-5'>

      {cart.length === 0 ? (

        <div className='text-center'>

          <StyledWrapper>

            <div
              aria-label="Cartoon of a smiling koala"
              role="img"
              className="article"
            >

              <div className="body">

                <div className="shadow" />

                <div className="chest">

                  <div className="leg" />
                  <div className="leg" />

                  <div className="arm" />
                  <div className="arm" />

                </div>

              </div>

              <div className="head">

                <div className="ear" />
                <div className="ear" />

                <div className="face">

                  <div className="eye" />
                  <div className="eye" />

                  <div className="nose" />

                  <div className="cheek" />
                  <div className="cheek" />

                  <div className="mouth" />
                  <div className="hair" />

                </div>

              </div>

            </div>

          </StyledWrapper>

          <h1 className='mt-3'>Your cart is empty</h1>

          <Link
            to='/'
            className='btn btn-warning mt-3'
          >
            Continue Shopping
          </Link>

        </div>

      ) : (

        <div>

          <h1 className='row d-flex justify-content-center'>

            {cart.map((product) => (

              <div
                key={product.id}
                className='col-lg-8 col-md-10 my-3'
              >

                <div className='card card-card'>

                  <div className="row g-0 align-items-center">

                    <div className="col-md-4 d-flex justify-content-center">

                      <img
                        src={product.imgSrc}
                        alt="w"
                        className="card-img"
                      />

                    </div>

                    <div className="col-md-6">

                      <div className="card-body text-center">

                        <h5 className="card-title">
                          {product.title}
                        </h5>

                        <p className="card-text">
                          Price: ₹{product.price}
                        </p>

                        <button className="btn btn-danger btn-sm">
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </h1>

        </div>

      )}

    </div>
  )
}

const StyledWrapper = styled.div`

  .article {
    --fur: #aac;
    --detail: #222;

    position: relative;
    font-size: 1vmin;
    width: 80em;
    aspect-ratio: 1;

    transform: scale(0.5);

    animation: floating 5s ease-in-out infinite;

    margin: auto;

    pointer-events: none;
  }

  .body,
  .shadow,
  .chest,
  .arm,
  .leg,
  .head,
  .ear,
  .face,
  .eye,
  .nose,
  .cheek,
  .mouth,
  .hair {
    position: absolute;
    box-sizing: border-box;
  }

  .body {
    width: 63%;
    height: 45%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  }

  .shadow {
    width: 120%;
    height: 33%;
    background: radial-gradient(#0009, #0000 50%);
    border-radius: 50%;
    bottom: 2%;
    left: 53%;
    transform: translate(-50%, 14%);
    filter: blur(1.2em);
  }

  .chest {
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100% / 155% 155% 56% 56%;
    width: 60%;
    height: 90%;
    background: var(--fur);
  }

  .arm {
    width: 30%;
    height: 70%;
    border-radius: 100% / 100% 20% 40% 100%;
    bottom: 7%;
    left: 0;
    background: var(--fur);
  }

  .arm ~ .arm {
    right: 3%;
    left: auto;
  }

  .leg {
    width: 53%;
    height: 40%;
    bottom: 0;
    left: -8%;
    border-radius: 10em 90% 40% 10em;
    background: var(--fur);
  }

  .leg ~ .leg {
    right: 0;
    left: auto;
  }

  .head {
    width: 63%;
    height: 59%;
    left: 50%;
    top: 5%;
    transform: translateX(-50%);
  }

  .ear {
    top: 20%;
    left: -5%;
    width: 55%;
    aspect-ratio: 1;
    background: pink;
    border-radius: 50%;
  }

  .ear ~ .ear {
    right: -5%;
    left: auto;
  }

  .face {
    inset: 0;
    border-radius: 100% / 128% 130% 70% 70%;
    background: var(--fur);
  }

  .eye {
    width: 16%;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 57%;
    left: 26%;
    background: var(--detail);
  }

  .eye ~ .eye {
    right: 26%;
    left: auto;
  }

  .nose {
    width: 22%;
    height: 35%;
    top: 62%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background: var(--detail);
  }

  .mouth {
    width: 14%;
    aspect-ratio: 2.5;
    border-radius: 50%;
    border: 0.5em solid #900;
    border-top: 0;
    top: 83%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .cheek {
    width: 20%;
    height: 14%;
    border-radius: 50%;
    top: 75%;
    left: 18%;
    background: pink;
  }

  .cheek ~ .cheek {
    right: 18%;
    left: auto;
  }

  .hair {
    width: 15%;
    height: 6%;
    background: var(--fur);
    border-radius: 50%;
    left: 50%;
    top: -4%;
    transform: translateX(-50%);
  }

  @keyframes floating {

    0% {
      transform: translateY(50px) scale(0.5);
    }

    50% {
      transform: translateY(0px) scale(0.5);
    }

    100% {
      transform: translateY(50px) scale(0.5);
    }

  }

`;

export default Cart;