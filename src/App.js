import React from "react";
import movies from "./data";
import MoviesList from "./Components/MovieList/index.js";
import Header from "./Components/Header/index.js";
import Detailes from './Components/movieDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: [],
      id:0
    };
  }
  componentDidMount() {
    const key = "542003918769df50083a13c415bbc602";
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    )
      .then(data => data.json())
      .then(data => this.setState({ list: data.results }));
  }


  handleClick=(event)=>{
    this.setState({id:event})
    //console.log(event)
    //console.log(this.state.id)
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Header}/>
          <Route exact path='/' render={routerProps => <MoviesList {...routerProps} handleClick={this.handleClick} list={this.state.list}/> } />
          <Route exact path='/details' render={routerProps => <Detailes {...routerProps} id={this.state.id} list={this.state.list}/> } />
        </div>
      </Router>
          //<MoviesList list={movies.results} handleClick={this.handleClick} />   
 
    );
  }
}

export default App;
