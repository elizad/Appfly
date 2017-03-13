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
  //  // fetch('https://privatefly-interview-api.herokuapp.com/api/v1/aircraft')
  //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({ planes: responseData.data });
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }

      componentDidMount() {
      
       return axios.get("https://privatefly-interview-api.herokuapp.com/api/v1/aircraft")


       .then(result => {
          this.setState({ planes: result.data });
          })
    
      // .then(response => {
      //   this.setState({
      //     planes: response.data
      //   });
      // })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }



  render() { 
    console.log(this.state.planes);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">PlaneSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <PlaneList data={this.state.planes} />
        </div>
      </div>
    );
  }
}