import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Service = (props) => {
    const { user } = useAuth();
    const {email}=user
    const { titile, description, img, time, price, _id } = props.service
    const service=props.service
    const handlePurchage = () => {
        const data = service
        data.email = `${email}`
        delete service._id;
        fetch(`http://localhost:5000/purchage`, {
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        console.log(data);
    }

    return (
        <Grid item xs={4} sm={4} md={4} className='mb-5' >
            <Card sx={{ minWidth: 275,  border: 0, boxShadow: 0  }} className='bg-dark'>
                 <CardMedia
                    component="img"
                    style={{ height:'250px', margin:"0 auto"}}
                    image={img}
                    alt="green iguana"
                    />
                
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{color:'orange'}}>
                        {titile}
                        </Typography>
                        
                        <Typography variant="body2" color="text.white" sx={{color:'#fff'}}>
                        {description.slice(0,120)}
                         </Typography>
                    
                        <Typography variant="h5" color="text.white" sx={{color:'#fff'}} className='d-flex mb-3 justify-content-evenly'>
                        <spam className='text-warning'>{time}days</spam> <span className='text-warning'>{price}$</span>
                         </Typography>
                        
                        <Link to={`/purchage/${_id}`} >
                           <button onClick={()=>handlePurchage(props.service)} className='fw-bold rounded '>Order Now -></button>
                        </Link>

                    

                    </CardContent>
                </Card>
                            
        </Grid>
    );
};

export default Service;