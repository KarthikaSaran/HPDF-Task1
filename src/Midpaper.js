import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import avatar from './profilepic.jpg';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import bf from './bf.jpg';
import Reply from 'material-ui/svg-icons/communication/textsms';
import Share from 'material-ui/svg-icons/navigation/refresh';
import Messages from 'material-ui/svg-icons/communication/email';
import Fav from 'material-ui/svg-icons/action/favorite-border';
import Divider from 'material-ui/Divider';
class Midpaper extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div>
      <Paper className="mid1"  zDepth={1}>
      <table><tr><td><Avatar className="avatar2"src={avatar} size={80}/></td><td><TextField underlineShow={false} className="status" fullwidth={true} hintText="What's happening?" /></td></tr></table> 
              <button className="fullbtns">See New Tweets</button>   
              <table className="table3"><tr><td> <Avatar src={avatar1} size={80}/></td><td><p><span className="bld">S Gurumurthy</span>  @sgurumurthy.7h</p><p>PC cannot say Modi is doing it because he is writing articles in the Indian Express against him. This FIR had been filed pursuant a writ by an aggrieved party whose hotel was grabbed by Mrs PC.  Delhi HC ordered CBI to probe. Not Modi. What will PC say now.</p></td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><IconButton><Reply/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Share/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Messages/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Fav/></IconButton></td></tr>
              <tr><td><Avatar src={avatar2} size={80}/></td><td><p><span className="bld">Girish Bharadwaja</span>  @girishvhp.12h</p><p>Before & After 
Shri RevanaSiddeshwara Temple , Horti , Indi Taluk , Vijayapura. 
Thank You !</p><img id="bf" src={bf}/></td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><IconButton><Reply/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Share/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Messages/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Fav/></IconButton></td></tr></table>
                </Paper>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Midpaper;


