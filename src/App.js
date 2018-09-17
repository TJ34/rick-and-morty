import React, { Component } from 'react';
import './App.css';
import Characters from './components/characters/Characters';
import Favorites from './components/Favorites/Favorites';
import Header from './components/Header/Header';
import Quotes from './components/Quotes/Quotes';

class App extends Component {
  constructor(){
    super();

    this.state = {
      toggle: "characters",
    }
  }

  displayFunc = () => {
    const {toggle} = this.state;
    if(toggle === "characters"){
      return <Characters />
    } else if (toggle === "favorites"){
      return <Favorites />
    } else if (toggle === "quotes"){
      return <Quotes />
    }
  }

  toggleCharacter = () => {
    this.setState({toggle: "characters"})
  }

  toggleFavorites = () => {
    this.setState({toggle: "favorites"})
  }

  toggleQuote = () => {
    this.setState({toggle: "quotes"})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="navButtons">
        <button onClick={this.toggleQuote} className="button">Quotes</button>
        <button onClick={this.toggleCharacter} className="button">Characters</button>
        <button onClick={this.toggleFavorites} className="button">Favorites</button>
        </div>
        {this.displayFunc()}
        
      </div>
    );
  }
}

export default App;
