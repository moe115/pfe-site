import React from 'react';
import {useNavigate,Link } from 'react-router-dom'; // Assuming you're using React Router

import './Header.css'; // Import the CSS file

const Navbar = () => {
const navigate = useNavigate();
  return ( 
    <nav>
      <ul>

      <li>
       
       <Link  to="/">
        home
          
       </Link>
       </li>


        <li>
       
        <Link  to="/AnimalPage">
         animal
           
        </Link>
        </li>
        <li>
        <Link  to="/flower">
        flower
           
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
