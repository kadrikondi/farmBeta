import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8 card mt-5">
            <h2 className="p-5 text-left">
              This is farm prescriptive system that recommeds action to farmers
              in order to get high crop Yield{" "}
            </h2>
            <h3 className="text-center p-5">
              Design by Idris Abdulkadri as Final Year Project in Computer
              Science Department Fulokoja
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
