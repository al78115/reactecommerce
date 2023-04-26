import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cs = useSelector(store => store.cartStore)
  const cart = cs.cart_item.length
  return (
    <>

<nav className="navbar navbar-expand-lg bg-danger fixed-top mb-5">
  <div className="container-fluid ">
    <Link className="navbar-brand fw-bolder fs-3 mx-3" to="/">DAMI COLLECTION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5 ">
        <li className="nav-item">
          <Link className="nav-link active text-light me-4 fw-bolder " aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-light me-4 fw-bolder" to="/about">ABOUT</Link>
        </li>
        
        <li className="nav-item text-light">
          <Link className="nav-link text-light me-4 fw-bolder" to="/product">PRODUCT</Link>
        </li>
      
        <li className="nav-item text-light">
          <Link className="nav-link text-light me-4 fw-bolder" to="/contact">CONTACT</Link>
        </li>
        
            </ul>
            <div className="buttons ">
              <Link to='/signin' className=' btn btn-outline-dark fs-5 me-4'>
                <i className='fa fa-sign-in me-2'></i>Signin
              </Link>
              <Link to='/register' className='btn btn-outline-dark fs-5 me-4'>
                <i className='fa fa-user-plus me-2'></i>Register
              </Link>
              <Link to='/cart' className='btn btn-outline-dark fs-5 me-4'>
                <i className='fa fa-shopping-cart me-2'></i>Cart<sup>{ cart}</sup>
              </Link>

            </div>
     
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar