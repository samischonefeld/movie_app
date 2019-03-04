import React, { Component } from 'react';
import Movie from './Movie.jsx';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      movieData: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
  this.setState(
    {search: e.target.value}
  )
  let encodedURI = encodeURI(this.state.search)
    fetch(`http://www.omdbapi.com/?apikey=3ae41734&s=${encodedURI}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let movies = json.Search || []
        this.setState(
          {movieData: movies}
          )
        console.log(this.state.movieData)
        })
      }


  render() {
    return (
      <div className = "page">
      <div className="inputcontainer">
          <input
            onChange = {this.handleChange}
            value = {this.state.search}
            type = 'text'
            placeholder = 'Movie Name'>
          </input>
      </div>
      <div className = "moviescontainer">
          {this.state.movieData.map((movie) =>
          <Movie key = {movie.imdbID} movie = {movie}/>
          )}
      </div>
      </div>
    );
  }
}

export default App;
