import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import { render } from 'react-dom';
import planet01 from '../imgs/destination/image-mars.png';
const mars = props => {
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
              MARS
            </h1>
            <p>
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
          </div>
          <hr />
          <div className="planet_number">
            <div className="AVG_DISTANCE">
              <p>AVG. DISTANCE</p>
              <h2>225 MIL. KM</h2>
            </div>
            <div className="EST_TRAVEL_TIME">
              <p>EST. TRAVEL TIME</p>
              <h2>9 MONTHS</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default mars;