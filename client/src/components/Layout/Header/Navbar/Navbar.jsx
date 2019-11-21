
import React, { Component } from 'react';
import {getOneUserA} from '../../../apidata/api'
import {getSingleProjectA} from '../../../apidata/api'
import './Navbar.css'

import {Link} from 'react-router-dom'

class Navbar extends Component {
  constructor(){
      super()
      this.state={
          msg:'',  
        logOut:'',
        
         
      }
      this.handleLogout= this.handleLogout.bind(this)
  }
  async handleLogout(){
      await localStorage.removeItem('token')
    await  window.localStorage.clear()
    await this.setState({usertoken:null})
    
    
    
}
  
  async componentDidMount(){
      
  
    //   const user =await getOneUserA(this.props.match.params.id)
    //   if(user.message==='Request failed with status code 401'){
    //       this.setState({msg:user.message})
    //     alert('You have to log re-Login')
    //     this.props.history.push('/signin')
    // }
      
  }

    render(){

  
   
return(
  
    <div className="navbarSS">
        
        <header className="Navtext bg-success">

    {/* <!--Double navigation--> */}
    
        {/* <!-- Sidebar navigation --> */}
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-sm navbar-dark">
        
             {/* <!-- Breadcrumb--> */}
            <a className="navbar-brand mr-1 ml-5" href="/" style={{fontFamily:"cursive",fontSize:"2em"}}>
                 FarmBeta&#x26d6;
            </a>

            {/* <!-- Collapse button --> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon"></span>
    </button>

    {/* <!-- Collapsible content --> */}
    <div  className="collapse navbar-collapse" id="basicExampleNav">

    
    {/* <!-- Links --> */}
        <ul  className="navbar-nav ml-5  mr-auto">
           
            <li  className="nav-item">
                <Link  className="nav-link" to="/about">About Us</Link>
            </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact </Link>
                        </li>

            

            {/* <!-- Dropdown --> */}
            <li  className="nav-item dropdown">
                <a  className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Our Term</a>
                <div  className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <a  className="dropdown-item" href="#">Term&amp;conditions</a>
                    <a  className="dropdown-item" href="#">Developers</a>
                    <a  className="dropdown-item" href="#">Policy</a>
                </div>
            </li>

        </ul>
       
      
        
         </div> 
        </nav>
        {/* <!-- /.Navbar --> */}
        
        </header>


        
    </div>
)}




}

export default Navbar