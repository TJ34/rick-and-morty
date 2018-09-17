import React, { Component } from 'react';
import axios from 'axios';
import Map from './../Map';
import Footer from '../Footer/Footer';

export default class Characters extends Component {
    constructor(){
        super();

        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        axios.get("/api/characters").then((response) => {
            this.setState({characters: response.data.results})}    
        )}

    addToFavorites = (image,name) => {
        axios.post("/api/favorites", {image, name})
    } 
    
    

  render() {
    return (
      <div className="charPage">
        <Map characterArray={this.state.characters} addToFavorites={this.addToFavorites}/>
        <Footer />
      </div>
    );
  }
}