import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import { render } from 'react-dom';
import planet01 from '../imgs/destination/image-titan.png';
const titan = props => {
  return (
    <section className="destination">
      <h1>
        <span className="pick_dest_span">01 </span>PICK YOUR DESTINATION
      </h1>
      <div className="destination_grid">
        <div className="planet_pic">
          <img src={planet01} />
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
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
          </div>
          <hr />
          <div className="planet_number">
            <div className="AVG_DISTANCE">
              <p>AVG. DISTANCE</p>
              <h2>1.6 BIL. KM</h2>
            </div>
            <div className="EST_TRAVEL_TIME">
              <p>EST. TRAVEL TIME</p>
              <h2>7 YEARS</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default titan;
