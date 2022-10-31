import { combineReducers, legacy_createStore as createStore } from "redux"; 
import { movieReducer } from "./movie/movie.reducers";

let rootReducer = combineReducers({
    movies: movieReducer
})

const store = createStore( rootReducer );

export { store };