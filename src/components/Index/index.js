import React , {Component} from 'react' ;
import About from './../About'
import Footer from './../Footer'
import Home from './../Home'
import Portofolio from './../Portofolio'
import Profile from './../Profile'
import SocialMedia from './../SocialMedia'
import Work from './../Work'

class Index extends Component{
  render(){
    return (
      <div className="App">
        <Home/>
        <Work/>
        <Portofolio/>
        <Profile/>
        <About/>
        <SocialMedia/>
        <Footer/>
      </div>
    );
  }
}

export default Index;