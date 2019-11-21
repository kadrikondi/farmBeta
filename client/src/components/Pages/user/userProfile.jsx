import React, { Component } from 'react';
import {Link }from 'react-router-dom'
import axios from 'axios'

import {getOneUserA} from '../../apidata/api'
import { userProfile } from '../../apidata/api';
import UserHeader from '../usersHeader';
import Leftsidebar from '../SidesBars/Leftsidebar';
import Img from '../../assets/img/konditie.jpg'

class UserProfile extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            gender:'',
            farming:'',
            location:'',
            id:'',
            avater:null,
            info:''
        }

    }
  
               
                
               
   
   async componentDidMount(){
    
    const token = JSON.parse(localStorage.getItem('token'))
     if(token){        
    
            // const user =await getOneUserA(this.props.match.params.id)
            const user = await userProfile()
            console.log(user)
            if(user.message==="jwt expired"){
                alert('You have to log re-Login')
                this.props.history.push('/signin')
            }else{
                    //     this.setState({name:user.user.name.toUpperCase(), email: user.user.email, id:user.user._id,school:user.user.school.toUpperCase(),phone:user.user.phone,info:user.message})
                    // }  
                    const user = await userProfile()
                    console.log(user.user)
                    this.setState({name:user.name.toUpperCase(), email: user.email, id:user.id,location:user.location,gender:user.gender,farming:user.farming,avater:user.avater,info:user.message})
                    
                    }     
                    console.log("ok" + user)
                    console.log(this.state.avater+ "  avvata")

             }
             if(!token){
                this.props.history.push('/')
            }
}

    render(){
        //  name=name.toUpperCase()
        const {name,email,id,info, gender,location,farming,avater } =this.state

 let StrongSt={
     textAlign:'left',
    
 }

    return(

    <div>

      <UserHeader/>



        <div className="container mt-5 ">

               <div className="row"> 

                  <div className="col-lg-3">
                      <Leftsidebar/>
                      </div>    
                      <div className="col-lg-9">
                    
                        {/* <!-- Card profile--></div> */}
                    <div className=" col-lg-6 col-md-9 col-sm-12">
                        <div className="card mt-3 "  >

                        {/* <!-- Card image --> */}
                           <div className="view overlay" style={{height:"200px"}}>
                                <img className="card-img-top circle " src={avater} />
                            <a href={`${avater}`}>
                            <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>


                            {/* <!-- Card content --> */}
                        <div className="card-body text-left">

                                {/* <!-- Title --> */}
                                <h4 className="card-title text-center ">{name}</h4>
                    
                                <div className="card-text ">
                                <ul className="list-group">
                                <li className="list-group-item"><strong>Email:&nbsp;</strong>{email}</li>
                               
                                <li className="list-group-item"> <strong>Location:&nbsp;</strong>{location}</li>
                                <li className="list-group-item"> <strong>Gender:&nbsp;</strong>{gender}</li>
                                <li className="list-group-item"> <strong>type Of Farming:&nbsp;</strong>{farming}</li>
                                <li className="list-group m-2"> <strong></strong></li>
                            </ul>
                                </div>
                            <Link to={`updateprofile/${id}`}>  <button className="btn btn-outline text-dark">update profile</button></Link>
                             
                   </div>

                </div>
                    {/* <!-- Card --> */}

              
            </div>
                    </div>


                      

                            
                     
                </div>
            
        

            </div>





        </div>
      )
    }

}


export default UserProfile;