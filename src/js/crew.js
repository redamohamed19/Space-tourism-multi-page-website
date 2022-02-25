import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import Hurley from './hurley';
import Mark from './mark';
import Victor from './victor';
import Ansari from './ansari';

import { useRef, useState } from 'react';
const crew = () => {
  const [showhurley, setshowhurley] = useState(true);
  const [showmark, setshowmark] = useState(false);
  const [showvictor, setshowvictor] = useState(false);
  const [showansari, setshowansari] = useState(false);
  const clickhurley = () => {
    setshowhurley(true);
    setshowmark(false);
    setshowvictor(false);
    setshowansari(false);
  };
  const clickmark = () => {
    setshowhurley(false);
    setshowmark(true);
    setshowvictor(false);
    setshowansari(false);
  };
  const clickvictor = () => {
    setshowhurley(false);
    setshowmark(false);
    setshowvictor(true);
    setshowansari(false);
  };
  const clickansari = () => {
    setshowhurley(false);
    setshowmark(false);
    setshowvictor(false);
    setshowansari(true);
  };
  return (
    <div>
      {showhurley && (
        <Hurley
          clickhurley={clickhurley}
          clickmark={clickmark}
          clickvictor={clickvictor}
          clickansari={clickansari}
        />
      )}
      {showmark && (
        <Mark
          clickhurley={clickhurley}
          clickmark={clickmark}
          clickvictor={clickvictor}
          clickansari={clickansari}
        />
      )}
      {showvictor && (
        <Victor
          clickhurley={clickhurley}
          clickmark={clickmark}
          clickvictor={clickvictor}
          clickansari={clickansari}
        />
      )}
      {showansari && (
        <Ansari
          clickhurley={clickhurley}
          clickmark={clickmark}
          clickvictor={clickvictor}
          clickansari={clickansari}
        />
      )}
    </div>
  );
};

export default crew;
