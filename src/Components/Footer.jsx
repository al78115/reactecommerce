import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

       <footer className="page-footer font-small special-color-dark py-1 bg-danger">

      <div className="container">
    
        <ul className="list-unstyled list-inline text-center my-2">
          <li className="list-inline-item">
            <Link className="btn-floating btn-fb mx-1 fs-2">
              <i className="fab fa-facebook-f  mx-2"> </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-tw mx-1 fs-2">
              <i className="fab fa-twitter mx-2 "> </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-gplus mx-1 fs-2">
              <i className="fab fa-google-plus-g mx-2"> </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-li mx-1 fs-2">
              <i className="fab fa-linkedin-in mx-2"> </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-dribbble mx-1 fs-2">
              <i className="fab fa-dribbble mx-2"> </i>
            </Link>
          </li>
        </ul>
        </div>
          <div class="footer-copy">
        <div class="copy-right text-center pt-1">
          <p class="text-light fs-4">Copyright © 2023. Am@N. All rights reserved.</p>
        </div>
      </div>
    
    </footer>
    
    </>
  )
}

export default Footer