import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
      <Navbar/>
      <div className="container-fluid text-center py-5 my-5">
        <main className="form-signin w-25 my-5 m-auto border border-3 border-danger p-3 rounded-4 ">
          <form>
            <img
              className="mb-4 rounded-circle "
              src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              width="72"
              height="60"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating ">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            Don't have an account?Please <Link to="/register">Register</Link>
            <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
          </form>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Signin