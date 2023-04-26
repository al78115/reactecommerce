import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Item = () => {
  let { id } = useParams()
  const [post, setPost] = useState({})
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setPost(json)
    })
  }, [])
  const dispatch= useDispatch()
  
  const addCart = () => {
    let cart_item = {
      id: Date.now(),
      product:post
    }
    dispatch({ type: "ADD_TO_CART", payload: cart_item })
        toast.success('Item Added Successfully')

  }
  
  
  return (
    <>
      <Navbar/>
      <div className="container d-flex justify-content-center my-5 py-5 ">
        <ToastContainer className="mt-5"
position="top-right"
autoClose={200} />
          <div className="col-md-6">
          <img src={ post.image} alt={post.title} height="400px" width='400px'/>
        </div>
        <div className="col-md-6">
          <h4 className='text-uppercase text-black-50'>{ post.category}</h4>
        <h1 className='display-5'>{post.title}</h1>
        <p className='lead fw-border '>
          Rating:{post.rating && post.rating.rate}
          <i className='fa fa-star mx-3'></i>
          </p>
          <h3 className='display-6 fw-bold my-4'>
            ${post.price}
          </h3>
          <p className="lead">{post.description}</p>
          
          <button className="btn btn-outline-danger me-5" onClick={addCart} >Add to Cart</button>
          <Link to='/cart'><button className="btn btn-outline-danger">Go to Cart</button></Link>
        </div>
      </div>
      <Footer/>
        
    </>
  )
}

export default Item