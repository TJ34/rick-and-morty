import React, { Component } from 'react';
import axios from 'axios';
import './Characters.css';

export default class Characters extends Component {
    constructor(){
        super();

        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        axios.get("/api/characters").then((response) => {
            console.log('res: ', response);
            this.setState({characters: response.data.results})
        }
            
        )
    }

  render() {
    <Map characterArray={this.state.characters}/>

    return (
      <div className="characters">
        {characters}
      </div>
    );
  }
}