import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import PlaneList from './Components/PlaneList';
//import PlaneDetail from './Components/PlaneDetail';



export default class App extends Component {
  
  constructor() {
    super();
    this.state ={
      planes:[]
    };
  } 


      componentDidMount() {
        // return axios.get(`https://privatefly-interview-api.herokuapp.com/api/v1/aircraft/`)
        //    .then(result => {
        //       this.setState({ planes: result.data });
        //       })      

        //   .catch(error => {
        //     console.log('Error fetching and parsing data', error);
        //   }); 
        
      }

      performSearch= (query) => {
            

           return axios.get(`https://privatefly-interview-api.herokuapp.com/api/v1/aircraft/`+query )
           .then(result => {
              this.setState({ planes: result.data });
             //  console.log(result.status);
               if(result.status===500){
                    console.log('do a new request');

               } else if (result.status===200){
                 console.log(result.status);
               }
              })      

          .catch(error => {
            console.log('Error fetching and parsing data', error);
          }); 
       
         }



 render() { 
    console.log(this.state.planes);

  //  const { id , image, name, passengers, tail, year }= this.this.state.planes;


    return (

      //to Do
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Plane Search</h1>
                   <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {//React.createElement('a', {href: "https://teamtreehouse.com/library/understanding-jsx"}, "5 star ratting");
            (this.state.loading)
             ? <p>Loading...</p>
             : <PlaneList data={this.state.planes} />
          }   

     


             
        </div>  

        <div className="main-content"> 
        <div className="classPlane"> classPL</div>
              <div className="idPlane"> id </div>
              <div className="imgPlane"> <img src="#" alt ="plane image"/></div>
              <div className="namePlane"> props.planes.name </div>
              <div className="passagersPlane"> passengers 15 </div>
              <div className="tailPlane"> tail</div>
              <div className="yearPlane">2000 </div>
        </div>
              
      </div>
    );
  }
}

