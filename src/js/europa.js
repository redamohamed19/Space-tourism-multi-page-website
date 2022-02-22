import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import { render } from 'react-dom';
import planet01 from '../imgs/destination/image-europa.png';
const europa = props => {
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
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
          </div>
          <hr />
          <div className="planet_number">
            <div className="AVG_DISTANCE">
              <p>AVG. DISTANCE</p>
              <h2>628 MIL. KM</h2>
            </div>
            <div className="EST_TRAVEL_TIME">
              <p>EST. TRAVEL TIME</p>
              <h2>3 YEARS</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default europa;
