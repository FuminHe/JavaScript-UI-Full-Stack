import Actions from '../actions/Actions';
// const $ = window.jQuery
// var $ = require( "jquery" );
// import $ from "jquery/lib/node-jquery/"

// import $ from 'node-jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
import $ from 'jquery'; 

class API {

  searchMovies(movie) {
    console.log("Inside")
    $.ajax({
      url: 'https://omdbapi.com/?apikey=3bc3d08&s=' + movie.title,
      dataType: 'json',
      cache: false,
      success(data) {
        let movies = (data.Search ? data.Search : []);
        Actions.showMovieResults(movies);
      },
      error(xhr, status, err) {
        alert(err);
      }
    });
  }
}

export default new API();