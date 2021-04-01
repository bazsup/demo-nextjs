import { AppBar, Grid } from '@material-ui/core';
import React from 'react';
// import {  } from '@material-ui/core';

const AppNavigationBar = () => (
  <AppBar>
    <Grid container spacing={2} justify="center">
      <Grid item xs={4}>
        <img style={{ width: 32, height: 30 }} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dtac.co.th%2Fhome.html&psig=AOvVaw17FtNpMPDs_iIQd8YpkHwo&ust=1617179872073000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOisstHO1-8CFQAAAAAdAAAAABAD" alt="" />
      </Grid>
    </Grid>
  </AppBar>
);

export default AppNavigationBar;
