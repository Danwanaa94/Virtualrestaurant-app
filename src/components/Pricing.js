import React from 'react'

function Pricing() {
  return (
    <div>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle show"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="true"
        >
        Pricing
        </a>
        <div class="dropdown-menu show" data-bs-popper="none">
          <a class="dropdown-item" href="#">
            50
          </a>
          <a class="dropdown-item" href="#">
            10
          </a>
          <a class="dropdown-item" href="#">
            15
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">
        30
          </a>
        </div>
      </li>
    </div>
  );
}

export default Pricing