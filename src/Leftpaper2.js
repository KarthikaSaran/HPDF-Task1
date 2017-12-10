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




class Leftpaper2 extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div>
      <Paper className="right"  zDepth={1} >
      <h3>Search Filters &nbsp;&nbsp;&nbsp;&nbsp;    <a href="">Show</a> </h3>
              </Paper>        
                </div>
        <div>
      <Paper className="right"  zDepth={1} >
      <h3>Related Searches</h3>
      <a href="">@ndai</a> 
              </Paper>        
                </div>        
       <div>
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
      <Paper className="right"  zDepth={1} >
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

export default Leftpaper2;


