import Header from "./layouts/Header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import React from "react";
import "./assets/css/styles.scss"
import Footer from "./layouts/Footer/Footer";
import RoomsDetail from "./pages/RoomDetail/RoomsDetail";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={Home} exact/>
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:roomID" component={RoomsDetail} />
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
