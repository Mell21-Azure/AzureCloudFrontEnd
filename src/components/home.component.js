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
                <h2>Click the icon below<Link to={'/game'} className="nav-link"><img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/moneybag_coins.png" className="img"></img><img/></Link>to play Collectibe game </h2>
            </div>
        )
        }
    

}

export default Home;