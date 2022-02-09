import React from "react";
import { Link } from "react-router-dom";
const NavBarr = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item navClass">
         <Link to="/saga" style={{color:"black"}}>SagaExample</Link>
        </li>
        <li class="nav-item navClass" style={{marginLeft: "5px"}}>
         <Link to="/psaga" style={{color:"black"}}>PhotoSaga</Link>
        </li>
        
        <li class="nav-item navClass" style={{marginLeft: "5px"}}>
         <Link to="/" style={{color:"black"}}>Home</Link>
        </li>
        <li class="nav-item navClass" style={{marginLeft: "5px"}}>
         <Link to="/dashboard" style={{color:"black"}}>Dashboard</Link>
        </li>
        <li class="nav-item navClass" style={{marginLeft: "5px"}}>
         <Link to="/interview" style={{color:"black"}}>Interview Prepration</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBarr;
