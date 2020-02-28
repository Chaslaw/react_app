import React from 'react';
import './Header.scss';
import logo from '../../img/logo.png';

import { Search } from '../Search/Search';

import { Navbar } from '../Navbar/Navbar';

const Header = props => {

    const renderSearch = () => {
        if(props.search) {
            return <Search />
        } return null
    }
    
    return (
        
            <header className={`header ${props.black ? 'black' : 'gray'}`}> 
                <img className="logo" src={logo} />
                <Navbar />
                {renderSearch()}
                
            </header>
    )
}

export {Header};