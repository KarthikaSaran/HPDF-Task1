import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Toppaper2 extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div>
      <Paper className="header2"  zDepth={1} >
              <h1>#Aadhar</h1>
      </Paper>
      </div>
      <div>
      <Paper className="header"  zDepth={1} >
             <button className="astext1">Top</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="astext1">Latest</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <button className="astext1">People</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="astext1">Photos</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <button className="astext1">Videos</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="astext1">News</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <button className="astext1">Broadcasts</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Paper>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Toppaper2;
