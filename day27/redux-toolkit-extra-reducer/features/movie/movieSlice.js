const { heroActions } = require("../hero/heroSlice");
const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    Movies : 0
}

const movieSlice = createSlice({
    name : "Movie",
    initialState : initialState,
    reducers : {
        addMovie : (state)=> {state.Movies++} ,
        delMovie : (state)=> {state.Movies-- },
        setMovie : (state,action)=> {state.Movies = action.payload}
    },

    extraReducers:{
        [`hero/addHero`]: (state)=>{
            state.Movies
        }
    }
            // (OR)
            
    // extraReducers: builder=>{
    //     builder.addCase(heroActions.addHero,state =>{
    //         state.Movies++
    //     })
    // }
})
module.exports = movieSlice.reducer;
module.exports.movieActions = movieSlice.actions;