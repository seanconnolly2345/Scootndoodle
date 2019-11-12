import React from 'react'
import Footer from '../../components/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import './Cart.css'

export const Cart = () => (
<Container className = 'container'>
	<div>
	<nav>
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/Home">Home</a></li>
		<li class="breadcrumb-item "><a href="/ShopPreview">Shop</a></li>
        <li class="breadcrumb-item active"><a href="#">Cart</a></li>
    </ol>
</nav>
	 <h1>
		 Your Cart</h1>
		 <hr/>

		 <table class="table table-sm">

  <tbody>
    <tr>
      
      <td>Product</td>
      <td>Color</td>
      <td>Size</td>
	  <td>Quantity</td>
	  <td>Price</td>
    </tr>
    <tr>
      <th scope="row">Hippo</th>
      <td>Green</td>
      <td>Medium</td>
      <td>1</td>
	  <td>9.95</td>
    </tr>


  </tbody>
</table>

		 <Link to="/CustomerInfo">
  <button className="button" type="button">Proceed to Checkout</button>
  </Link>
	</div>
</Container>
)
