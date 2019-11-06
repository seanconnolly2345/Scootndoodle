import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { Home } from "./views/Home/Home"
import { Shop } from './views/Shop/Shop'
import Media   from "./components/Media/Media"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container'


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path='/Shop' component={Shop} />
        <Route exact path="/Media" component={Media} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
