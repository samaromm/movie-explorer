import React, { Component } from 'react';

class movieDetails extends Component {

    constructor(){
        super()
        this.state={
            movie:[]
        }
    }

    componentDidMount(){
        {this.setState({movie:this.props.list.find(m=>m.id==this.props.id)})}
    }

    componentWillUnmount(){
        clearInterval(this.props.id);
    }

    render() { 
        return ( 
        <div>
            <h1>{this.state.movie.title}</h1>
            <img src={`http://image.tmdb.org/t/p/w1280/${this.state.movie.poster_path}`} width="400px" alt="Poster"/>
            <h3>{this.state.movie.overview}</h3>
        </div> );
    }
}
 
export default movieDetails;