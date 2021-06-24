import React, { Component, createRef } from 'react';
import Actions from '../actions/Actions.js';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.title = createRef()
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();
    let movie = {
      title: this.title.current.value
    }
    console.log(this.title.current.value)
    Actions.searchMovies(movie);
  }
    render() {
      
      return (
        <div className="search-form">
          <h2 className="text-center">search for a movie</h2>
          <form className='form-group' onSubmit={this.onSubmit}>
            <input type="text" className="form-control" ref={this.title} placeholder="search..." />
            <button className="btn btn-primary form-control">search</button>
          </form>
        </div>
      );
    }
  }export default SearchForm;