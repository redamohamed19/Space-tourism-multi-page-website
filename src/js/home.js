import React from 'react';
import '../css/style.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const Home = () => {
  return (
    <section className="home_grid">
      <div className="intro">
        <div className="info">
          <h1 className="h1intro">
            SO, YOU WANT TO TRAVEL TO <span className="space">SPACE</span>
          </h1>
          <p className="introp">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className="explore">
        <Link to="/destination">
          {' '}
          <button className="btn">EXPLORE</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
