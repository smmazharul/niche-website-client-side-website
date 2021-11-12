import { Grid } from '@mui/material';
import React from 'react';
import MyPurchages from '../MyPurchages/MyPurchages';

const DashBoardHome = () => {
    return (
        <Grid container spacing={2}>
        
        <Grid item xs={12} md={6}>
          <MyPurchages></MyPurchages>
        </Grid>
        
      </Grid> 
    );
};

export default DashBoardHome;