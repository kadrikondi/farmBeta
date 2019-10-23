import React, { Component } from "react";
import "./cropsPrescription.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import UserHeader from "../usersHeader";
import Leftsidebar from "../SidesBars/Leftsidebar";
import maizeicon from "../../assets/img/maizeicon.jpg";
import surghum from "../../assets/img/Sorghum.jpg";

class CropsPrescription extends Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
    this.displayS = this.displayS.bind(this);
  }

  displayS() {
    let surghumS = document.getElementById("surghum");
    surghumS.style.display = "block";
    document.getElementById("surghumbtn").style.backgroundColor= "grey";
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
      padding: "10px",
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
      },
      image: {
        width: "50px",
        height: "50px",
        borderRadius: "10px"
      }
    };
    const surghum = {
      display: "none",
      backgroundColor: "#fff"
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
                <div className="col-lg-6 ">
                  <figure
                    className="nav-link  btn btn-outline btn-green "
                    style={cardStyle.buttonStyle}
                  >
                    <img src={maizeicon} alt="" style={cardStyle.image} />{" "}
                    <br />
                    <h2>MAIZE</h2>
                  </figure>
                </div>
                <div className="col-lg-6 ">
                  <figure
                    className="nav-link  btn btn-outline btn-green"
                    id="surghumbtn"
                    style={cardStyle.buttonStyle}
                    onClick={this.displayS}
                  >
                    <img src={maizeicon} alt="" style={cardStyle.image} />{" "}
                    <br />
                    <h2 onClick={this.displayS}>SURGHUM</h2>
                  </figure>
                </div>
              </div>
              <hr />
              <div className="row text-left" style={surghum} id="surghum">
                <div className="col-lg-12">
                  <h1 className="text-center">Surghum( Guinea Corn)</h1>

                  <img
                    src={surghum}
                    alt=" "
                    style={{ width: "100%", height: "260px" }}
                  />
                  <p className="mt-2">
                    <h3>INTRODUCTION</h3>
                    Sorghum is a genus of numerous species of grasses; the
                    plants are cultivated in warmer climates worldwide. Species
                    are native to tropical and subtropical regions of all
                    continents especially the steppes and savannah Africa with
                    its origin in northern Africa. It has about 30 species of
                    which Sorghum bicolor is the most widely grown because of
                    its intrinsic properties.
                  </p>
                  <p>
                    <h3>CULTIVATION</h3>
                    Sorghum requires a well tilled and prepared seed bed with a
                    planting population of 3.0 to 7.0kg seed per hectare.
                    Planting time usually varies from September to January,
                    depending on the prevailing ecological conditions.NPK
                    fertilizer are normally applied and provisions are made for
                    irrigation and weeding.
                  </p>

                  <p>
                    <h3>GLOBAL TREND IN SORGHUM</h3>
                    Nigeria is the largest sorghum producer in West Africa,
                    accounting for about 71% of the total regional sorghum
                    output. Nigeria’s sorghum production also accounted for 35%
                    of the African production in 2007. The country is the third
                    largest world producer after the United States and India.
                    However, 90% of sorghum produced by United States and India
                    is destined for animal feed, making Nigeria the world
                    leading country for food grain sorghum production.
                  </p>

                  <p>
                    <h3>PEST AND DISEASES</h3>
                    The crop is affected by different kind of diseases and pests
                    (Maize Stem Borers, Chillo Borer, Bollworm, Shoot Fly,
                    Fungi, Virus and Bacteria) which drastically affects the
                    yield. Weeds can be managed by the use of herbicides like
                    Atrazine.
                  </p>
                  <hr />
                </div>
                <div className="col-lg-12">
                  <p className="text-center b">
                    <h4 className="text-uppercase">
                      For More prescription Download the Bellow guide{" "}
                      <span className="fa fa-download"></span>
                    </h4>
                    <a
                      href="https://www.nda.agric.za/docs/Infopaks/FieldCrops_Sorghum.pdf"
                      className="btn btn-lg btn-green"
                    >
                      <span className="fa fa-download"></span> &nbsp; Sorghum
                      production Guide
                    </a>
                    <iframe
                      className=" mt-3"
                      width="100%"
                      height="400px"
                      src="https://www.nda.agric.za/docs/Infopaks/FieldCrops_Sorghum.pdf"
                    ></iframe>

                    <a
                      href="http://biblio.iita.org/documents/U10ManFarmersAjeigbeNothomDev.pdf-19b066d7456bd23a491c9559fd70c962.pdf"
                      className="btn btn-lg btn-green mt-3"
                    >
                      <span className="fa fa-download"></span> &nbsp;Farmers’
                      guide to increased productivity
                    </a>
                    <iframe
                      className=" mt-3"
                      width="100%"
                      height="400px"
                      src="http://biblio.iita.org/documents/U10ManFarmersAjeigbeNothomDev.pdf-19b066d7456bd23a491c9559fd70c962.pdf"
                    ></iframe>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CropsPrescription;
