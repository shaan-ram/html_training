import { Component } from "react";
import { connect } from "react-redux";
import { addMovie, removeMovie } from "../redux";


class MovieComp extends Component{
    render(){
        return <div>
            <h1>Movie Component</h1>
            <h3>Total Movies Recruited : {this.props.numberOfMovies}</h3>
            <button onClick={this.props.addMovie}>Add Movie</button> &nbsp;
            <button onClick={this.props.removeMovie}>Remove Movie</button>
        </div>
    }
} 

const mapStateToProps = (state)=>{
    return{
        numberOfMovies : state.movies.numberOfMovies
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addMovie :()=> dispatch(addMovie()),
        removeMovie :()=> dispatch(removeMovie())
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComp);