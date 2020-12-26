import React from "react";
import {connect} from 'react-redux';
import Header from "./layouts/Header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import "./assets/css/styles.scss";
import Footer from "./layouts/Footer/Footer";
import RoomsDetail from "./pages/RoomDetail/RoomsDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPass from "./pages/Auth/ForgotPass";
import User from "./pages/User/User";
import {checkRememberedUserAC} from './redux/actions';

class App extends React.PureComponent {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(checkRememberedUserAC());
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Redirect from="/home" to="/" exact/>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/forgot-password" component={ForgotPass} exact/>
          <Route path="/user" component={User}/>
          <Route path="/rooms/category/" component={Rooms} exact/>
          <Route path="/rooms/:roomID" component={RoomsDetail}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
