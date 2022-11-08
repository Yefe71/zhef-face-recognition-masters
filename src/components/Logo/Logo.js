import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'
import 'tachyons'
import Particle from '../Particle';

const Logo = () => {

    return (
        
        <div className = 'ma4 mt0 Top'>
            <Tilt className = "Tilt brw shadow-2" glareEnable={true} glareMaxOpacity={0.6} glareBorderRadius = '30px' glarePosition='bottom' style = {{height: 100, width: 100}}>
            <div className = "pa3 logo">
                <img style = {{width: '200px', borderRadius: '30px' }} src={brain}></img>
              </div>
            </Tilt>
            
        </div>
    )

}


export default Logo;