import React, { Component } from "react";
import "./cropsPrescription.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import UserHeader from "../usersHeader";
import Leftsidebar from "../SidesBars/Leftsidebar";
import maizeicon from "../../assets/img/maizeicon.jpg";
import surghumimg from "../../assets/img/Sorghum.jpg";
import maizeimg from "../../assets/img/farm.jpg";

class CropsPrescription extends Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
    this.displayS = this.displayS.bind(this);
    this.displayMaize = this.displayMaize.bind(this);
  }

  displayS() {
    let surghumS = document.getElementById("surghum");
    surghumS.style.display = "block";
    let maizeDisplay = document.getElementById("maize");
    maizeDisplay.style.display = "none";
    document.getElementById("surghumbtn").style.backgroundColor = "grey";
  }
  displayMaize() {
    let maizeDisplay = document.getElementById("maize");
    maizeDisplay.style.display = "block";
    let surghumS = document.getElementById("surghum");
    surghumS.style.display = "none";
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
    const maize = {
      display: "block",
      backgroundColor: "#fff",
      fontSize: "1.2em",
      fontFamily: "roboto",
      head: {
        fontWeight: "bold"
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
                <div className="col-lg-6 ">
                  <figure
                    className="nav-link  btn btn-outline btn-green "
                    style={cardStyle.buttonStyle}
                    onClick={this.displayMaize}
                  >
                    <img src={maizeicon} alt="" style={cardStyle.image} />{" "}
                    <br />
                    <h2 onClick={this.displayMaize}>MAIZE</h2>
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
                    src={surghumimg}
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

              <hr />

              <div className="row text-left" style={maize} id="maize">
                <div className="col-lg-12">
                  <h1 className="text-center">MAIZE (Zea mays)</h1>

                  <img
                    src={maizeimg}
                    alt=" "
                    style={{ width: "100%", height: "260px" }}
                  />
                  <p className="mt-2">
                    <h3 style={maize.head}>Introduction</h3>
                    Maize or corn is a cereal crop that is grown widely
                    throughout the world in a range of agroecological
                    environments. More maize is produced annually than any other
                    grain. About 50 species exist and consist of different
                    colors, textures and grain shapes and sizes. White, yellow
                    and red are the most common types. The white and yellow
                    varieties are preferred by most people depending on the
                    region. Maize was introduced into Africa in the 1500s and
                    has since become one of Africa’s dominant food crops. Like
                    many other regions, it is consumed as a vegetable although
                    it is a grain crop. The grains are rich in vitamins A, C and
                    E, carbohydrates, and essential minerals, and contain 9%
                    protein. They are also rich in dietary fiber and calories
                    which are a good source of energy.
                  </p>
                  <p>
                    <h3 className="text-capitalize" style={maize.head}>
                      Choice of Land
                    </h3>
                    Any well drained sandy loam or loamy soil can be used for
                    planting maize but if in doubt, contact your nearest
                    Extension Office or Agro-Service Center
                  </p>

                  <p>
                    <h3 style={maize.head}>Land Preparation</h3>
                    Use any method (Mechanical, Chemical and Manual) that can
                    adequately remove weeds and keep the soil loose for good
                    seedbed. As much as possible, incorporate residue of the
                    previous crop into the soil.For large scale planting,
                    clearing method should ensure preservation of the topsoil
                    when uprooting and clearing trees mechanically. Consult the
                    nearest Extension Office or Agro-Service Center.Plant
                    immediately after land preparation to allow maize to get
                    ahead of weeds.CAUTION: When the land is ploughed
                    mechanically, the depth of planting should not be more than
                    5 cm (2 inches)
                  </p>

                  <p>
                    <h3 style={maize.head}>Recommended Varieties</h3>
                    <ul>
                      <h3>EARLY SEASON</h3>

                      <li>
                        YELLOW OPEN-POLLINATED VARIETIES
                        <ul>
                          <li>
                            {" "}
                            Western Yellow 1: TZSR-Y-1 (Streak Resistant)
                          </li>
                          <li>DMR-LSRY (Downy Mildew & Streak Resistant) </li>
                        </ul>
                      </li>

                      <li>YELLOW HYBRID VARIETIES</li>
                      <li>
                        WHITE, OPEN-POLLINATED VARIETIES : TZPB (FARZ 27); TZB
                        (FARZ 34); TZSR-W-1; ZPBSR (Streak Resistant);
                      </li>
                      <li>
                        {" "}
                        .WHITE HYBRIDS8321-18; 9022-19; (Striga Resistant)
                      </li>
                      <br />
                      <p>
                        <h3>LATE SEASON</h3>
                        Plant early maturing, streak and/or downy mildew
                        resistant varieties.
                      </p>

                      <li>
                        YELLOW OPEN-POLLINATED VARIETIES: TZESR-Y; DMR-ESRY
                        (Downy Mildew and Streak Resistant)
                      </li>
                      <li>
                        WHITE-OPEN POLLINATED VARIETIES: TZESR-W; DMR-ESRW
                        (Downy Mildew and Streak Resistant)
                      </li>
                      <li>POPCORN: White Pop: Yellow composite</li>
                    </ul>
                  </p>
                  <p>
                    <h3 style={maize.head}>Time of Planting</h3>
                    <h3> EARLY SEASON</h3>
                    (i) In the Forest zone, the optimum planting date is between
                    <b>15 March and 1 April,</b> although planting could be done
                    as soon as rainfall becomes steady.
                    <br></br>
                    (ii) In the Derived Savannah zone, plant as soon as the
                    rainfall becomes steady, between <b>1-30 April</b>.<br></br>
                    (iii)In the Southern Guinea Savannah zone, planting could
                    still be done as late as May and June, depending on
                    rainfall.
                    <h3>LATE SEASON</h3>
                    Late season maize is recommended only for areas where
                    rainfall is likely to be adequate. Popcorn is best planted
                    in the late season where proper drying could be easily
                    effected for optimum popping expansion. Planting should be
                    done preferably <b>between 1–15 August</b>
                  </p>
                  <p>
                    <h3 style={maize.head}> Seed Rate and Plant Population</h3>
                    <h3>SEED RATE</h3>
                    (i)25 kg/ha for open pollinated varieties <br />
                    (ii)15 kg/ha for Hybrids(iii)15 kg for popcorn.
                    <h3> PLANT POPULATION</h3>
                    (i)Open-Pollinated/Popcorn varieties: Hand planted, 90 cm x
                    40 cm, 2 plants/stand to give 55,555 plants/ha. <br />
                    (ii)Hybrids: Hand planted, 90 cm x 40 cm, 2 plants/stand to
                    give 55,555 plant/ha. <br />
                    (iii)Mechanical Planting: (Any Variety)75 cm x 25 cm , 1
                    plant/stand to given 53,555 plants/ha or 90 cm x 20 cm,
                    1plant/stand giving 55,555 plants/ha. There should be no
                    thin-ning or supplying except in very bad cases.
                  </p>

                  <p>
                    <h3 style={maize.head}>
                      Fertilizer rate and time of application
                    </h3>
                    <h3> OPEN-POLLINATED VARIETIES</h3>
                    (i)Forest fallows 10 years or more. Apply 200 kg (4 bags) of
                    NPK 25-10-10 per hectare at planting as band or broadcast
                    application (equivalent 3 to 50 kg N, 20 kg P2O5 and 20 kg
                    K2O) per hectare). Local unit is ONE empty beer bottle cap
                    to two plants. <br />
                    (ii)Forest fallows less than 10 years, soils under savanna
                    vegetation and soils under continuous cropping: Apply 300 kg
                    (6 bags) of NPK 25:10:10 and 100 kg (2 bags) of Single
                    Super-phosphate per/ha at plant-ing as band or broadcast
                    application (equivalent to 75 kg, 50 kg P2O5, 30 kg K2O, and
                    14 kg S per/ha). Alternatively, apply 400 kg (8 bags) of
                    20:10:10-2S-1Zn per/ha at planting. Local unit is ONE empty
                    beer bottle cap to every one plant. <br />
                    (iii)In the savanna zone, apply 400 kg (8 bags) of 25:10:10,
                    100 kg (2 bags) of Single Super-phosphate and 3 to 5 kg of
                    Zinc Sulphate per/ha at planting as band or broadcast
                    application, to give 100kg N, 58 kg P2O5; 40 kg K2O, 14 kg S
                    and 1 to 2 kg Zn per/ha. Alternatively ap-ply 500 kg (10
                    bags) of 20-10-10-2S-1Zn per/ha at planting.
                    <h3>HYBRIDS</h3>
                    For every high yields, apply 600 kg (12 bags) of 25:10:10
                    per hectare in two splits at planting (200 kg) and 5 to 6
                    weeks after planting (400 kg), to give 150 kg N, 60 kg P2O5
                    and 60 kg K2O per hectare. In the savanna zone, add 200 kg
                    (2 bags) of Single Super-phosphate and 5kg of Zinc Sulphate
                    to give a total of 150 kg N, 78 kg P2O5, 60 kg K2O, 14 kg S
                    and 2 kg Zn. Alternatively, apply 500 kg (10 bags) of
                    20:10:10-2S-1Zn/ha at planting and a second dose of 100 kg
                    (2 bags) of Urea per hectare.
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
                      href="http://biblio.iita.org/documents/U03ManIitaMaizeNothomNodev.pdf-43dafa4ce4033f16250975d3b036c570.pdf"
                      className="btn btn-lg btn-green mt-3"
                    >
                      <span className="fa fa-download"></span> &nbsp;Growing
                      Maize In Nigeria
                    </a>
                    <iframe
                      className=" mt-3"
                      width="100%"
                      height="400px"
                      src="http://biblio.iita.org/documents/U03ManIitaMaizeNothomNodev.pdf-43dafa4ce4033f16250975d3b036c570.pdf"
                    ></iframe>
                    <a
                      href="http://www.arc.agric.za/arc-gci/Fact%20Sheets%20Library/Maize%20Production.pdf"
                      className="btn btn-lg btn-green"
                    >
                      <span className="fa fa-download"></span> &nbsp; Maize
                      production Guide
                    </a>
                    <iframe
                      className=" mt-3"
                      width="100%"
                      height="400px"
                      src="http://www.arc.agric.za/arc-gci/Fact%20Sheets%20Library/Maize%20Production.pdf"
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
