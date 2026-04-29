import React, { useContext, useState } from 'react'
import {FaMobileAlt,FaLaptop,FaTablet,
    FaClock,FaThLarge,FaRubleSign,
    FaRupeeSign} from 'react-icons/fa'

import Datacontext from '../context/datacontext'
import {items} from '../context/data'


const products = [
    {name:'Mobiles',icon:<FaMobileAlt size={30} color='blue'/>},
    {name:'Laptops',icon:<FaLaptop size={30} color='blue'/>},
    {name:'Tablets',icon:<FaTablet size={30} color='blue'/>},
    {name:'Watches',icon:<FaClock size={30} color='blue'/>},
    {name:'Accessories',icon:<FaThLarge size={30} color='blue'/>},
    {name:'Offers',icon:<FaRubleSign size={30} color='blue'/>}
]

const price = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]
export const shopbycategory = () => {
    const {setproducts} = useContext(Datacontext)

    const [selectedprice, setSelectedprice] = useState(10000)
    const  filterbycategory = (cat) =>{
        setproducts(items.filter(pro =>pro.category.toLowerCase() === cat.toLowerCase()))

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
