import React, { Component } from 'react';
import Nav from './Navigation/Nav';
import Footer from './Static-pages/Footer/Footer';
// import Home from './Static-pages/Home';



export default class Main extends Component{
    render(){
        return (
            <div>
                 <Nav></Nav>
                 
                 <Footer> </Footer>
            </div>
        );
    } 
}
