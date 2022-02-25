import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import commander from '../imgs/crew/image-anousheh-ansari.png';
const ansari = props => {
  return (
    <div className="crew">
      <h1>
        <span className="pick_dest_span">01 </span>PICK YOUR CREW
      </h1>
      <div className="crew_grid">
        <div className="crew_info">
          <h1 className="crew_position">FLIGHT ENGINEER</h1>
          <h1 className="crew_name">ANOUSHEH ANSARI</h1>
          <p className="crew_bio">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
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
export default ansari;
