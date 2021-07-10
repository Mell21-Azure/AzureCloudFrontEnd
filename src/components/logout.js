import axios from 'axios';
import React, { Component } from 'react';
import { Redirect, Link, useHistory  } from 'react-router-dom';
import { useUser } from '../user.context';

  const Logout = (props) => {
        const history = useHistory();
        const {setCurrentUser} = useUser()
        setCurrentUser(undefined)
        return <Redirect to='/' />
    

}

export default Logout;