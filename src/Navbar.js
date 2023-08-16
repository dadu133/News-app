import './App.css';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
        <div className="container" style={{position:'sticky',top:'0'}}>

            <NavLink to='/'>Newsapp</NavLink>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/business'>Business</NavLink>
            <NavLink to='/entertainment'>Entertainment</NavLink>  
            <NavLink to='/general'>General</NavLink>  
            <NavLink to='/health'>Health</NavLink>  
            <NavLink to='/science'>Science</NavLink>  
            <NavLink to='/sports'>Sports</NavLink>  
            <NavLink to='/technology'>Technology</NavLink>
            {/* <a href="#help">Help</a>*/}
            <button onClick={() => responsive()} id="res"><img src="https://tse3.mm.bing.net/th?id=OIP.eQDSOvXEZN6RHnbA6yP7CQHaHa&pid=Api&P=0" height="10px" /></button>
            
        </div>
    );
    function responsive() {

        let x = document.getElementsByClassName("container")[0];
        if (x.className === 'container') {
            x.className += " responsive";
        }
        else {
            x.className = 'container';
        }
    }
  }
}



// import React, { Component } from 'react'

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
