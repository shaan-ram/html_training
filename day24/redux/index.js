let redux = require("redux");
let createStore = redux.legacy_createStore;

// action type is a constant function
// action createStore is function that returns a actiontype
// initial state is initial value of store object 
// reducer  is a function which has switch case to call functions based on action type
// store is an object that stores all shared sate of your application
// subscribe/unsubscribe to listen to changes of the store
// dispatch is a method that can take action object

//ACTION
const Shaan ="Shhaan";
const ADDHERO ="ADDHERO";
     
//ACTION creator
let addhero = function(){
    return {            
        type: [Shaan,ADDHERO]
    }
};

//INITIAL STATE
let  initialState={
    numberofheroes: 1
}

//REDUCER
let reducer =(state = initialState,action)=>{
    switch(action.type[0]){
        case ADDHERO: return{ numberofheroes : state.numberofheroes +1}
        case Shaan: return{ numberofheroes : state.numberofheroes *5}
        default: return state
    }
};

//STORE
let store = createStore(reducer)
// console.log("Initial value of store", store.getState());

let unsubscribe = store.subscribe(()=> console.log("Subscribed", store.getState()));

store.dispatch( addhero());
store.dispatch( addhero());
store.dispatch( addhero());
unsubscribe();
store.dispatch( addhero());
console.log("unsubscribed");
console.log(store.getState())