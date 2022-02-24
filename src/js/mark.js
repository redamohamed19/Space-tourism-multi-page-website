import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import commander from '../imgs/crew/image-mark-shuttleworth.png';
const mark = () => {
  return (
    <div className="crew">
      <h1>
        <span className="pick_dest_span">01 </span>PICK YOUR CREW
      </h1>
      <div className="crew_grid">
        <div className="crew_info">
          <h1 className="crew_position">MISSION SPECIALIST</h1>
          <h1 className="crew_name">MARK SHUTTLEWORTH</h1>
          <p className="crew_bio">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
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
export default mark;
