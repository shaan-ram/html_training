let redux = require("redux");
let reduxThunk = require("redux-thunk").default;
let createStore = redux.legacy_createStore;
let applyMiddleware = redux.applyMiddleware;
let axios = require("axios");
let logger = require("redux-logger").createLogger

// action type is a constant function

const AXIOS_USER_REQUEST= "AXIOS_USER_REQUEST";
const AXIOS_USER_SUCCESS= "AXIOS_USER_SUCCESS";
const AXIOS_USER_ERROR= "AXIOS_USER_ERROR";

// action createStore is function that returns a actiontype

let fetchUsers =()=>{
    return{
        type: AXIOS_USER_REQUEST
    }
}
let fetchUserSuccess = (users) => {
    return {
        type : AXIOS_USER_SUCCESS,
        payload : users
    }
}
let fetchUserError = (error) => {
    return {
        type : AXIOS_USER_ERROR,
        payload : error
    }
}
// initial state is initial value of store object 

const initialState ={
    loading: false,
    error:'',
    user:[]
}

// reducer  is a function which has switch case to call functions based on action type

const reducer =(state= initialState, action)=>{
    switch(action.type){
        case AXIOS_USER_REQUEST : return{ ...state,
                                        loading: false,
                                        error: '',
                                        user: []
        }
        case AXIOS_USER_SUCCESS : return{ ...state,
                                        loading: false,
                                        error:'',
                                        user: action.payload 
        }
        case AXIOS_USER_ERROR : return{ ...state,
                                        loading: false,
                                        error: action.payload ,
                                        user: []
        }
        default: return state
    } 
};

let thunkFetchUsers =()=>{
    return function(dispatch){
        dispatch(fetchUsers());
    }
}

let thunkAjaxUsers =()=>{
    return function(dispatch){
        axios
        .get("https://reqres.in/api/users?page=2")
        .then(res =>  dispatch( fetchUserSuccess(res.data.data) ))
        .catch(error =>  dispatch( fetchUserError(error) ))
    }
}



// store is an object that stores all shared sate of your application
const store = createStore(reducer, redux.compose(applyMiddleware(logger(), reduxThunk)));


// subscribe/unsubscribe to listen to changes of the store
store.subscribe( ()=>{
    console.log( store.getState() );
})

// dispatch is a method that can take action object
store.dispatch( thunkFetchUsers() );
store.dispatch( thunkAjaxUsers() );