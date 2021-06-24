import React, { Component } from 'react';
import Movie from './Movie'

class MoviesResults extends Component {
  render() {
    return (
      <div>
        <h4>Results:</h4>
        <ul className="list-group">
          {
            this.props.movies.map(function(movie, i) {
              return <Movie movie={movie} key={i} />
            })
          }
        </ul>
      </div>
    );
  }
}export default MoviesResults;