import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './RoutingComponents/Pages/Home';
import About from './RoutingComponents/Pages/About';
import Contact from './RoutingComponents/Pages/Contact';
import Navbar from './RoutingComponents/Layout/Navbar';
import NotFound from './RoutingComponents/Pages/NotFound';
import AddUser from './RoutingComponents/User/AddUser';
import EditUser from './RoutingComponents/User/EditUser';

class App extends Component {

  state = {
    userInput : ''
  }


  render(){

   
      return (

        <div className="App">
          <Router>
         
          <Navbar />
          
              
            <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/user/add" component={AddUser} />
             <Route exact path="/user/edit/:id" component={EditUser} />
              <Route component={NotFound} />
            </Switch>
         </Router>
        </div>
      );
  }
}

export default App;
