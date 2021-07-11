import axios from 'axios';
import React, { Component } from 'react';
import { useUser } from '../user.context';
import {  Link  } from 'react-router-dom';


  const  CollectibleGame = () => {
        const {currentUser, setCurrentUser, isAuthenticated,isAuthorizeToPlay} = useUser()
        return(
            
                isAuthorizeToPlay()?
            
           <div className=''>
               <iframe className="content" src ='http://20.199.118.236/'> Collectible Game</iframe>
           </div>
           :<>
           <div className="auth-inner">
                <h2>You are not authorize to Play <br/><Link to={'/'} className="nav-link" >Back to home </Link></h2>
            </div>
           </>
            
        )

}

export default CollectibleGame;