import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';
import np from './np.jpg';
import cover from './coveraadhar.jpg';
import avatar from './aadhar-logo.jpg';
import Reply from 'material-ui/svg-icons/communication/textsms';
import Share from 'material-ui/svg-icons/navigation/refresh';
import Messages from 'material-ui/svg-icons/communication/email';
import Fav from 'material-ui/svg-icons/action/favorite-border';
class Midpaper2 extends Component {
  render() {
    return (
            <MuiThemeProvider>
      <div>
      <Paper className="mid1"  zDepth={1}>
              
               <button className="fullbtns">20 new results</button> 
               <div className="content"><h2 id="fl">People</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a id="fr" href="">View all</a> </div>
                <img id="cover1" src={cover}/>
                        <Avatar className="avatar1"src={avatar} size={100} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<table className="table1" ><tr id="row1"><td>Tweets&nbsp;&nbsp;&nbsp;&nbsp;</td><td>Following&nbsp;&nbsp;&nbsp;&nbsp;</td><td>Followers</td></tr><tr id="row2"><td>68</td><td>20</td><td>10</td></tr></table>
                <button className="follow-btn1">Follow Search</button> 
                <div className="divtxt"><div ><h1>Aadhar</h1> <p>@UIDAI</p></div>
                <div className="txt1"><p>Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.</p><p>

                New Delhi. <a href=""> uidai.gov.in</a> </p> <p>Followed by <a href=""> Saran Sakthivel</a> and <a href="">1 other</a></p></div>
                </div>
                </Paper>
                <Paper className="mid1"  zDepth={1}>
                <table className="table3"><tr><td> <Avatar src={avatar1} size={80}/></td><td><p><span className="bld">Pranesh Sinha</span>  @sgurumurthy.7h</p><p><a href=""> @narendramodi</a><a href=""> @rsprasad</a><a href=""> #Aadhar</a><a href=""> @UIDAI</a>    Sir, my mother is more than 85 years old and she cannot walk. I came to know from 1947 that no one can go home to make aadhar. Pls send someone at home. Complain:20171202014343601. Add: 3/701 East End Apartment, Delhi 96. Tel:9582178806</p></td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><IconButton><Reply/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Share/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Messages/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Fav/></IconButton></td></tr>
    <tr><td><Avatar src={avatar2} size={80}/></td><td><p><span className="bld">Virat megh</span>  @girishvhp.12h</p><p>Do Not Share our Aadhar </p><img id="bf" src={np}/></td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><IconButton><Reply/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Share/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Messages/></IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><Fav/></IconButton></td></tr></table>        
                </Paper>   
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Midpaper2;




