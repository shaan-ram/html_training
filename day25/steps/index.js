// action type is a constant function
// action createStore is function that returns a actiontype
// initial state is initial value of store object 
// reducer  is a function which has switch case to call functions based on action type
// store is an object that stores all shared sate of your application
// subscribe/unsubscribe to listen to changes of the store
// dispatch is a method that can take action object


let redux = require("redux")
let createStore = redux.legacy_createStore;
let combineReducers = redux.combineReducers;
let bindActionCreators =redux.bindActionCreators;
let middleware = redux.applyMiddleware

let ADDHERO="ADDHERO"
let REMOVEHERO="REMOVEHERO"
let SETHERO="SETHERO"
let ADDMOVIE="ADDMOVIE"
let REMOVEMOVIE="REMOVEMOVIE"
let SETMOVIE="SETMOVIE"


let addhero=function(){
    return{
        type: ADDHERO
    }
}
let removehero=function(){
    return{
        type: REMOVEHERO
    }
}
let sethero=function(num){
    return{
        type: SETHERO,
        payload: num
    }
}
let addmovie=function(){
    return{
        type: ADDMOVIE
    }
}
let removemovie=function(){
    return{
        type: REMOVEMOVIE
    }
}
let setmovie=function(num){
    return{
        type: SETMOVIE,
        payload: num
    }
}

let initialheroState={
    numberofheroes: 0,
   
}
let initialmovieState={
    numberofmovies: 0,
   
}

let heroReducer=(state=initialheroState,action)=>{
    switch(action.type){
        case ADDHERO: return{...state,numberofheroes : state.numberofheroes +1}
        case REMOVEHERO: return{...state, numberofheroes : state.numberofheroes - 1}
        case SETHERO: return{...state, numberofheroes : action.payload }
        default: return state
    }
}
let movieReducer=(state=initialmovieState,action)=>{
    switch(action.type){
        case ADDMOVIE: return{...state,numberofmovies : state.numberofmovies +1}
        case REMOVEMOVIE: return{...state,numberofmovies : state.numberofmovies - 1}
        case SETMOVIE: return{...state,numberofmovies : action.payload }
        default: return state
    }
}

let rootReducer = combineReducers({
    heroes:heroReducer,
    movies:movieReducer
})

let store = createStore(rootReducer, applyMiddleware(logger()))
console.log("Initial value of store", store.getState());

let unsubscribe = store.subscribe(()=> console.log("Subscribed", store.getState()));


store.subscribe(function(){});
store.dispatch( addhero());
store.dispatch( addhero());
store.dispatch( removehero());
store.dispatch( addhero());
store.dispatch( addhero());
store.dispatch( sethero(5));


store.dispatch( addmovie());
store.dispatch( addmovie());
store.dispatch( removemovie());
store.dispatch( addmovie());
store.dispatch( addmovie());
store.dispatch( setmovie(5));
   