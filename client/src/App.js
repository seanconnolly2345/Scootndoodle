import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { Home } from "./views/Home/Home"
import { Shop } from './views/Shop/Shop'
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container'

import './App.css'


const App = () => {
  return (
    <div className='page-container'>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path='/Shop' component={Shop} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
