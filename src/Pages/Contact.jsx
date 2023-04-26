import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">

          <div className="py-4">
            <h1 className="text-center fw-bolder fs-1 ">Contact Us</h1>
          </div>
    
          <div className="w-50 m-auto ">
            <form  className='border shadow'>
              <div className="form-group text-center">
                <label for="name" className="user-name fw-bolder fs-3 ">Username</label>
                <input type="text" name="user" id='name' autocomplete="off" className="form-control mb-3"/>
              </div>
              <div className="form-group text-center">
                <label className="user-name fs-3  fw-bolder ">Email</label>
                <input type="text" name="email" autocomplete="off" className="form-control mb-3"/>
              </div>
              <div className="form-group text-center ">
                <label  className="user-name fs-3 fw-bolder">Mobile No. </label>
                <input type="text" name="mobile" autocomplete="off" className="form-control mb-3"/>
              </div>
              <div className="form-group text-center">
                <label  className="user-name fs-3 fw-bolder">Comments</label>
               <textarea name="comments" className="form-control mb-3"></textarea>
              </div >
              <div className="text-center text-center my-3">
              <button type="submit" className="btn btn-success fw-bolder fs-3 mb-3"> Submit</button>
            </div>
            </form>
          </div>
         </div>

      <Footer/>
    </>
  )
}

export default Contact