import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Navbar =(props)=> {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        
         
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">Contact</NavLink>
              </li>
             
            </ul>
           
          </div>
          <Link to="user/add" className="btn btn-outline-light">Add User</Link>
        </div>
      </nav>
    );
}

export default Navbar
