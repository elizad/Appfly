import React from 'react';
import Plane from './Plane';
import NoPlanes from './NoPlanes';


// export const PlaneDetail  = React.createClass({
//     render() {
//               <div className="classPlane"> classPL</div>
//               <div className="idPlane"> id </div>
//               <div className="imgPlane"> <img src="#" alt ="plane image"/></div>
//               <div className="namePlane"> name PL</div>
//               <div className="passagersPlane"> passengers 15 </div>
//               <div className="tailPlane"> tail</div>
//               <div className="yearPlane">2000 </div>
//             }

//         })




// //export default PlaneDetail;




// const PlaneDetail=props=>{ 
  
//  const results = props.data;
//   let rplanes;
//   if (results.length) {
//     rplanes = results.map(plane => <Plane tail={plane.tail} key={plane.id} />);    
//   } else {
//     rplanes = <NoPlanes />
//   }

//   return(
//     <ul className="plane-list">
//       {rplanes}
//     </ul> 
//   );
// }

const PlaneDetail=props=>(
  <li className="plane-wrap">
     <div className="planeId">  </div>
      <div className="planeTail"> </div>
     <div className="planeName"></div>
  </li>
);


export default PlaneDetail;