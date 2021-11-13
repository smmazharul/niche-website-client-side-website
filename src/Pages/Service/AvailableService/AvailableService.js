import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';




const AvailableService = () => {
    
        const [services, setServices] = useState([])
        useEffect(() => {
            fetch('http://localhost:5000/services')
            .then(res=>res.json())
            .then(data=>{
                setServices(data);
                console.log(data);
            })
        },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            
            <Container sx={{mt:4}} >
            <Typography variant="h4" component="div"  sx={{mt:2,mb:8, fontWeight:'500'}}>
                    Our Products
                 </Typography>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        
                    ></Booking>)
                }
                    
                
            </Grid>
            
        </Container>

       </Box>
    );
};

export default AvailableService;