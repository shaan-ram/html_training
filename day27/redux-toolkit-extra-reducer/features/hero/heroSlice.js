const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    Heroes : 0
}

const heroSlice = createSlice({
    name : "Hero",
    initialState : initialState,
    reducers : {
        addHero : (state)=> {state.Heroes++} ,
        delHero : (state)=> {state.Heroes-- }
    }
})

module.exports = heroSlice.reducer;
module.exports.heroActions = heroSlice.actions;