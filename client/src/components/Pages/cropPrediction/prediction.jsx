import React, { Component } from "react";
import UserHeader from "../usersHeader";
import Leftsidebar from "../SidesBars/Leftsidebar";

export default class Prediction extends Component {
  render() {
    return (
      <div>
        <UserHeader />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3">
              <Leftsidebar />
            </div>
            <div className="col-lg-9">
              <h3>Crop Prediction</h3>

              <div className="form-group">
                <input
                  type="text"
                  placeholder=" area to be cultivated in hecter"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder=" latitude of the land"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder=" longitude"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder=" Soil temperature of the land"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="windspeed of the area"
                  className="form-control"
                />
              </div>
              <div className="btn btn-success bt-lg"> Predict the yield</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
