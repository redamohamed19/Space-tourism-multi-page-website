import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import { render } from 'react-dom';
import planet01 from '../imgs/technology/image-launch-vehicle-portrait.jpg';
import planet02 from '../imgs/technology/image-launch-vehicle-landscape.jpg';
const launch = props => {
  return (
    <section className="technology">
      <h1>
        <span className="pick_dest_span">03 </span> SPACE LAUNCH 101
      </h1>
      <div className="technology_grid">
        <ul className="list_technology">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <div className="technology_info">
          <h2>THE TERMINOLOGY...</h2>
          <h1>LAUNCH VEHICLE</h1>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div className="technology_pic">
          <picture>
            <source srcset={planet02} media="(max-width: 640px)" />

            <img src={planet01} alt="example" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default launch;
