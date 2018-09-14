import React, { Component } from 'react';
import './App.css';
import Characters from './components/characters/Characters';

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
      return <div>
        <Characters />
        </div>
    } else if (toggle === "favorites"){
      return <div>hello</div>
    }
  }

  toggleCharacter = () => {
    this.setState({toggle: "characters"})
  }

  toggleFavorites = () => {
    this.setState({toggle: "favorites"})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rick and Morty Favorites</h1>
        </header>
        <div>
        <button onClick={this.toggleCharacter}>Characters</button>
        <button onClick={this.toggleFavorites}>Favorites</button>
        </div>
        {this.displayFunc()}
        
      </div>
    );
  }
}

export default App;
