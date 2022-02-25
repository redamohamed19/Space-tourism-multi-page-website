import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import { render } from 'react-dom';
import planet01 from '../imgs/destination/image-moon.png';
const moon = props => {
  return (
    <section className="destination">
      <h1>
        <span className="pick_dest_span">01 </span>PICK YOUR DESTINATION
      </h1>
      <div className="destination_grid">
        <div className="planet_pic">
          <img src={planet01} id="cake" />
        </div>
        <div className="planet_info">
          <div className="planet_menu">
            <ul>
              <li onClick={props.clickmoon}>MOON</li>
              <li onClick={props.clickmars}>MARS</li>
              <li onClick={props.clickeuropa}>EUROPA</li>
              <li onClick={props.clicktitan}>TITAN</li>
            </ul>
          </div>
          <div className="planet_desc">
            <h1 className="planet_name" id="planet_name">
              Moon
            </h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <hr />
          <div className="planet_number">
            <div className="AVG_DISTANCE">
              <p>AVG. DISTANCE</p>
              <h2>384,400 KM</h2>
            </div>
            <div className="EST_TRAVEL_TIME">
              <p>EST. TRAVEL TIME</p>
              <h2>3 DAYS</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default moon;
