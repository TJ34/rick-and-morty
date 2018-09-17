import React, { Component } from 'react';
import axios from 'axios';
import './Quotes.css';
import Footer from '../Footer/Footer';

export default class Quotes extends Component {
    constructor(){
        super();

        this.state = {
            quotes: "",
            episodes: [], 
        }
    }
    
    componentDidMount(){
        axios.get("/api/quotes").then((response) => {
            this.setState({quotes: response.data})
        });
        axios.get("/api/episodes").then((response) => {
            this.setState({episodes: response.data.results})
        })
        .then(() => {
        axios.get("/api/episodes2").then((response) => {
            this.setState({episodes: [...this.state.episodes, ...response.data.results]})
        })})
    }
    
    getQuote = () => {
        axios.get("/api/quotes").then((response) => {
            this.setState({quotes: response.data})}    
        )}

  render() {
      console.log(this.state);
    let episodesMap = this.state.episodes.map((episode,i) => {
        return <div key={i} className="episodes">
                <div className="episodeNumber">{episode.episode}</div>
                <div className="episodeName">{episode.name}</div>
                <div className="episodeDate">{episode.air_date}</div>
               </div>
    })

    return (
        <div>
          <div className="quotePage">
            <button onClick={() => this.getQuote()} className="quoteButton"> New Quote</button>
            <div className="speech-bubble">
                <div>"{this.state.quotes.data}"</div>
            </div>
          </div>
          <h1 className="episodesHeader">Episode List</h1>
          {episodesMap}
          <Footer />
        </div>
    );
  }
}
