import './App.css';
import Navbar from './Navbar'
import News from './News'
import { Routes,Route } from 'react-router-dom';
import React, { Component,useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
apikey=process.env.REACT_APP_NEWS_API
constructor(){
  super();
  this.state={
    progress:100
  }
}
setprogress=(pro)=>{
  this.setState({
    progress:pro
  })
}

  render() {
    return(
      <>       
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}/>        
  <h2 align="center">News Top Headlines</h2>

  <Routes>

       <Route exact path='/health' Component={()=><News setp={this.setprogress}  apikey={this.apikey} pagesize={12} category="health" country="in"/>}></Route>
     <Route exact path='/business' Component={()=><News  setp={this.setprogress} apikey={this.apikey} pagesize={12} category="business" country="in"/>}></Route> 
     <Route exact path='/entertainment' Component={()=><News setp={this.setprogress} apikey={this.apikey} pagesize={12} category="entertainment" country="in"/>}></Route> 
     <Route exact path='/science' Component={()=><News setp={this.setprogress} apikey={this.apikey} pagesize={12} category="science" country="in"/>}></Route> 
     <Route exact path='/sports' Component={()=><News setp={this.setprogress} apikey={this.apikey} pagesize={12} category="sports" country="in"/>}></Route> 
     <Route exact path='/technology' Component={()=><News setp={this.setprogress} apikey={this.apikey} pagesize={12} category="technology" country="in"/>}></Route> 
     <Route exact path='/general' Component={()=><News setp={this.setprogress} apikey={this.apikey} pagesize={12} category="general" country="in"/>}></Route> 
     <Route exact path='/' Component={()=><News setp={this.setprogress}apikey={this.apikey} pagesize={12} category="general" country="in"/>}></Route> 
      
           
      
  {/* <News setp={this.setprogress} apikey={this.apikey} pagesize={8} country="in" category="general"/>  */}
  </Routes> 
      </>
    )
  }
}
