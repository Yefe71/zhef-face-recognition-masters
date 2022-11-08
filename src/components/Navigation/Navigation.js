import React from 'react';

import './navigation.css'
const Navigation = ({onRouteChange, isSignedIn}) => {

  
        if (isSignedIn) {
            return(
            <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick = {() => onRouteChange('signin')} 
               className = 'f3 link dim white ma3 mt4 mr4 pointer'>Sign Out</p>
            </nav>
            )

        }else{
            return(
                
            <div>
            
            <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick = {() => onRouteChange('signin')} 
                   className = 'f3 link dim white ma2 mt4 pointer'>Sign In</p>
                <p onClick = {() => onRouteChange('register')} 
                   className = 'f3 link dim white ma3 mt4 mr4 pointer'>Register</p>
            </nav>
            </div>
            )   
        }
   
    

}

export default Navigation;