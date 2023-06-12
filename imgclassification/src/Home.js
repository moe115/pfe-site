import React from 'react';
import './home.css';
import {Link } from 'react-router-dom'; // Assuming you're using React Router

function Home() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="container">

      <Link  to="/AnimalPage">
        <div className="head">
          <div className="ears">
            <div className="ear ear-l"></div>
            <div className="ear ear-r"></div>
          </div>
          <div className="eyes">
            <div className="eye eye-l">
              <div className="dot dot-l"></div>
              <div className="pupil pupil-l"></div>
            </div>
            <div className="noses">
              <div className="nose nose-l"></div>
              <div className="nose-main"></div>
              <div className="nose nose-r"></div>
            </div>
            <div className="eye eye-r">
              <div className="pupil pupil-r"></div>
              <div className="dot dot-r"></div>
            </div>
          </div>
        </div>
        <div className="legs">
          <div className="leg"></div>
          <div className="leg"></div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
