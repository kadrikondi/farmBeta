import React, { Component } from 'react';
 import {Link} from 'react-router-dom'

export default class Footer extends Component{
    render(){
 const FTstyle={
     marginTop:"200px"

 }
    return(
        <div>
                        {/* <!-- Footer --> */}
                
            <footer style={FTstyle} className="page-footer font-small unique-color-dark">

            

            {/* 
            {/* <!-- Copyright --> */}
            <div className="footer-copyright text-center py-3">© 2019 Copyright &nbsp; with <span style={{color:'red',fontSize:'20px'}}>&hearts; &nbsp;</span>
            <a href="https://kondipress">by Kondipress</a>
            </div>
            {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}

        </div>
    )
}
}

// export default Footer;