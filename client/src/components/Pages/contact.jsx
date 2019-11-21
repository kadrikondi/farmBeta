import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Information</h2>
        <ul>
          <li className="list-group-item">
            <b>Name:Idris Abdulkadri</b>
          </li>
          <li className="list-group-item">
            <b>Email:Abdulkadri42@gmail.com</b>
          </li>
          <a href="https://www.twitter.com/kadrikondi">
            {" "}
            Connect me on Twitter
          </a>
        </ul>
      </div>
    );
  }
}
