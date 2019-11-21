import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import CropsPrescription from './components/Pages/cropPrescription/cropsPrescription'
import Signup from './components/Pages/Signup/Signup'
import Signin from './components/Pages/Signin/Signin'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import  Weather from './components/Pages/cropPrediction/weather'
import CropPrediction from './components/Pages/cropPrediction/prediction'
import AgricOrg from './components/Pages/agricOrg/agricOrg'
import UserProfile from './components/Pages/user/userProfile'

import Dashboard from './components/Pages/userdashboard'
import UpdateProfile from './components/Pages/user/updateProfile'
import About from './components/Pages/about'
import Contact from './components/Pages/contact'


class Router extends Component{


    render(){


        return(

            <div>
       <Switch>
       < Route path="/"  strict exact={true} component={LandingPage}/>
      <Route path="/signin" strict exact={true} component={Signin}/>
      <Route path="/signup" strict exact={true}  component={Signup}/>  
      <Route path="/crops" strict exact={true} component={CropsPrescription}/>  
      <Route path="/weather" strict exact={true} component={Weather}/>
       < Route path = "/predict"
       strict exact = {
           true
       }
       component = {
           CropPrediction
       }
       />

      <Route path="/agricorg" strict exact={true} component={AgricOrg}/>
      <Route path="/userprofile" strict exact={true} component={UserProfile}/>
      <Route path="/updateprofile/:id" strict exact={true} component={UpdateProfile}/>
      
      <Route path="/dashboard" strict exact={true} component={Dashboard}
      />
       <Route path="/about" strict exact={true} component={About}
      />
   <Route path="/contact" strict exact={true} component={Contact}
      />

      
           </Switch>

            </div>
        )
    }
}

export default Router
