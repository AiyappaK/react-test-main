import React from 'react';
import classes from './dashboard.module.css';


const profile = (props) => (
    <div className={classes.container}>
       <div classname={classes.left}>
       <img src=""  alt="Avatar"/>
        <p>Username: "lorem ipsum"</p>
        <p>Email: "lorem@ipsum.com"</p>
        <p>MOdile number: "lorem ipsum"</p>
        <p>occupation: "lorem ipsum"</p>
        <p>Location: "lorem ipsum"</p>
       </div>
       <div classname={classes.right}>
        <h1>new right column</h1>
       </div>
    
    
    </div>
    
);
export default profile;