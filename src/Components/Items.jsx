import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({ e}) => {
  return (
    <>
      
     
  <div className="col">
    <div className="card">
            <img src={ e.image} className="card-img-top" alt={e.title } height="250px"/>
      <div className="card-body">
        <h5 className="card-title">{e.id}</h5>
        <h5 className="card-title">{e.title.slice(0,20)}</h5>
            <p className="card-text">
              {e.description.slice(0,83)}
            </p>

          </div>
                <Link to={`/products/${e.id}`} className="btn btn-outline-danger">Buy now</Link>
    </div>
  </div>

      
    </>
  )
}

export default Items