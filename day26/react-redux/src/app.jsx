import { Component } from "react";
import MovieComp from "./components/movie.component";
import MovieHookComp from "./components/movie.hook.component";


class App extends Component{
    render(){
        return <div style={{textAlign: "center"}}>
            <h1>Avengers</h1>
           <MovieComp/>
           <br/>
           <MovieHookComp/>
        </div>
    }
} 
export{ App };