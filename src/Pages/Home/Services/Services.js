import{ useEffect, useState }from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Service from '../Service/Service'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Typography from '@mui/material/Typography';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://boiling-refuge-39527.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
            console.log(data);
        })
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{mt:4}} >
                <Typography variant="h6" component="div" color="#00e5ff"  >
                    OUR SERVICES
                 </Typography >
                <Typography variant="h4" component="div"  sx={{mt:2,mb:8, fontWeight:'500'}}>
                    Product We Provide
                 </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                  
                    {
                        services.slice(0,6).map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
                
            </Container>
         </Box>
    );
};

export default Services;
