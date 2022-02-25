import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import { render } from 'react-dom';
import planet01 from '../imgs/technology/image-space-capsule-portrait.jpg';
import planet02 from '../imgs/technology/image-space-capsule-landscape.jpg';
const capsule = props => {
  return (
    <section className="technology">
      <h1>
        <span className="pick_dest_span">03 </span> SPACE LAUNCH 101
      </h1>
      <div className="technology_grid">
        <ul className="list_technology">
          <li onClick={props.clicklaunch}>1</li>
          <li onClick={props.clickspaceport}>2</li>
          <li onClick={props.clickcapsule}>3</li>
        </ul>
        <div className="technology_info">
          <h2>THE TERMINOLOGY...</h2>
          <h1>SPACE CAPSULE</h1>
          <p>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
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

export default capsule;
