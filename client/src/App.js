import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { Home } from "./views/Home/Home"
import { Shop } from './views/Shop/Shop'
import Media   from "./components/Media/Media"
import NotFound from "./views/NotFound"
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container'
import Navigation from "./components/Navigation/Navigation"
import Section from "./components/Navigation/Section"

import './App.css'
import AdminPortal from './views/Admin/AdminPortal';


const App = () => {
  return (
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path='/Shop' component={Shop} />
        <Route exact path='/AdminPortal' component={AdminPortal} />
        <Route component={NotFound}/>
      </Switch>
  );
}

export default App;
