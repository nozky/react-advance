import React, { useState, useEffect } from 'react'
import {useFetch} from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const FetchExample = () => {
  
  // or deconstract
  const result = useFetch(url)
  const products = result.data
  const loading = result.loading

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data/custome hooks'}</h2>
      { products && <List products={products}/>}
    </div>
  )
}

const List =({products})=>{
  return(
    <>
      <div className="list-item">
        {
          products.map((product)=> {
            return(
              <p key={product.id}>{product.id}</p>
            )
          })
        }
      </div>
    </>
  )
}

export default FetchExample
