import React from 'react';
import {Link} from 'react-router-dom'

import Particles from 'react-particles-js';

import './Particlejs.css'


const particleOption={
    particles: {
    number:{
      value:80,
      color:"#000000",
  
      density:{
        enable:true,
        value_area:800
      },

    }
   
    
  }
  
  
      
  }  


const Particlejs=()=>{

 
return(

    <div>
       <section >
        <Particles  className="particle"
              params={{particleOption}}/>
     
       <div className="pSection">
      <h1 className="mb-5">Prescriptive System for crop yield</h1>
        
      <br/>
      <div style={{margin:'10px', opacity:'1!important'}}>
     
          <Link to="/signup"> <button className="btn btn-white">Register</button></Link>

          <Link to="/signin"> <button className="btn btn-white">Signin</button></Link>

          </div>

            <br/>
            <h3>Predict, recommends & Get expert advice on crop yield </h3> 
          </div>
          </section>

    </div>
)

}


export default Particlejs
