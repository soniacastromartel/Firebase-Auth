import React from "react";
import {Link} from 'react-router-dom'

export const Menu = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to="/">Inicio</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
