import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component'; 
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CollectibleGame from './components/collectibleGame';
import Logout from './components/logout';
import {AuthContext,useUser} from './user.context'
function App() {
  localStorage.setItem('user',null)
  return (
    <AuthContext>
    <BrowserRouter>
      <div className="App">
       <Nav/>

      <div className="auth-wrapper">
        
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/game" component={CollectibleGame}/>
           
          </Switch>

        </div>

    </div>
    </BrowserRouter>
    </AuthContext>   
  );
}

export default App;
