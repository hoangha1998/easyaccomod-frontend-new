import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';
import Notifications from './Notifications';

function User() {
  return (
    <div className="user-page page-paper">
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 m-3 l-3">
            <div className="user-page-sidebar">
              <Link to="/user/profile">Profile</Link>
              <Link to="/user/notifications">Notifications</Link>
            </div>
          </div>
          <div className="col c-12 m-9 l-9">
            <div className="user-page-main">
              <Route path="/user/profile" component={Profile} exact={true}/>
              <Route path="/user/notifications" component={Notifications} exact={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
