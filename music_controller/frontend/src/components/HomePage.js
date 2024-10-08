import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";

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
    this.state ={
      roomCode: null,
    };
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  async componentDidMount() {
    fetch("/api/user_in_room")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          roomCode: data.code,
        });
        console.log(data.code)
      });
  }
  clearRoomCode (){
    this.setState ={
      roomCode: null,
    };
  }
  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join_room" component={Link}>
              Join a Room
            </Button>
            <Button color="secondary" to="/create_room" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
    render() {
    return (
      <Router>
        <Switch>
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/create_room" component={CreateRoomPage} />
          <Route path="/get_room/:roomCode" component={Room} render={(props) => {
              return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;
            }} />
          <Route path="/join_room" component={RoomJoinPage} />
          <Route
            exact
            path="/"
            render={() => {
              return this.state.roomCode ? (
                <Redirect to={`/get_room/${this.state.roomCode}`} />
              ) : (
                this.renderHomePage()
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}
