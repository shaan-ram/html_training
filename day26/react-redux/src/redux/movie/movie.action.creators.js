import { ADD_MOVIE, REMOVE_MOVIE } from "./movie.types"


const addMovie =()=>{
    return{
        type: ADD_MOVIE
    }
}
const removeMovie =()=>{
    return{
        type: REMOVE_MOVIE
    }
}

export{addMovie, removeMovie};