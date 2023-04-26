import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'

const Cart = () => {
  const dispatch = useDispatch()
  const cs = useSelector(store => store.cartStore)
  const cart = cs.cart_item
  return (
    <>
      <Navbar/>
      <div className="container  my-5 py-5">
     <div class="container-fluid text-center">
          <table class="table  table-bordered  table-hover border-dark border-3 align-middle ">

 <thead >
<tr className='table-active fs-5'>
    <th>Product ID</th>
    <th>Product Image</th>
    <th>Quantity</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Total Price</th>
    <th>Action</th></tr>
</thead>


            <tbody>
          {
            cart.map((item) => {
              return <tr>
            <td>{item.id }</td>
  <td><img src={item.product.image} alt="" height="120px"/> </td>
  <td>1</td>
            <td>{ item.product.category}</td>
                  <td>  $ {item.product.price}</td>
                <td>
                 $ {item.product.price}
                </td>
  <td>
              <button className="btn btn-outline-danger" onClick={() => {
                dispatch({type:"REMOVE_CART",payload:item.id})
   }}>Remove</button>
  </td>
              </tr>
           
            })
          }

   </tbody>


    </table>
</div>
      </div>
      <Footer/>
      </>
  )
}

export default Cart