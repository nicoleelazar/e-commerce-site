import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/cart/Cart'
import Default from './components/Default'
import Modal from "./components/Modal";

function App() {
  return (
    // fragment replaces div that wraps all content
    <React.Fragment> 

      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>

      <Modal></Modal>
      
    </React.Fragment>


  );
}

export default App;
