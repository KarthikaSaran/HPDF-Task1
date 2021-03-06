import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar from './profilepic.jpg';
import avatar1 from './avatar1.png';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
class Rightpaper extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div>
      <Paper className="right"  zDepth={1} >
      <h3>Who to follow &nbsp;    <a href="">Refresh</a> &nbsp; <a href="">View all</a></h3>
      <List>
           <ListItem className="list" leftAvatar={<Avatar src={avatar2} size={50}/>} primaryText="Girish Alwa" secondaryText="@girishhalwa"/>
            <button className="follow-btn">Follow</button> 
             <Divider inset={true} />
            <ListItem className="list" leftAvatar={<Avatar src={avatar1} size={50}/>} primaryText="Vasundhara Raje" secondaryText="@Vasunraje"/>
            <button className="follow-btn">Follow</button> 
            <Divider inset={true} />
            <ListItem className="list" leftAvatar={<Avatar src={avatar3} size={50}/>} primaryText="Renuka" secondaryText="@renukaa"/>
            <button className="follow-btn">Follow</button>    
            <Divider inset={true} /> 
                            </List>
        </Paper>
      </div>
      <div>
      <Paper className="right"  zDepth={1} >
              <p>© 2017 Twitter </p> 
        <div><a id="link" href="">About</a>  <a id="link" href="">Help center</a> <a id="link" href="">Terms</a>  </div> <div><a id="link" href="">Privac policy</a>
        <a id="link" href="">Cookies</a><a id="link" href="">Add info</a></div><div> <a id="link" href="">Brand</a> <a id="link" href="">Blog</a> <a id="link" href="">Status</a> <a id="link" href="">Apps</a></div>
        <div> <a id="link" href="">Jobs</a><a id="link" href="">Marketing</a> <a id="link" href="">Business</a> <a id="link" href="">Developers</a></div>
        <Divider inset={true} />       
        <a id="ad" href="">Advertise with Twitter</a>                   
                            </Paper>        
                </div>
      </MuiThemeProvider>
    );
  }
}

export default Rightpaper;