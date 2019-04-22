import React, { Component } from 'react';
import SearchField from './SearchField'
import logo from '../img/logo.png'
import ProfilePanel from "./ProfilePanel"

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div classname = "container">
                    <SearchField/>
                    <div className = "col-6 text-center">
                        <img src={logo} alt = "logo"/>
                    </div> 
                    <ProfilePanel />
                </div>
            </div>
        );
    }
}

export default NavBar;