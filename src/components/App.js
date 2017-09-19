import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SplashPage from './SplashPage';
import AuthForm from './AuthForm';
import UserProfile from './UserProfile';
import AddPet from './AddPet';
import PetProfile from './PetProfile';
import AddPetImage from './AddPetImage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={SplashPage}/>
        <Route exact path='/auth' component={AuthForm}/>
        <Route exact path='/profile/:id' component={UserProfile}/>
        <Route exact path='/profile/:id/add_pet' component={AddPet}/>
        <Route exact path='/pet/:id' component={PetProfile}/>
        <Route exact path='/pet/:id/add_image' component={AddPetImage}/>
      </Switch>
    );
  }
}

export default App;
