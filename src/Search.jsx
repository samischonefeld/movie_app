import React, { Component } from 'react';

class Search extends Component{
  constructor(props){
  super(props);
  this.state = {search: ''}
  this.handleChange = this.handleChange.bind(this);
}

  // apiCall(){
  //   let encodedInput = ''

  //   fetch(`http://www.omdbapi.com/?apikey=3ae41734&s='${}'`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //         console.log(JSON.stringify(json))
  //       })
  //     }

handleChange(e){
  this.setState(
    {search: e.target.value}
  )
}

  render(){
    return(
        <div className = "inputcontainer">
          <input
            onChange = {this.handleChange}
            value = {this.state.search}
            type = 'text'
            placeholder = 'Movie Name'>
          </input>
        </div>
      )
  }
}

export default Search;
