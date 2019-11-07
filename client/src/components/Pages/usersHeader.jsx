
import React, { Component } from 'react';



import{Link} from 'react-router-dom'


let id ='ok'

  export default class userHeader extends Component {

    constructor(){
        super()
        this.state={
            logOut:'',
            usertoken:''

        }
        this.handleLogout= this.handleLogout.bind(this)
    }

    async handleLogout(){

      
  
      await localStorage.removeItem('token')
    await  window.localStorage.clear()
    await this.setState({usertoken:null})
    
      
    }    
        
    

  render(){
  return (
    <div  className= ''>
      <nav className="nav nav-pills nav-fill  white" style={{ color: 'black' }}>
      
        <Link className="nav-item nav-link btn btn-outline " to={`/dashboard`} style={{ color: 'black' }}>Dashboard</Link>
  
        <Link className="nav-item nav-link btn btn-outline" to="/weather" style={{ color: 'black' }}>Weather</Link >
  <Link className="nav-item nav-link btn btn-outline" to="/userprofile" style={{ color: 'black' }}>profile</Link >
    



        <Link to='/' className="nav-item nav-link btn btn-outline " style={{ color: 'black' }}><button onClick={this.handleLogout} className="btn btn-outline btn-sm my-0 mr-0" style={{ color: 'red' }}> Logout</button> 
        
  </Link>
</nav>

    </div>
  )
}
}
