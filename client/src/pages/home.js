import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Product from '../components/product';

class home extends Component {
  state = {
    products: null
  };
  componentDidMount() {
    axios
      .get('/products')
      .then((res) => {
        this.setState({
          products: res.data
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentProductsMarkup = this.state.products ? (
      this.state.products.map((product) => (
        <Product key={product.productId} product={product} />
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentProductsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;