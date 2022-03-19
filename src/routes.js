import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

const Routes = ()=>{
    return (
        <Switch>

            <Route path ="/Signup" component = {Pages.signup} />
            <Route path ="/Login" component = {Pages.login} />
            <Route path ="/verifyOtp" component ={Pages.VerifyOtp}/>
            <Route path = "/userLists" component = {Pages.userList} />
            <Route path= "/home" component = {Pages.home} />
        </Switch>
      );
};

export default Routes;
