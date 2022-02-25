import React from 'react';
import '../css/style.css';
import '../css/destination.css';
import Launch from './launch';
import Spaceport from './spaceport';
import Capsule from './capsule';

import { useRef, useState } from 'react';
const technology = () => {
  const [showlaunch, setshowlaunch] = useState(true);
  const [showspaceport, setshowspaceport] = useState(false);
  const [showcapsule, setshowcapsule] = useState(false);
  const clicklaunch = () => {
    setshowlaunch(true);
    setshowspaceport(false);
    setshowcapsule(false);
  };
  const clickspaceport = () => {
    setshowlaunch(false);
    setshowspaceport(true);
    setshowcapsule(false);
  };
  const clickcapsule = () => {
    setshowlaunch(false);
    setshowspaceport(false);
    setshowcapsule(true);
  };
  return (
    <div>
      {showlaunch && (
        <Launch
          clicklaunch={clicklaunch}
          clickspaceport={clickspaceport}
          clickcapsule={clickcapsule}
        />
      )}
      {showspaceport && (
        <Spaceport
          clicklaunch={clicklaunch}
          clickspaceport={clickspaceport}
          clickcapsule={clickcapsule}
        />
      )}
      {showcapsule && (
        <Capsule
          clicklaunch={clicklaunch}
          clickspaceport={clickspaceport}
          clickcapsule={clickcapsule}
        />
      )}
    </div>
  );
};

export default technology;
