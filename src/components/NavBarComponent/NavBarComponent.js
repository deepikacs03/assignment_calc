import React, { Component } from 'react';
import {AppBar,Toolbar,IconButton,Typography} from '@material-ui/core';

class NavBarComponent extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6">
            Material UI
         </Typography>
        </Toolbar>
      </AppBar>

    )
  }
}
export default NavBarComponent;