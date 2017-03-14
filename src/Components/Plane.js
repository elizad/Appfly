import React from 'react';

const Plane=props=>(
  <li className="plane-wrap">
     // <div className = "planeId"> {props.id} </div>
     // <div className = "planeTail"> {props.tail} </div>
     <div className="planeName">{props.name}</div>
  </li>
);

export default Plane;