import React, { Component, useState } from 'react';
import axios from 'axios';
import { Redirect, Link, useHistory  } from 'react-router-dom';
import { UserContext } from './user-context';
import { baseUrl } from '../api';
import { useUser } from '../user.context';
 
const Login = ()=>{
    const {currentUser, setCurrentUser} = useUser();
    
    const history = useHistory();
    const [email, setEmail]=useState('');
    const [password,setPassword]= useState('')
   const handleSubmit = e =>{
        e.preventDefault();
      
        const data ={
          email,
          password 
        }
//user authentification
        axios
        .post(baseUrl+'/auth',data)
        .then(
          res => {
            console.log(res)
            console.log(res.data)
            const data = res.data;
              setCurrentUser(res.data)
              history.push('/')
            
          })
          };
 /* .post('users', {data})
  .then(
    res => {
      localStorage.setItem('token',res.data.token);
    })
    };*/



      //let user = this.context;

      

        return(
          <UserContext.Consumer>
            {
              user => (
                <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                <h3>Login </h3>
     
                    <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email" 
                    onChange={e => setEmail(e.target.value)}/>
                    </div>
     
                    <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Password"
                    onChange={e => setPassword(e.target.value)} />
                    </div>
                    
                    <div className="d-grid gap-2">
                    <div></div>
                    <button className="btn btn-primary">login</button>
                    </div>
                     
                 </form>
              </div>
              )
            }
          </UserContext.Consumer>
         
        )
    

}

//Login.contextType= UserContext;

export default Login