import React from 'react';
import Plane from './Plane';
import NoPlane from './NoPlane';

const PlaneList = props => { 
  
   const results = props.data;
    let planes = results.map(plane =>
   
          <Plane name = {plane.name} key = {plane.id} />
   
  );

   // <Plane id = {plane.id} key = {plane.id} />
   // <Plane tail = {plane.tail} key = {plane.id} />


  return(
    <ul className = "plane-list">
      {planes}
    </ul> 
  );
} 







export default PlaneList;
