import React, { useState } from 'react'
import Datacontext from './datacontext'

export const datastate = (props) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

  return (
    <Datacontext.Provider value={{ cart, setCart, products, setProducts }}>{props.children}</Datacontext.Provider>
  )
}
