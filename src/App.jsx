import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import React from 'react'
import './App.css';
import Particle from './components/Particle';
import { Component } from 'react'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';





class App extends Component {
constructor(){
  super();
  this.state = {
     input: '',
     imageUrl: '',
     route: 'signin',
     isSignedIn: false
  }
  
  
} 



onInputChange = (event) => {
  this.setState({input: event.target.value})
}


autoReloader = () => {
  this.setState({imageUrl: this.state.input})
}


onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input})

}

onRouteChange = (route) => {

 
  if (route === "home"){
    this.setState({isSignedIn: true})
  }
  else if (route === "signout"){
    this.setState({isSignedIn: false})
  }
  else if (route === "signin"){
    this.setState({isSignedIn: false})
  }
 
  this.setState({route: route})
}


render(){
  const {isSignedIn, imageUrl} = this.state;
  return (
    <div className="App">

        
        <Navigation isSignedIn = {isSignedIn} onRouteChange={this.onRouteChange}/>
        <Logo />
      { this.state.route === 'home' ?
        
        <div>
        
        
        <Rank />
        <ImageLinkForm onInputChange = {this.onInputChange} 
                       onButtonSubmit = {this.onButtonSubmit}
                       onRouteChange = {this.onRouteChange}/>

        {!this.state.imageUrl == "" ? (<FaceRecognition imageUrl = {imageUrl}/>  ) 
        : null}
        
        </div>
        
        
        :
        (this.state.route === 'signin' ? 
        <Signin onRouteChange = {this.onRouteChange}/>
        : <Register onRouteChange = {this.onRouteChange}/>
        )
        

      }
     
  

        
    </div>
  );
}}



export default App;
