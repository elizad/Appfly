import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import PlaneList from './Components/PlaneList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state ={
      planes:[]
    };
  } 

  //   componentDidMount() {
  //    return axios.get("https://privatefly-interview-api.herokuapp.com/api/v1/aircraft/" )
  //          .then(result => {
  //             this.setState({ planes: result.data });
  //             })   
  // //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  // //     .then(response => response.json())
  // //     .then(responseData => {
  // //       this.setState({ planes: responseData.data });
  // //     })

  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }

      componentDidMount() {
        
      }

// var query = "LY-ZAB";

        performSearch= (query) => {
                   // return axios.get(https://privatefly-interview-api.herokuapp.com/api/v1/aircraft/search?q=${query}&limit=24")

           return axios.get(`https://privatefly-interview-api.herokuapp.com/api/v1/aircraft/`+query )
           .then(result => {
              this.setState({ planes: result.data });
              })      
          // .then(response => {
          //   this.setState({
          //     planes: response.data
          //   });
          // })/search?q=${query}&limit=24
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          }); 

         // console.log(query); 
      }




 render() { 
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Plane Search</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <PlaneList data={this.state.planes} />
          }          
        </div>
      </div>
    );
  }
}

