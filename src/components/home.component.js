import axios from 'axios';
import React, { Component } from 'react';
import { Redirect, Link, useHistory  } from 'react-router-dom';
import { useUser } from '../user.context';

  const Home = (props) => {

   /* state = {};

componentDidMount(){
    axios.get('user').then(
        res =>{
            this.setState({
                user: res.data
            });
        },
        err =>{
            console.log(err)
        }
    )
}*/

   
        const history = useHistory();
        const {currentUser, setCurrentUser, isAuthenticated} = useUser()
        
        if(!isAuthenticated()){
            
            return <Redirect to='/login' />
        }else{

        return(
            <div className="auth-inner">
                <h2>Connect to Collectible Game <Link to={'/game'} className="nav-link">game</Link> </h2>
            </div>
        )
        }
    

}

export default Home;