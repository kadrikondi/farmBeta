import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import './projects.css'
import UserHeader from '../usersHeader'
import bookList from '../../assets/img/library.svg'
import axios from 'axios';
import Leftsidebar from '../SidesBars/Leftsidebar'
import  '../../assets/style.css'





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
        searchText:''
        
      }
      this.handleSearch= this.handleSearch.bind(this)
    }

     handleSearch(e){
       this.setState({searchText:e.target.value})
       console.log(this.state.searchText)
     }

   async componentWillMount(){
     const id = await JSON.parse(localStorage.getItem("userId"));
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


        fetch('/projects',{
          method:'GET',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            
        }
        })
       
       .then(res => res.json())
     
       .then(result=>{
       console.log( result)
        //  console.log(result.info[1])
         this.setState({
           allproject:result.info
         })
         
        })
        .catch(err=>{
          console.log(err)
          if(err){
            // document.getElementById('head').innerHTML="No project Available"

        }
        })
       }

 

    render(){

 const allproject =this.state.allproject.filter((project)=>{
   let search= this.state.searchText
   return project.topic.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1;
  //  indexOf(this.state.searchText.toLowerCase())!==-1;
 
 })
 const {token, id }= this.state
return(
          
    <div>
    <UserHeader/>

    <div className="container">
      <div className="row">

        <div className="col-lg-3 mt-5">
          <Leftsidebar />
        </div>
   <div className="col-lg-9  mt-2">
     <h1>View weather</h1>

          <a className="weatherwidget-io" href="https://forecast7.com/en/7d806d73/lokoja/" data-label_1="LOKOJA" data-label_2="WEATHER" data-theme="original">LOKOJA WEATHER</a>

     
          
        <hr/>
          <a className="weatherwidget-io" href="https://forecast7.com/en/9d087d40/abuja/" data-label_1="ABUJA" data-label_2="WEATHER" data-theme="kiwi">ABUJA WEATHER</a>
 
    <hr/>
          <a className="weatherwidget-io" href="https://forecast7.com/en/7d826d07/kabba/" data-label_1="KABBA" data-label_2="WEATHER" data-font="Roboto" data-theme="sky">KABBA WEATHER</a>
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