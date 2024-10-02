import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/create_room" component={CreateRoomPage} />
          <Route path="/get_room/:roomCode" component={Room} />
          <Route path="/join_room" component={RoomJoinPage} />
          <Route exact path="/">
            <p>This is the home page</p>
          </Route>
        </Switch>
      </Router>
    );
  }
}
