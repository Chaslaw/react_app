import React, {Component} from 'react';
import './Navbar.scss';

class Navbar extends Component {

    render (){
        return(
            <ul>
               <a href=""><li>Home</li></a> 
               <a href=""><li>About</li></a> 
               <a href=""><li>Contact</li></a> 
            </ul>
        )
    }

}

export {Navbar};