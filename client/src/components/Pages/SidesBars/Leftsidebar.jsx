import React, { Component } from "react";
import profile from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import './Leftsidebar.css'
import {userProfile} from '../../apidata/api'

export default class Leftsidebar extends Component {
    

  constructor(){
    super()
    this.state={
      id:'',
      name:'',
      avater:'',
        logOut: '',
        usertoken: ''

      
    }
    this.handleprofile= this.handleprofile.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  async componentWillMount(){
    const id = await localStorage.getItem("userId")
    this.setState({id:id})
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      // kondipress
      const user = await userProfile(id)
      console.log(user)
      if (user.message === "jwt expired") {
        alert('You have to log re-Login')
        this.props.history.push('/signin')
      } else {
        console.log(user.info)
        this.setState({ name: user.name, avater: user.avater})

      }
      console.log("ok" + user)
      console.log(this.state.avater + "  avvata")

    }
    if (!token) {
      this.props.history.push('/')
    }
    
  }
  async handleprofile(){
    const user = await userProfile(this.props.match.params.id)
    console.log(user)
  }

   

    

async handleLogout(){



  await localStorage.removeItem('token')
  await window.localStorage.clear()
  await this.setState({ usertoken: null })


}    

  render() {
    const {id ,name,avater}= this.state
    const sidebarStyle = {
        leftsidbar :{
      marginTop: "0% !important",
      textAlign: "left",
      borderRadius: "8px",
      backgroundColor: "#fff",
      /* background-image: url('../assets/img/project.jpeg'); */
      //
      color: "rgb(3, 10, 73)",
      // boxShadow: "0.2px 0.2px 4px grey",
      padding: "8px", 
      width:'90%',
    

      },
      imgStyle :{
            width: "30%",
            height: "auto",
            cursor: "pointer",
            boxShadow: '0.3px 0.3px 1px gray',
            borderRadius:"50%"        },

        listItem :{
            ':hover': {
                backgroundColor: 'red'
            },
            border: "0px",
            fontWeight: 'bold',
            // ':hover':{
            //     backgroundColor:'red'
            // },
            listStyleType:'none',
            padding:"10px"
          
          
        },
        listLink:{
              boxSizing: 'border-box',  
      padding: '5px 8px',
      display: 'block'

        }

    };
    

    return (
      <div style={sidebarStyle.leftsidbar}>
        <div className="text-center">
          <Link to='/userprofile' title="Your profile"><img src={avater} style={sidebarStyle.imgStyle} />
         <h4>{name}</h4></Link>
          <hr/>
        </div>
        <div>
          <ul className="list-group">
            <li className="list-group-item" style={sidebarStyle.listItem}> <Link to="/dashboard" className="list-link" style={sidebarStyle.listLink} >Home </Link ></li>
                    <li className="list-group-item" style={sidebarStyle.listItem} >
              {" "}
              <Link to='/userprofile'  className="list-link" style={sidebarStyle.listLink} > <i className="fa fa-user "></i> Profile </Link>
            </li>
    
            
                    <li className="list-group-item" style={sidebarStyle.listItem} > <Link to="/weather" className="list-link" style={sidebarStyle.listLink} ><i className="fa fa-map"></i> Check weather </Link> </li>
                    <li className="list-group-item" style={sidebarStyle.listItem}><Link to="/agricorg" className="list-link" style={sidebarStyle.listLink} > <i className="fa fa-"></i> Agric Orgs </Link> </li>
                    <li className="list-group-item" style={sidebarStyle.listItem}> <Link to="/crops" className="list-link" style={sidebarStyle.listLink}> Maize prescription</Link> </li>
          
            
            <li className="list-group-item" style={sidebarStyle.listItem}> <Link to="/" className="list-link" style={sidebarStyle.listLink}  onClick={this.handleLogout}> SignOut </Link > </li>
          </ul>
        </div>
      </div>
    );
  }
}
