import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const DeleteProducts = (props) => {
    const { user } = useAuth();
    const [services, setServices] = useState([])
    const {email}=user
    const { titile, description, img, time, price, _id } = props.service
    const service=props.service
  

    const handleDelete=(id)=>{
        console.log(id);
        const confirmation = window.confirm("Are you sure to delete!!");
        if (confirmation) {
          fetch(`https://boiling-refuge-39527.herokuapp.com/services/${id}`,{
              method:"DELETE",
          })
         .then(res=>res.json())
              .then(data => {
                  console.log(data)
                if (data.deletedCount >0) {
                  const remaining= services.filter(service=>service._id !==id)
                 setServices(remaining)
                }
                else{
                  alert('Someting Wrong')
                }
              })
         
      }
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
                        {description}
                         </Typography>
                    
                        <Typography variant="h5" color="text.white" sx={{color:'#fff'}} className='d-flex mb-3 justify-content-evenly'>
                        <spam className='text-warning'>{time}days</spam> <span className='text-warning'>{price}$</span>
                         </Typography>
                        
                        
                           <button onClick={()=>handleDelete(service._id)} className='fw-bold rounded '>Deleted</button>
                        <Link to={`/deleteProduct/updateProduct/${service._id}`}>
                        <button className='fw-bold rounded '>Update</button>
                        </Link>
                                    

                    

                    </CardContent>
                </Card>
                            
        </Grid>
    );
};

export default DeleteProducts;