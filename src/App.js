import React, { Component } from "react";
import "./App.css";
import GifContainer from "./Components/GifContainer";
import SearchBar from "./Components/SearchBar";
import { debounce } from "lodash";
import request from "superagent";

const apiKey = "cM40Seb69SOprZxpStT5UCZHJWTz4kBz";
const trendingGifs = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=16`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Gif Search</h2>
        </div>
        <SearchBar
          style={{
            fontSize: 24,
            width: "40%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 10,
          }}
          onTermChange={debounce(this.handleTermChange, 1000)}
        />
        <GifContainer gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
