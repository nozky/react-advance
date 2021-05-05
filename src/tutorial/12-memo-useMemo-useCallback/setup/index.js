import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const IndexMemo = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  // functional method of changing state
  const addToCart =  useCallback(() => {
    console.log('add to cart')
    setCart((prevState) => prevState + 1)
  },[cart])


  const mostExpensive =  (products) => {
    console.count('Most expensive - re calc')
    return(
      products.reduce((total, item)=>{
        const price = item.fields.price
        if(price >= total){
          total = price
        }
        return total
      },0) / 100
    )
  }

  // optimization
  // useMemo in action // re calc only when prodocts state value is change
  const mostExpensiveMemo = useMemo(()=> mostExpensive(products),[products] )

  return (
        <>
          <h1>Memo useMemo</h1>
          <h2>Count : {count}</h2>
          <button className='btn' onClick={() => setCount(count + 1)}>
            Count
          </button>
          <h2 style={{marginTop: '3rem'}}>Cart: {cart}</h2>
          <h3>Most Expensive {mostExpensiveMemo}</h3>
        <BigList products={products} addToCart={addToCart}/>
    </>
  )
}

// every time props or state changes, component re-renders
//React.memo monitor props, if changes, trigger re-render
const BigList =  React.memo(({ products,addToCart }) => {

  useEffect(()=>{
    console.log('memo - calling BigList')
  })

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}  addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields,addToCart }) => {

  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  useEffect(()=>{
    console.count('single item called')
  })

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className='btn' onClick={()=>{ addToCart() }}>Add to Cart</button>
    </article>
  )
}

export default IndexMemo
