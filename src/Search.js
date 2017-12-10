import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toppaper from './Toppaper';
import Leftpaper from './Leftpaper';
import Midpaper2 from './Midpaper2';
import Rightpaper from './Rightpaper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toppaper2 from './Toppaper2';
import Leftpaper2 from './Leftpaper2';
class Search extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div className="App">
      <Toppaper/>
      <Toppaper2/>
      <table><tr><td><Leftpaper2/></td><td>
      <Midpaper2/></td></tr></table>
      </div>
      </MuiThemeProvider>
    );
  }
};

export default Search;

