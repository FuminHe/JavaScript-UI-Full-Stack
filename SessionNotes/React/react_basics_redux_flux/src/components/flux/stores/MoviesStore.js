import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import EventEmitter from 'events';
import API from '../utils/api.js';

const CHANGE_EVENT = 'CHANGE';
let _movies = [];

class MoviesStore extends EventEmitter {

  constructor() {
    super();
    AppDispatcher.register(this.registerActions.bind(this));
    console.log("Store Crt");
  }

  // Switches over the action's type when an action is dispatched.
  registerActions(action) {
    console.log("=========",action);
    switch(action.actionType) {
        case Constants.SEARCH_MOVIES:
          API.searchMovies(action.movie);
          console.log("=========",action.movie);
          this.emit(CHANGE_EVENT);
          break;
        case Constants.SHOW_MOVIE_RESULTS:
          this.setMovieResults(action.movies);
          this.emit(CHANGE_EVENT);
          break;
        default:
               console.log('default case')
    }
    return true;
  }


  setMovieResults(movies) {
    _movies = movies;
  }

  getMovieResults(movies) {
    return _movies;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default new MoviesStore();