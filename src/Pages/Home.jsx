import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'

const Home = () => {
  return (
    <>
    
      <Navbar />
      <div className="container my-5 py-5">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="../Images/watch.jpg" className="d-block w-100" alt="..."/>
     
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="../Images/watch1.jpg" className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src="../Images/watch3.jpg" className="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
        </div>
      </div>


      
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <h1 className='fw-bolder display-6 '>LATEST PRODUCT</h1> 
            <hr />
          </div>
        </div>
      </div>
      
      <Products/>


      <Footer/>
      
    
    </>
  )
}

export default Home