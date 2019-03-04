import React, { Component } from 'react';

class Movie extends Component{

  render(){
    console.log(this.props)
    return(
      <div className = "container">
        <img className = "thumbnail" alt = "movie thumbnail" src = {this.props.movie.Poster}/>
        <a href = {`https://www.imdb.com/title/${this.props.movie.imdbID}`}>{this.props.movie.Title}</a>
      </div>
      )
    }
  }

export default Movie;
