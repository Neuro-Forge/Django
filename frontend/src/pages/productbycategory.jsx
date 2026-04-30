import React from 'react'
import { useParams } from 'react-router-dom'
import { Videoplayer } from '../components/videoplayer'
import { Products } from '../components/products'
import { Videos } from '../context/data'
import { items} from '../context/data'


export const Prodcut_bycategory = () => {
  const { cat } = useParams()


  // const videosbycategory = videos.find(vid => vid.category.toLowerCase() === cat.toLowerCase());
  // console.log('videobycategory:',videosbycategory)
  // const productsbycategory = items.filter(pro => pro.category.toLowerCase() === cat.toLowerCase())
  return (
    <div className="container mt-5">
      <Videoplayer src={videosbycategory} />
      <products items={productsbycategory} />
    </div>
  )
} 