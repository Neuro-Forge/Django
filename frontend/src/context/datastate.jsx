import React, { useState, useEffect } from 'react'
import Datacontext from './datacontext'
import { items } from './data.js'

export const datastate = (props) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
      setProducts(items)
    }, [])

  return (
    <Datacontext.Provider value={{ cart, setCart, products, setProducts }}>{props.children}</Datacontext.Provider>
  )
}
