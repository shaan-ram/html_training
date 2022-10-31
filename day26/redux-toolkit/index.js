const store = require("./app/store");
let heroActions = require("./features/hero/heroSlice").heroActions;
let movieActions = require("./features/movie/movieSlice").movieActions;
 
console.log("Initial State", store.getState());
 
const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState());
})

store.dispatch(heroActions.addHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.delHero());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.delMovie());
 
unsubscribe();