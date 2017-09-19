import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import SplashPageImages from './SplashPageImages';

class SplashPage extends Component {

  render() {
    const user_id = sessionStorage.getItem('Petstagram_Id');
    const token = sessionStorage.getItem('Petstagram_Token');
    return (
      <div className="App">
        <div className="App-header">
          <SplashPageImages />
        </div>
        <h1>Petstagram</h1>
          {token ?
          <Link to={`/profile/${user_id}`}>
            <button className="btn btn-primary">
              Your Profile
            </button>
          </Link>
          :
          <Link to='/auth'>
            <button className="btn btn-primary">
              Login or Register
            </button>
          </Link>
        }
      </div>
    )
  }
}

export default withRouter(SplashPage)
