import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
 <section className="jumbotron text-center my-4">
      <div className="container" id="it">
        <h1>About Us</h1>
        <p >Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <Link to="/" className="btn btn-primary my-2 mx-5">Learn More</Link>
          <Link to="/" className="btn btn-secondary my-2">Access More</Link>
        </p>
      </div>
      </section>
      <div className="album py-5 bg-light">
      <div className="container">
  
        <div className="row">
          
         
  
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="../Images/b.jpeg" alt="img" className="bd-placeholder-img card-img-top" width="100%" height="225"/>
              <div className="card-body">
                <p className="card-text bet" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">More</button>
                    
                  </div>
                  <small className="text-muted">❤️</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="../Images/c.jpeg" alt="img" className="bd-placeholder-img card-img-top" width="100%" height="225"/>

              <div className="card-body">
                <p className="card-text bet">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">More</button>
                                     </div>
                  <small className="text-muted">❤️</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="../Images/d.jpeg" alt="img" className="bd-placeholder-img card-img-top" width="100%" height="225"/>

              <div className="card-body">
                <p className="card-text bet">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">More</button>
                   
                  </div>
                  <small className="text-muted">❤️</small>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="../Images/e.jpg" alt="img" className="bd-placeholder-img card-img-top" width="100%" height="225"/>

              <div className="card-body">
                <p className="card-text bet">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">More</button>
                  
                  </div>
                  <small className="text-muted">❤️</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="../Images/f.jpeg" alt="img" className="bd-placeholder-img card-img-top" width="100%" height="225"/>

              <div className="card-body">
                <p className="card-text bet">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">More</button>
                  </div>
                  <small className="text-muted">❤️</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="../Images/g.jpeg" alt="img" className="bd-placeholder-img card-img-top" width="100%" height="225"/>

              <div className="card-body">
                <p className="card-text bet">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">More</button>
                  </div>
                  <small className="text-muted">❤️</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</div>

      <Footer/>
    </>
  )
}

export default About