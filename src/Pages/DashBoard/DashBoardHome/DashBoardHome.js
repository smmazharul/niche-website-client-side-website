import { Container, Grid } from '@mui/material';
import React from 'react';
import MyPurchages from '../MyPurchages/MyPurchages';


const DashBoardHome = () => {
    return (
      <Container>
        <Grid container spacing={2}>
        
        <Grid item xs={12} md={6}>
          <MyPurchages></MyPurchages>
          
        </Grid>
        
      </Grid> 
        </Container>
    );
};

export default DashBoardHome;