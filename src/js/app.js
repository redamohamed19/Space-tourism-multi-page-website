import React from 'react';
import '../css/style.css';
import { render } from 'react-dom';
import logo from '../imgs/shared/logo.svg';
import Destination from './destination';
import Home from './home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const App = () => {
  const openandclose = () => {
    console.log('hello');
    document.getElementById('menu').classList.toggle('close_navbar');
    document.getElementById('menu').classList.toggle('open_navbar');
    document.getElementById('spinner').classList.toggle('menunoclicked');
    document.getElementById('spinner').classList.toggle('menuclicked');
  };
  return (
    <Router>
      <div>
        <nav>
          <img src={logo} className="logo" />
          <div className="co_nav">
            <div className="line"></div>
            <ul className="navbar">
              <li>
                <Link to="/">
                  <a>
                    <span>00 </span> HOME
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/destination">
                  <a>
                    <span>01 </span> DESTINATION
                  </a>
                </Link>
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
                <Link to="/destination">
                  <a>
                    <span>01 </span>DESTINATION
                  </a>
                </Link>
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

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/destination" component={Destination} />
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById('root'));
