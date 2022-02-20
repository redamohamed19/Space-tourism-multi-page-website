import React from 'react';
import '../css/style.css';
import { render } from 'react-dom';
import logo from '../imgs/shared/logo.svg';
const App = () => {
  const openandclose = () => {
    console.log('hello');
    document.getElementById('menu').classList.toggle('close_navbar');
    document.getElementById('menu').classList.toggle('open_navbar');
    document.getElementById('spinner').classList.toggle('menunoclicked');
    document.getElementById('spinner').classList.toggle('menuclicked');
  };
  return (
    <div>
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
          <div
            className="menu menunoclicked"
            id="spinner"
            onClick={openandclose}
          ></div>
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
      <section className="home_grid">
        <div className="intro">
          <div className="info">
            <h1 className="h1intro">
              SO, YOU WANT TO TRAVEL TO <span className="space">SPACE</span>
            </h1>
            <p className="introp">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="explore">
          <button className="btn">EXPLORE</button>
        </div>
      </section>
    </div>
  );
};

render(<App />, document.getElementById('root'));
