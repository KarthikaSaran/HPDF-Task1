import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import cover from './coverpic.jpg';
import logo from './logo.png';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import avatar from './profilepic.jpg';

class Leftpaper extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div>
      <Paper className="left"  zDepth={1} >
      <img id="cover" src={cover}/>
      <Avatar className="avatar1"src={avatar} size={100} /> 
              <div className="profilename">
   <p id="name">Karthika Saran</p><p id="mid">@karthikaRag</p></div>
   <table className="table1" ><tr id="row1"><td>Tweets</td><td>Following</td><td>Followers</td></tr><tr id="row2"><td>68</td><td>20</td><td>10</td></tr></table>
      </Paper>
      </div>
      <div>
      <Paper className="left2"  zDepth={1} >
              <h3>Trends for you &nbsp;    <a href="">Change</a></h3>
              <button className="astext">#Goaker</button>
              <p>2,607 Tweets</p>
              <button className="astext">#Washington</button>
              <p>1,006 Tweets</p>
              <button className="astext">#Goaker</button>
              <p>1,123 Tweets</p>
              <button className="astext">#BJPWins</button>
              <p>3,356 Tweets</p>
              <button className="astext">#EVMs</button>
              <p>12.6K Tweets</p>
              <button className="astext">#Isha</button>
              <p>10K Tweets</p>
              <button className="astext">#GujaratPoll</button>
              <p>567 Tweets</p>
              <button className="astext">#CRPF</button>
              <p>7,898 Tweets</p>
              </Paper>        
                </div>
      </MuiThemeProvider>
    );
  }
}

export default Leftpaper;