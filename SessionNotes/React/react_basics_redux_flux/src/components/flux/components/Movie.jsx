import React, { Component } from 'react';class Movie extends Component {
    render() {
      return (
        <li className="list-group-item">
          <p>{this.props.movie.Title} - {this.props.movie.Year}</p>
          <img className="thumbnail" alt="poster" src={this.props.movie.Poster} />
        </li>
      );
    }
  }export default Movie;