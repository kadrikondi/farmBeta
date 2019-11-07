import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import './weather.css'
import UserHeader from '../usersHeader'
import bookList from '../../assets/img/library.svg'
import axios from 'axios';
import Leftsidebar from '../SidesBars/Leftsidebar'
import  '../../assets/style.css'
import WeatherApp from './WeatherApp'





class Projects extends Component{

    constructor(){
      super()
      this.state={
        id:'',
        topic:'',
        department:'',
        school:'',
        year:'',
        summary:'',
        allproject:[],
        token:'',
        searchText:'',
        click:false
        
      }
     this.handleClick= this.handleClick.bind(this)
    }


   async componentWillMount(){
     const id = await localStorage.getItem("userId");
     this.setState({id:id})
     
   }
       componentDidMount(){
         !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');
        const token= localStorage.getItem('token')
        this.setState({token})

        
         
            //  abuja weather
               !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js = d.createElement(s);js.id=id;
                js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
      //  kabba weather
         !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');


        //  if (this.state.click === false) {
        //    document.getElementById('weekly').style.display = 'hidden'
        //  }
         
       
       }
 handleClick(){
   this.setState({click:true})
 
 }
 

    render(){
      const {click}=this.state
 if(click===true){
 document.getElementById("weekly").style.display='block'
   }

   const d={
     display:'none'
   }
 
 
return(
       
    <div>
    <UserHeader/>

    <div className="container">
      <div className="row">

        <div className="col-lg-3 mt-5">
          <Leftsidebar />
        </div>
   <div className="col-lg-9  mt-2">
         <WeatherApp/>
         <hr/>


     <h1 className="bt btn-light" onClick={this.handleClick} style={{cursor:'pointer'}}>View Weekly Weather</h1>

     <div className='weekly' id="weekly" style={d}>
          <a className="weatherwidget-io" href="https://forecast7.com/en/7d806d73/lokoja/" data-label_1="LOKOJA" data-label_2="WEATHER" data-theme="original">LOKOJA WEATHER</a>

     
          
        <hr/>
          <a className="weatherwidget-io" href="https://forecast7.com/en/9d087d40/abuja/" data-label_1="ABUJA" data-label_2="WEATHER" data-theme="kiwi">ABUJA WEATHER</a>
 
    <hr/>
          <a className="weatherwidget-io" href="https://forecast7.com/en/7d826d07/kabba/" data-label_1="KABBA" data-label_2="WEATHER" data-font="Roboto" data-theme="sky">KABBA WEATHER</a>
          </div>
 {/* row */}
        </div>
      </div>

 </div>
 {/* main */}
    </div>

      
    
)

    }   
}

export default Projects