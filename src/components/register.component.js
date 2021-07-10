import React, {Component} from 'react';
import axios from 'axios';
import { baseUrl } from '../api';
import { withRouter  } from 'react-router-dom';

 class Register extends Component{

handleSubmit = e =>{
  e.preventDefault();

  const data ={
    first_name: this.firstName,
    last_name: this.lastName,
    email: this.email,
    password: this.password,
    password_confirm: this.confirmPassword
  };

  
  const data2 ={
    email: this.email,
    password: this.password
  };

  
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios 
  .post(baseUrl+'/users', data2)
  .then(
    res => {
      console.log(res)
      console.log(res.status)
      if(res.status===201){
        this.props.history.push({
          pathname: `/login`
      });
      }
      //console.log(res.data)
    

    }).catch(
    err =>{
      console.log(err);
    }
  )
};


render(){
    return(
      <div className="auth-inner">
        <form onSubmit={this.handleSubmit}>
           <h3>Sign up </h3>

           <div className="form-group">
               <label>First Name</label>
               <input type="text" className="form-control" placeholder="First Name"
               onChange={e => this.firstName = e.target.value} />
               </div>

               <div className="form-group">
               <label>Last Name</label>
               <input type="text" className="form-control" placeholder="Last Name" 
               onChange={e => this.lastName = e.target.value}/>
               </div>

               <div className="form-group">
               <label>Email</label>
               <input type="text" className="form-control" placeholder="Email" 
               onChange={e => this.email = e.target.value}/>
               </div>

               <div className="form-group">
               <label>Password</label>
               <input type="text" className="form-control" placeholder="Password"
               onChange={e => this.password= e.target.value} />
               </div>


             <div className="form-group">
               <label>Confirm Password</label>
               <input type="text" className="form-control" placeholder="Confirm Password"
               onChange={e => this.confirmPassword = e.target.value} />
               </div>
               
               <div className="d-grid gap-2">
               <div></div>
               <button className="btn btn-primary">Sign Up</button>
               </div>
                
            </form>
        </div>
    )
}
}

export default withRouter(Register)