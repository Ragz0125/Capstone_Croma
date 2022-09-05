import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from '../AuthenticationService.js';
import "../css/style.css";

class NavBar extends Component{

    render(){

        return(
            
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">  
            <Link className="navbar-brand">
                {/* Link is from Router dom package and is used for routing */}
                Book Buzz
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    {AuthenticationService.isUserLoggedIn() && <li className="navbar-item">
                        <Link className="nav-link" to="/home">
                            Home
                        </Link>
                    </li>}
                    {AuthenticationService.isUserLoggedIn() && <li className="navbar-item">
                        <Link className="nav-link" to="/feature">
                            Featured 
                        </Link>
                    </li>}
                    {AuthenticationService.isUserLoggedIn() && <li className="navbar-item">
                        <Link className="nav-link" to="/myfavourites">
                            Favourites
                        </Link>
                    </li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                        {AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to="/updateuser">Update User</Link></li>}
                        {AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to="/" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </div>
             
            </nav>
        )
    }

    
}

export default NavBar;