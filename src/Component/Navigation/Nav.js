import React, { Component } from 'react';
import './Nav.css';
import { Navitems } from './Navitem';
import Home from '../Static-pages/Home.js';
import About from '../Static-pages/About.js';
import Contact from '../Static-pages/Contact.js';
import Product from '../Static-pages/Product.js';
import Dashboard  from '../Dashboard/dashboard';
import Login from '../Login/Login.js';
import { Route, Switch ,NavLink } from 'react-router-dom';

class Nav extends Component{
    constructor(){
        super();
        this.state= ({collapse: false});
        this.handleClick = this.handleClick.bind(this);
    }

   Hamburger(){
       this.setState({collapse: !this.state.collapse});
   }

   handleClick(){
      this.Hamburger();
   }
    

    render(){
        return (
            <>
           <nav className='nav'>
               <h1 className='site-logo'>React
                   <i className='fa fa-dice'> </i>
               </h1>
               <div className='hamicon'>
               <span className={`hamicon ${this.state.collapse? 'fa fa-window-close':'fa fa-hamburger'}`} onClick={this.handleClick}></span>
               </div>
               <ul className={this.state.collapse? 'Nav-menu active':'Nav-menu'}>

              
                { Navitems.map((item, index)=>{
                    return(
                      <li key={index}>
                          <NavLink className={item.cname} to={item.url}>{item.title}</NavLink>
                      </li>
                    );
                })}
               
               <button>  <NavLink to='/Login'>Login/Signup</NavLink></button>

               </ul>
               
            </nav>
             <div className='test'>
               <Switch>
                   <Route exact path="/" component={Home}/>
                   <Route exact path="/About" component={About}/>
                   <Route exact path="/Contact" component={Contact}/>
                   <Route exact path="/Product" component={Product}/>
                   <Route exact path="/Login" component={Login}/>
                   <Route exact path="/dashboard" component={Dashboard}/>


               </Switch>
               </div>
               </>
        );
    }

}

export default Nav;