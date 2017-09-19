import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SplashPage from './SplashPage';
import AuthForm from './AuthForm';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={SplashPage}/>
        <Route exact path='/auth' component={AuthForm}/>
      </Switch>
    );
  }
}

export default App;
