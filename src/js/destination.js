import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import { render } from 'react-dom';
import Moon from './moon';
import Mars from './mars';
import Europa from './europa';
import Titan from './titan';
import { useRef, useState } from 'react';
const destination = () => {
  const [showmoon, setshowmoon] = useState(true);
  const [showmars, setshowmars] = useState(false);
  const [showeuropa, setshoweuropa] = useState(false);
  const [showtitan, setshowtitan] = useState(false);
  const clickmoon = () => {
    console.log('bdygzysgqy');
    setshowmoon(true);
    setshowmars(false);
    setshoweuropa(false);
    setshowtitan(false);
  };
  const clickmars = () => {
    console.log('jejejjds');
    setshowmoon(false);
    setshowmars(true);
    setshoweuropa(false);
    setshowtitan(false);
  };
  const clickeuropa = () => {
    console.log('bdygzysgqy');
    setshowmoon(false);
    setshowmars(false);
    setshoweuropa(true);
    setshowtitan(false);
  };
  const clicktitan = () => {
    console.log('bdygzysgqy');
    setshowmoon(false);
    setshowmars(false);
    setshoweuropa(false);
    setshowtitan(true);
  };

  return (
    <div>
      {showmoon && (
        <Moon
          clickmoon={clickmoon}
          clickmars={clickmars}
          clickeuropa={clickeuropa}
          clicktitan={clicktitan}
        />
      )}
      {showmars && (
        <Mars
          clickmoon={clickmoon}
          clickmars={clickmars}
          clickeuropa={clickeuropa}
          clicktitan={clicktitan}
        />
      )}
      {showeuropa && (
        <Europa
          clickmoon={clickmoon}
          clickmars={clickmars}
          clickeuropa={clickeuropa}
          clicktitan={clicktitan}
        />
      )}
      {showtitan && (
        <Titan
          clickmoon={clickmoon}
          clickmars={clickmars}
          clickeuropa={clickeuropa}
          clicktitan={clicktitan}
        />
      )}
    </div>
  );
};

export default destination;
