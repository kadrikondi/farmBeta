import React, { Component } from 'react'
import "../assets/style.css";
import bookShef from "../assets/img/bookshelf.svg";
import userPicPlaceholder from "../assets/img/undraw_profile.png";
import bookAdd from "../assets/img/bookAdd.png";
import {Link} from 'react-router-dom'
import UserHeader from './usersHeader';
import Leftsidebar from './SidesBars/Leftsidebar';

export default class userdashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            avater:'',
            name:''
        }
    }
    render() {
        const { id, name, avater } = this.state;
       const cardStyle={
           padding:'20px',
           boxShadow:'0.5px 0.5px 5px grey',
         
            height: '10%',
            borderRadius: '80px',
            backgroundColor: '#fff',
            margin:'10px',
        
        // color: 'rgb(3, 10, 73)',
        
        textTransform: 'capitalize',
        textAlign: 'center',
          

         ImagesSTyle:{
            width: "90%",
            height: "150px",
            borderRadius: "45%"
        },
         buttonStyle :{
            boxShadow: 'none',
             border: '1px  groove #1976d2' }
       }
    
        return (
            <div>
                <UserHeader/>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 mt-5">
                            <Leftsidebar/>
                        </div>
                        <div className="col-lg-9 mt-5">

                            <nav className="nav flex mt-5 " >
                               
                                <div className="col-lg-4 col-md-4 col-sm-12" style={cardStyle}>

                                    <Link className="nav-link  btn btn-outline btn-green" style={cardStyle.buttonStyle} to="weather">
                                        Check Weather
                  </Link>


                                </div> 
                                
                                <div className="col-lg-4 col-md-4 col-sm-12" style={cardStyle}>

                                    <Link className="nav-link  btn btn-outline btn-green" style={cardStyle.buttonStyle} to="crops">
                                        Crop Prescription
                                    </Link>
                                  


                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12" style={cardStyle}>

                                    <Link className="nav-link  btn btn-outline btn-green" style={cardStyle.buttonStyle} to="/agricorg">
                                        Agricultural Organizations
                                     </Link>


                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12" style={cardStyle}>

                                    <Link className="nav-link btn btn-outline btn-green " style={cardStyle.buttonStyle} to='/predict'>
                                        Crop Prediction
                  </Link>

                                </div>

                                
                            </nav> 
               
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
