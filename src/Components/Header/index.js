import React from "react";
import "./styles.css";

export default class Header extends React.Component {

  //handleSearch=(event)=>{
  //console.log(event.target.value)
  //}
  render() {
    return (
      <div >
        <div className="header">
            <h3>Movie Explorer</h3>
            <div className="search">
              <i className="fas fa-search"></i>
              <input
                placeholder="Search movies…"
                className="inputRoot" 
              />
            </div>
        </div>
      </div>
    );
  }
  
  }
