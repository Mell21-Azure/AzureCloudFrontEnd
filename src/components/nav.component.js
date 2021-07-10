import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../user.context";

const  Nav = () => {
    const {currentUser, setCurrentUser, isAuthenticated} = useUser()
     
         return(
            <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
            <div className="container">
                <Link to={'/'} className="navbar-brand">Home</Link>

                <div className="collapse navbar-collapse">
                   <ul className="navbar-nav ml-auto">

                       
                       {
                           (! isAuthenticated())? 
                        <>
                            <li className="nav-item">
                                <Link to={'/login'} className="nav-link">login</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/register'} className="nav-link">Sign up</Link>
                            </li>
                        </>
                           :
                            <li className="nav-item">
                                <Link to={'/logout'} className="nav-link">logout</Link>
                            </li>
                       }
                        

                    </ul> 
                </div>


            </div>
         </nav>
         )
     
}

export default Nav