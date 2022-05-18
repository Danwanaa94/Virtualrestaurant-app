import React from 'react'

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="restaurants">Restaurants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default NavBar