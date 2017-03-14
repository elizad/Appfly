import React from 'react';
import Plane from './Plane';
import NoPlanes from './NoPlanes';






const PlaneList = props => { 
  
  const results = props.data;
  let planes;
  if (results) {
    planes = results.map(plane => <Plane tail={plane.tail} key={plane.id} />);    
  } else {
    planes = <NoPlanes />
  }

  return(
    <ul className="plane-list">
      {planes}
    </ul> 
  );
}



export default PlaneList;
  // <Plane id={plane.id} key={plane.id} />
   // <Plane tail = {plane.tail} key = {plane.id} />