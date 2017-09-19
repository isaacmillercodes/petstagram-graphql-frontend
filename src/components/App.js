import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SplashPage from './SplashPage';
import AuthForm from './AuthForm';
import UserProfile from './UserProfile';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={SplashPage}/>
        <Route exact path='/auth' component={AuthForm}/>
        <Route exact path='/profile/:id' component={UserProfile}/>
      </Switch>
    );
  }
}

export default App;
