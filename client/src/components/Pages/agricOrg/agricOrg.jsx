import React, { Component } from "react";
import "./agricOrg.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import UserHeader from "../usersHeader";
import Leftsidebar from "../SidesBars/Leftsidebar";

class AgricOrg extends Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
  }

  //geting data from api
  async componentDidMount() {}

  render() {
    console.log(this.state.topic + "ok");

    const {
      topic,
      school,
      year,
      department,
      id,
      projectdoc,
      date,
      summary
    } = this.state;
    const cardStyle = {
      padding: "20px",
      boxShadow: "0.5px 0.5px 5px grey",

      height: "10%",
      borderRadius: "80px",
      backgroundColor: "#fff",
      margin: "10px",

      // color: 'rgb(3, 10, 73)',

      textTransform: "capitalize",
      textAlign: "center",

      buttonStyle: {
        boxShadow: "none",
        border: "1px  groove #1976d2",
        borderRadius: "20px"
      }
    };
    return (
      <div>
        <UserHeader />

        <div className="container ">
          <div className="row ">
            <div className="col-lg-3 mt-5">
              <Leftsidebar />
            </div>
            <div className="col-lg-9 mt-5">
              <div className="row">
                <div className="col-lg-4 mt-5">
                  <a
                    className="nav-link  btn btn-outline btn-green "
                    style={cardStyle.buttonStyle}
                    href="https://fao.org/nigeria/en"
                    target="_blank"
                  >
                    FOOD AGRICULTURE ORGANIZATION(FAO)
                  </a>
                </div>
                <div className="col-lg-4 mt-5">
                  {" "}
                  <a
                    className="nav-link  btn btn-outline btn-green "
                    style={cardStyle.buttonStyle}
                    href="https://agriculturalsocietynigeria.com"
                    target="_blank"
                  >
                    AGRIC ORGANIZATION OF NIGERIA
                  </a>
                </div>
                <div className="col-lg-4 mt-5">
                  {" "}
                  <a
                    className="nav-link  btn btn-outline btn-green "
                    style={cardStyle.buttonStyle}
                    href="https://fmard.gov.ng"
                    target="_blank"
                  >
                    AGRICULTURAL MINISTRY NIGERIA
                  </a>
                </div>
                <div className="col-lg-12 mt-2">
                  {" "}
                  <a
                    className="nav-link  btn btn-outline btn-green "
                    style={cardStyle.buttonStyle}
                    href="https://www.ifad.org"
                    target="_blank"
                  >
                    INTERNATIONAL FUND FOR AGRICULTURAL DEVELOPMENT(IFAD)
                  </a>
                </div>
                <div className="col-lg-12 mt-2">
                  {" "}
                  <a
                    className="nav-link  btn btn-outline btn-green "
                    style={cardStyle.buttonStyle}
                    href="https://www.agriculturenigeria.com"
                    target="_blank"
                  >
                    AGRICULTURE NIGERIA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AgricOrg;
