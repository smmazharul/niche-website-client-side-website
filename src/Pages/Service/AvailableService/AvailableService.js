import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';
// const bookings = [
//     {
//         id: 1,
//         name: 'Teeth Orthodonics',
//         time: '08.00 AM - 09.00 AM',
//         space: 10,
//     },
//     {
//         id: 2,
//         name: 'Cosmetic Dentistry',
//         time: '09.00 AM - 10.00 AM',
//         space: 8,
//     },
//     {
//         id: 3,
//         name: 'Teeth Cleaning',
//         time: '10.00 AM - 11.00 AM',
//         space: 9,
//     },
//     {
//         id: 4,
//         name: 'Cavity Protection',
//         time: '11.00 AM - 12.00 PM',
//         space: 5,
//     },
//     {
//         id: 5,
//         name: 'Pediatric Dental',
//         time: '06.00 PM - 07.00 PM',
//         space: 10,
//     },
//     {
//         id: 6,
//         name: 'Oral Surgery',
//         time: '07.00 PM - 08.00 PM',
//         space: 10,
//     },
// ]




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