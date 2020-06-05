import React, { Component } from 'react';
import './App.css';
import GifContainer from './Components/GifContainer';
import SearchBar from './Components/SearchBar';
import { debounce } from 'lodash';
import request from 'superagent';

const apiKey = process.env.REACT_APP_API_KEY;
const trendingGifs = 'http://api.giphy.com/v1/gifs/trending?api_key=' + apiKey + '&limit=16';


class App extends Component {

  constructor() {
    super();

    this.state = {
      gifs: [],
    }

    this.handleTermChange = this.handleTermChange.bind(this);
}

componentDidMount() {
  request.get(trendingGifs, (err, result) => {
    this.setState({ gifs: result.body.data })
  });

}

  handleTermChange(searchTerm){


    const urlString = `http://api.giphy.com/v1/gifs/search?q=${searchTerm.replace(/\s/g, '+')}&api_key=${apiKey}&limit=16`;


     if (searchTerm.length !== 0) {
      
       request.get(urlString, (err, result) => {
         this.setState({ gifs: result.body.data })
       });
     } else {
       request.get(trendingGifs, (err, result) => {
         this.setState({ gifs: result.body.data })
       });
     }

  }

  render() {
    return (
      <div> 
        <div className = "App-header">
          <h2>Gif Search</h2>
        </div>
      <SearchBar style={{fontSize: 24, width: "40%", paddingTop: 8, paddingBottom: 8, paddingLeft: 10}} onTermChange={debounce(this.handleTermChange, 1000)} />
      <GifContainer gifs={this.state.gifs} />
      </div>
      
    );
  }
}

export default App;
