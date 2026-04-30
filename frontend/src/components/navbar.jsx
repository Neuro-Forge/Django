import React from 'react'
import { FaAmazon } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 stikey-top shadow'>
        <div className='contianer-fluid'>
           <Link to ='/' className='navbar-brand d-flex aligh-items-center'></Link>
           <FaAmazon className='fs-2 text-warning me-2'/>
           <span className='fs-2 fw-bold text-white '>Amazon</span>
        </div>

        <div className='d-flex mx-auto search-container'>
            <input type='search'className='form-control search-input' placeholder='Search for products, brands and more'/>
            <button className='btn btn-warning search-button'><CiSearch /></button>
        </div>

        <div className='d-flex align-items-center gap-3'>
            {/* <Link to='/product/search/' className='text-white text-decoration-none'>
                <CiSearch className='fs-4' />
            </Link> */}
            <Link to='/cart' className='text-white text-decoration-none position-relative card-btn'>
                <BsCart4 className='fs-4' />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                 <span className="visually-hidden">unread messages</span>
               </span>
            </Link>
            <form>
                <ul className='navbar-abv max-auto d-flex gap-2'>

                    {[ "Mobiles", "Fashion", "Electronics",  "Beauty"].map((item)=>
                     <ul key={item}>
                        <Link to={`/product/category/${item}`} className='nav-link text-white text-decoration-none categoty-link'>
                            {item}
                        </Link>
                     </ul>
                    )}  
                </ul>

            </form>
        </div>
    </div>
  )
}
