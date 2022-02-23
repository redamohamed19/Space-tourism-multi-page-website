import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import commander from '../imgs/crew/image-douglas-hurley.png';
const hurley = () => {
  return (
    <div className="crew">
      <h1>
        <span className="pick_dest_span">01 </span>PICK YOUR DESTINATION
      </h1>
      <div className="crew_grid">
        <div className="crew_info">
          <h1 className="crew_position">COMMANDER</h1>
          <h1 className="crew_name">DOUGLAS HURLEY</h1>
          <p className="crew_bio">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <ul className="crew_list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="crew_pic">
          <img src={commander} alt="crew_pic" />
        </div>
      </div>
    </div>
  );
};
export default hurley;
