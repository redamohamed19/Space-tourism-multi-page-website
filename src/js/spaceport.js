import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import { render } from 'react-dom';
import planet01 from '../imgs/technology/image-spaceport-portrait.jpg';
import planet02 from '../imgs/technology/image-spaceport-landscape.jpg';
const spaceport = props => {
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
          <h1>SPACEPORT</h1>
          <p>
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
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

export default spaceport;
