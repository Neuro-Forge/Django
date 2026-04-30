import React, { useContext, useState } from 'react'
import {FaMobileAlt,FaLaptop,FaTablet,
    FaClock,FaThLarge,FaRubleSign,
    FaRupeeSign} from 'react-icons/fa'

import Datacontext from '../context/datacontext'
import {items} from '../context/data'


const products = [
    {name:'Mobiles',icon:<FaMobileAlt size={20} color='blue'/>},
    {name:'Laptops',icon:<FaLaptop size={20} color='blue'/>},
    {name:'Tablets',icon:<FaTablet size={20} color='blue'/>},
    {name:'Watches',icon:<FaClock size={20} color='blue'/>},
    {name:'All products',icon:<FaThLarge size={20} color='blue'/>},
]

const price = [30000,40000,50000,60000,70000,80000]
export const shopbycategory = () => {
    // Use setProducts (capital P) to match the context provider
    const {setProducts} = useContext(Datacontext)

    const [selectedprice, setSelectedprice] = useState(80000)
    
    // Filter products by category
    const filterbycategory = (cat) =>{
        // Handle "All products" case
        if (cat.toLowerCase() === 'all products' || cat.toLowerCase() === 'all') {
            setProducts(items)
        } else {
            setProducts(items.filter(pro =>pro.category.toLowerCase() === cat.toLowerCase()))
        }
    }
    
    // Filter products by price - fixed implementation
    const filterByPrice = (maxPrice) => {
        setSelectedprice(maxPrice)
        
        // Use the currently filtered products or all items
        const currentProducts = items.filter(pro => parseInt(pro.price) <= maxPrice)
        setProducts(currentProducts)
    }

  return (
    <div className="container bg-dark text-light my-4 p-4 rounded shadow-lg">
      <h3 className="text-center mb-3">Filter Products</h3>
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {products.map(({ name, icon }) => (
          <div
            key={name}
            className="d-flex align-items-center gap-2 px-3 py-2 rounded bg-secondary text-light fw-bold"
            style={{ cursor: "pointer", transition: "0.3s" }}
            onClick={() => filterbycategory(name)}
          >
            {icon} <span>{name}</span>
          </div>
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {price.map((value) => (
          <span
            key={value}
            className={`badge p-3 fw-bold ${
              selectedprice === value
                ? "bg-warning text-dark"
                : "bg-light text-dark"
            }`}
            style={{
              cursor: "pointer",
              transition: "0.3s",
              fontSize: "1rem",
              borderRadius: "10px",
            }}
            onClick={() => {
              filterByPrice(value);
            }}
          >
            <FaRupeeSign /> {value}
          </span>
                
                 ))}
                
            </div>
    </div>
  )
}
