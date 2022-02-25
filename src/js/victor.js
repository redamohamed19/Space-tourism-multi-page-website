import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import commander from '../imgs/crew/image-victor-glover.png';
const victor = props => {
  return (
    <div className="crew">
      <h1>
        <span className="pick_dest_span">01 </span>PICK YOUR CREW
      </h1>
      <div className="crew_grid">
        <div className="crew_info">
          <h1 className="crew_position">PILOT</h1>
          <h1 className="crew_name">VICTOR GLOVER</h1>
          <p className="crew_bio">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </div>
        <ul className="crew_list">
          <li onClick={props.clickhurley}></li>
          <li onClick={props.clickmark}></li>
          <li onClick={props.clickvictor}></li>
          <li onClick={props.clickansari}></li>
        </ul>
        <div className="crew_pic">
          <img src={commander} alt="crew_pic" />
        </div>
      </div>
    </div>
  );
};
export default victor;
