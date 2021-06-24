import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';

class Actions {

  searchMovies(movie) {
    
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_MOVIES,
      movie: movie
    })

    console.log(AppDispatcher)
  }

  showMovieResults(movies) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_MOVIE_RESULTS,
      movies: movies
    })
  }
}

export default new Actions();