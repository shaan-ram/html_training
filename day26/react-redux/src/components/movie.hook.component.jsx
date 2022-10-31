import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../redux";


let MovieHookComp = ()=>{
    const numbOfMoviesHook = useSelector( state => state.movies.numberOfMovies);
    const dispatch = useDispatch();
        return <div>
            <h1>Movie Hook Component</h1>
            <h3>Total Movies Recruited : {numbOfMoviesHook}</h3>
            <button onClick={()=> dispatch( addMovie())}>Add Movie</button> &nbsp;
            <button onClick={()=> dispatch( removeMovie())}>Remove Movie</button>
        </div>
    
}



export default MovieHookComp;  