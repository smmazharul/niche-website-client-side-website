import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import { Link } from 'react-router-dom';
import {  Container, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
// import axios from 'axios'
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


// import React, { useEffect, useState } from 'react';

import Bg from '../../../images/test-monial-bg.jpg'

const BannerBg = {
    background: `url(${Bg})`,
    height: "100%",
    backgroundPosition:"center"
    
}
const MyPurchage = ({ pr,isDeleted,setIsDeleted,isconfirm,setIsconfirm }) => {
    const [purchages, setPurchages] = useState([])
    // console.log(pr);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user,token}=useAuth()
    const { titile, description, img, time, price, _id } = pr
    const handleDelete=(id)=>{
        console.log(id);
        const confirmation = window.confirm("Are you sure to delete!!");
        if (confirmation) {
            fetch(`https://boiling-refuge-39527.herokuapp.com/DeleteOrder/${id}`,{
                method:"DELETE",
            })
           .then(res=>res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        
                        setIsDeleted(true)
                    }
                    else {
                        setIsDeleted(false)
                        // alert("Something went wrong!!");
                    }
                    
                })
           
        }
        }
       



    const onSubmit = data => {
        data.pr = pr;
        console.log(data);
        pr.status = 'pending'
         console.log( purchages.status);
        
        fetch('https://boiling-refuge-39527.herokuapp.com/orderConfirms',{
            method:'POST',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('Order process Successfully')
                
                reset()
            }
        })
     }

    return (
        <div style={BannerBg} className='container' >
            
            
    <Container sx={{ flexGrow: 1 }} className=' p-5'  >
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
        
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
                            {description.slice(0,150)}
                            </Typography>
                        
                            <Typography variant="h5" color="text.white" sx={{color:'#fff'}} className='d-flex mb-3 justify-content-evenly'>
                            <spam className='text-warning'>{time}days</spam> <span className='text-warning'>{price}$</span>
                            </Typography>
                                
                            <Box>
                                
                                <button onClick={()=>{handleDelete(pr._id)}}  className='fw-bold rounded '> Cancle Order </button>
                              
                        </Box>
                         
                     

                    

                    </CardContent>
                </Card>
            </Grid>
                    


        <Grid item xs={12} md={6}  >
            <div className="add-seervice p-5" >
                <h5 className='text-white '>PLEASE COMFIRM YOUR ORDER</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input readOnly className='addSeervice' defaultValue={user.displayName}  {...register("name",   )}  placeholder='Your Name'/>
                    <input readOnly className='addSeervice'  defaultValue={user.email} {...register("email", )}  placeholder='Your Email'/>
                    <input className='addSeervice'  type="text" {...register("adress", )}  placeholder='Your Adress'/>
                    <input className='addSeervice'  type="text" {...register("city", )}  placeholder='Your City'/>
                    <input className='addSeervice'  type="text" {...register("phone number", )}  placeholder='Your Phone Number'/>
                    
                    <input  className='bg-warning text-dark fw-bold addSeervice' type="submit" value='Confirm Your Order' />               
                
                    {/* <Link to='/myorder' style={{width:'100%'}}>
                    <input  className='bg-warning text-dark fw-bold addSeervice' type="submit" value='Confirm Your Order' />               
                    </Link> */}
                </form>

                
            </div>
       </Grid> 
        
    </Grid>
</Container>
            
            
        </div>
    );
};

export default MyPurchage;

