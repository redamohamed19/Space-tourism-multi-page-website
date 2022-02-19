import React from 'react';
import '../css/style.css';
import { render } from 'react-dom';
import logo from '../imgs/shared/logo.svg';
const App = () => {
  const openandclose = () => {
    console.log('hello');
    document.getElementById('menu').classList.toggle('close_navbar');
    document.getElementById('menu').classList.toggle('open_navbar');
  };
  return (
    <nav>
      <img src={logo} className="logo" />
      <div className="co_nav">
        <div className="line"></div>
        <ul className="navbar">
          <li>
            <a>
              <span>00 </span> HOME
            </a>
          </li>
          <li>
            <a>
              <span>01 </span> DESTINATION
            </a>
          </li>
          <li>
            <a>
              <span>02 </span> CREW
            </a>
          </li>
          <li>
            <a>
              <span>03 </span> TECHNOLOGY
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <div className="menu" onClick={openandclose}></div>
        <ul className="res_navbar close_navbar" id="menu">
          <li>
            <a>
              <span>00 </span>HOME
            </a>
          </li>
          <li>
            <a>
              <span>01 </span>DESTINATION
            </a>
          </li>
          <li>
            <a>
              <span>02 </span>CREW
            </a>
          </li>
          <li>
            <a>
              <span>03 </span>TECHNOLOGY
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

render(<App />, document.getElementById('root'));
