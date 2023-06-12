import React from 'react';
import {Link } from 'react-router-dom'; // Assuming you're using React Router

import './Header.css'; // Import the CSS file

const Navbar = () => {
 
  return ( 
    <nav>
      <ul>

      <li>
       <div className='homenav'>
       <Link  to="/">
        home
          
       </Link></div>
       </li>


        <li>
{/*        
        <Link  to="/AnimalPage">
         animal
           
        </Link>
        </li>
        <li>
        <Link  to="/flower">
        flower
           
        </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
