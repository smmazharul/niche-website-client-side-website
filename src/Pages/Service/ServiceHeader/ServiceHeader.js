import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { Container, Typography } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';




const ServiceHeader = ({date, setDate}) => {
    
    return (
        <div>
            <Container sx={{ flexGrow: 1 }}  >
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">
                            Service 
                        </Typography>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src='' alt="" />
                    </Grid>
                    
            </Grid>
            </Container>
        </div>
    );
};

export default ServiceHeader;