import React, { Component } from 'react';
import axios from 'axios';
import './Favorites.css';

export default class Favorites extends Component {
    constructor(){
        super();

        this.state = {
            characters: [],
            userInput: "",
        }
    }

    componentDidMount(){
        axios.get("/api/favorites").then((response) => {
            this.setState({characters: response.data})
        })
    }

    deleteFavorite = (id) => {
        axios.delete(`/api/favorites/${id}`).then(res => {
            this.setState({characters: res.data})
        })
    }

    updateComment = (id,text) => {
        axios.put(`/api/favorites/${id}`, {text}).then(res => {
            this.setState({characters: res.data});
        });
        this.setState({userInput: ""});
    }

    inputChange = (input) => {
        this.setState({userInput: input.target.value});
    }

  render() {
      let favoritesDisplay = this.state.characters.map((character,i) => {
        return <div key={i} className="favNamePic">
                    <img src={character.image} alt="Whoops!" className = "favImage" />
                    <div className="favButton-Name">
                        <button className="deleteButton"
                                onClick={() => this.deleteFavorite(character.id)}
                        >Del</button>
                        <div className="charName">{character.name}</div>
                    </div>
                    <div>
                        <div>
                            <input placeholder="Wubba Lubba Dub Dub"
                                   onChange={this.inputChange}
                            />
                            <button onClick={() => this.updateComment(character.id, this.state.userInput)}>Submit</button>
                        </div>
                        <div className="commentBox">Comment: {character.comment}</div>
                    </div>
               </div>
      })
    return (
      <div className="favCharacters">
        {favoritesDisplay}
      </div>
    );
  }
}