import{ useEffect, useState }from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Typography from '@mui/material/Typography';
import DeleteProducts from './DeleteProducts';
const DeleteProduct = () => {
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
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <Container sx={{mt:4}} >
                <Typography variant="h6" component="div" color="#00e5ff"  >
                    OUR PRODUCT
                 </Typography >
                <Typography variant="h4" component="div"  sx={{mt:2,mb:8, fontWeight:'500'}}>
                   Delete Our Product
                 </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                  
                    {
                        services.map(service => <DeleteProducts
                            key={service._id}
                            service={service}
                            setServices={setServices}
                        ></DeleteProducts>)
                    }
                </Grid>
                
            </Container>
         </Box>
        </div>
    );
};

export default DeleteProduct;