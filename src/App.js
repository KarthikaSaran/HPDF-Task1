import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toppaper from './Toppaper';
import Leftpaper from './Leftpaper';
import Midpaper from './Midpaper';
import Rightpaper from './Rightpaper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div className="App">
      <Toppaper/>
      <table><tr><td>
      <Leftpaper/></td><td>
      <Midpaper/></td><td><Rightpaper/></td></tr></table>
      </div>
      </MuiThemeProvider>
    );
  }
};

export default App;
