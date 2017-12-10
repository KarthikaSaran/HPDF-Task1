import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import logo from './logo.png';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import avatar from './profilepic.jpg';
import Notifications from 'material-ui/svg-icons/social/notifications-active';
import Messages from 'material-ui/svg-icons/communication/email';
import Search from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
class Toppaper extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div className="top">
      <Paper className="header"  zDepth={1} >
      <table className="table2"><tr><td>
      <table className="table3"><tr><td><ActionHome/></td><td><button className="astext1">Home</button></td> &nbsp;&nbsp;&nbsp;
      <td><Notifications/></td><td><button className="astext1">Notifications</button></td> &nbsp;&nbsp;&nbsp;
      <td><Messages/></td><td><button className="astext1">Messages</button> &nbsp;&nbsp;&nbsp;</td></tr></table>
      </td><td>
      <img id="logo" src={logo}/>  </td><td>   <table className="head-btns"><tr><td>
          <TextField underlineShow={false} className="search"
          hintText="Search" ></TextField></td><td>
          <Avatar className="avatar"src={avatar} size={50}/></td><td>
          <button className="tweet-btn">Tweet</button> </td></tr></table></td></tr></table>
      </Paper>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Toppaper;
