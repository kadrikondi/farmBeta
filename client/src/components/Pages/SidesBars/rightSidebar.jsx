import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class rightSidbar extends Component {
  render() {
    const noshadow = {
      boxShadow: "none"
    };
    return (
      <div>
        <div className="card" style={noshadow}>
          <h5 className="card-header">Recent projects</h5>
          <ul className="list-group">
            <li className="list-group-item"><Link to=''>Crop yield prediction </Link></li><li className="list-group-item"><Link to=''>Crop yield prediction </Link></li>
            <li className="list-group-item"><Link to=''>Crop yield prediction </Link></li>
            <li className="list-group-item">Crop yield prediction</li>
            <li className="list-group-item">Crop yield prediction</li>
            <li className="list-group-item">Crop yield prediction</li>
          </ul>
        </div>

        <div className="card" style={noshadow}>
          <h5 className="card-header">Project Department</h5>
          <ul className="list-group">
            <li className="list-group-item">Computer Science</li>
            <li className="list-group-item">Biological Science</li>
            <li className="list-group-item"> Geology</li>
            <li className="list-group-item">English and Literary Studies</li>
          </ul>
        </div>
      </div>
    );
  }
}
