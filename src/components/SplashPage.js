import React, { Component } from 'react';
import SplashPageImages from './SplashPageImages';
import { withRouter } from 'react-router';

class SplashPage extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SplashPageImages />
        </div>
        <h1>Petstagram</h1>
        <button className="btn btn-primary">
          Login or Register
        </button>
      </div>
    )
  }
}

export default withRouter(SplashPage)
