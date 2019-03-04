import React, { Component } from 'react';
import Movie from './Movie.jsx';

class ListItem extends Component {
  render(){
    return(
        <div>
          <Movie />
        </div>
      )
  }
}

export default ListItem;
