import { useState } from 'react'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Search_product } from "./pages/search"
import './App.css'
import { Navbar } from './components/navbar.jsx'
import Datacontext from './context/datacontext'
import { useContext } from 'react'
import { All_products } from './components/Allprodcut'
import { Cart } from './pages/cart'
import { Product_details } from './pages/productdetails'
import { Prodcut_bycategory } from './pages/productbycategory'
import { Trending_slider } from './components/trendingslide'
import { Card as Login } from './pages/login'
import Register from './pages/signup'

function App() {
  const context = useContext(Datacontext)
  console.log('App context:', context)

  return ( 
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<All_products/>}/>
        <Route path='/products' element={<All_products/>}/>
        <Route path ='cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<Product_details />} />
        <Route path='/product/category/:cat'element={<Prodcut_bycategory/>}/>
        <Route path='/product/search/:term' element={<Search_product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
      </Routes>
      {/* <Trending_slider/> */}
    </Router>
  )
}

export default App
