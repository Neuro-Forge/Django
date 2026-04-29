import { useState } from 'react'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Search_product } from "./pages/search"
import './App.css'
import { Navbar } from './components/Navbar'
import { All_products } from './components/Allprodcut'
import { Cart } from './pages/cart'
import { Product_details } from './pages/productdetails'
import { Prodcut_bycategory } from './pages/productbycategory'
import { Trending_slider } from './components/trendingslide'
function App() {
  

  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path ='cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<Product_details />} />
        <Route path='/product/category/:cat'element={<Prodcut_bycategory/>}/>
       <Route path='/product/search/:term' element={<Search_product/>} />

      </Routes>
      {/* <Trending_slider/> */}
    </Router>
  )
}

export default App
