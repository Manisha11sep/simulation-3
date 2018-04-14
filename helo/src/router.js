import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Auth from './component/Auth';
import Form from './component/Form';
import Nav from './component/Nav';
import Post from './component/Post';



export default (
  <Switch>
    <Route component={ Auth} exact path="/" />
    <Route component={ Dashboard } path="/dashboard"/>
    <Route component={ Post } path="/post/:postid" />
    <Route component={ Form } path="/new" />
  </Switch>
)