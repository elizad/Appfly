import React from 'react';

const Plane=props=>(
  <li className="plane-wrap">
   
     <div className="planeName">{props.tail}</div>
  </li>
);

export default Plane;