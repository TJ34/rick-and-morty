import React, { Component } from 'react';
import axios from 'axios';
import './Quotes.css';
import Footer from '../Footer/Footer';

export default class Quotes extends Component {
    constructor(){
        super();

        this.state = {
            quotes: "", 
        }
    }
    
    componentDidMount(){
        axios.get("/api/quotes").then((response) => {
            this.setState({quotes: response.data})}    
        )}
    
    getQuote = () => {
        axios.get("/api/quotes").then((response) => {
            this.setState({quotes: response.data})}    
        )}

  render() {
      console.log(this.state);
    return (
        <div>
          <div className="quotePage">
            <button onClick={() => this.getQuote()} className="quoteButton">Quote Me</button>
            <div className="speech-bubble">
                <div>"{this.state.quotes.data}"</div>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}
