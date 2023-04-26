import React, { useEffect, useState } from 'react'
import Items from './Items'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'


const Products = () => {
  const [posts, setPost] = useState([])
  const [filter,setFilter]= useState("")
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
      .then(json => {
              if(filter==""){setPost(json)}else{
              setPost(json.filter(item=>item.category.toUpperCase()==(filter.toUpperCase())))}
              console.log(posts,filter)
        })
    
  },[filter])
  
  return (


    <>
        <div className="container py-2 my-5">
       <div className="row justify-content-center">
         <div className="buttons d-flex justify-content-center my-5 ">
            <button className="btn btn-outline-danger me-4 " onClick={() => {
              setFilter("")
          }}>All</button>
            <button className="btn btn-outline-danger me-4 " onClick={() => { setFilter("men's clothing")}} >Men's clothing</button>
          <button className="btn btn-outline-danger me-4 " onClick={() => { setFilter("women's clothing")}} >Women's clothing</button>
          <button className="btn btn-outline-danger me-4 " onClick={() => { setFilter("electronics")}}>Electronic</button>
          <button className="btn btn-outline-danger me-4 "onClick={() => { setFilter("jewelery")}} >Jewelery</button>
        </div>
        </div>

        

        <div className="row row-cols-1 row-cols-md-4 g-5  py-2">
      {

        posts.map((e) => {
          return <Items e={ e} />
        })
        }
        </div>
        </div>


    </>
  )
}

export default Products