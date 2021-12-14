import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Navigation.css'
const Navigation = () => {
    const {user,logout}=useAuth()
    return (
        <div>

<nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div class="container">
              <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">  <img src="" alt="" width="50" height="49" class="d-inline-block align-text-top "/>
                <span class="ms-3 ">portfolio</span></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse "  id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto   d-flex align-items-center">
                  <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="#home">Home</a> */}
                    <Link className="nav" to="/">Home</Link>
                  </li>
                
                 
                   <li class="nav-item">
                   {
                     user.email?<button className="log" onClick={logout}>Logout</button>:
                     <Link className="nav" to="/login">Login</Link>
                   }
                  </li> 
                  


                
                </ul>
               
              </div>
            </div>
          </nav>
            
        </div>
    );
};

export default Navigation;