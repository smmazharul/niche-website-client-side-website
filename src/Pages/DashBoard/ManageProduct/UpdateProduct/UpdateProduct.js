import { Card, CardContent, CardMedia, Container, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateProduct.css'
import Navigation from '../../../Shared/Navigation/Navigation'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const UpdateProduct = () => {
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState({})
    // const { register, handleSubmit, reset} = useForm();
    useEffect(() => {
        const url = `https://boiling-refuge-39527.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSingleProduct(data)
        })
    }, [])
    

    const { titile, description, time, price, img } = singleProduct;
    const handleTitileChange = e => {
        const udateTitile = e.target.value;
        console.log(e.target.value);
        const UpdateProduct = { titile: udateTitile , description:singleProduct.description };
        setSingleProduct(UpdateProduct)
    }
    
    const handleDescriptionChange = e => {
        const udateDescription = e.target.value;
        // const UpdateProduct = { ...singleProduct };
        // UpdateProduct.description = udateDescription;
        const UpdateProduct = { titile: singleProduct.titile, description: udateDescription };
        setSingleProduct(UpdateProduct)

    }
    const handleImageChange = e => {
        const udateImages = e.target.value;
        console.log(e.target.value);
        // const UpdateProduct = { ...singleProduct };
        // UpdateProduct.description = udateDescription;
        const UpdateProduct = { titile: singleProduct.titile, description: singleProduct.description, img:udateImages };
        setSingleProduct(UpdateProduct)

    }
    const handleTimeChange = e => {
        const udateTime = e.target.value;
        console.log(e.target.value);
        // const UpdateProduct = { ...singleProduct };
        // UpdateProduct.description = udateDescription;
        const UpdateProduct = { titile:titile, description: description, img:img, time:udateTime  };
        setSingleProduct(UpdateProduct)

    }
    
    const handlePriceChange = e => {
        const udatePrice = e.target.value;
        console.log(e.target.value);
        // const UpdateProduct = { ...singleProduct };
        // UpdateProduct.price = udatePrice;
        const UpdateProduct = { titile:titile, description: description, img:img, time:time, price:udatePrice  };
        setSingleProduct(UpdateProduct)

    }
    
  
   
    const onSubmit = e => {
        const url = `https://boiling-refuge-39527.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(singleProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Product Updated')
                    setSingleProduct({})
                }
        })
        e.preventDefault()
    }
    return (
        <div   >
                <Navigation></Navigation>
           
            <Container className='mt-5'>
                 
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
                            {description}
                            </Typography>
                        
                            <Typography variant="h5" color="text.white" sx={{color:'#fff'}} className='d-flex mb-3 justify-content-evenly'>
                            <spam className='text-warning'>{time}days</spam> <span className='text-warning'>{price}$</span>
                            </Typography>
                                
                           
                         
                     

                    

                    </CardContent>
                </Card>
            </Grid>




















                    <Grid item xs={12} md={6} className='d-flex ' >
                        
            <div className="add-seervice p-5" >
                <h5 className='text-white '>PLEASE COMFIRM YOUR ORDER</h5>
                    <form onSubmit={onSubmit}  >

                        <input className='addSeervice' type="text" onChange={handleTitileChange} value={ singleProduct.titile || ''} placeholder='Titile' />
                        <input className='addSeervice' type="text" onChange={handleDescriptionChange} value={ singleProduct.description || ''} placeholder='Description'/>
                        <input className='addSeervice' type="text" onChange={handleImageChange} value={ singleProduct.img || ''} placeholder='Img url' />
                        <input className='addSeervice' type="text" onChange={handleTimeChange} value={ singleProduct.time || ''}  placeholder='time'/>
                        <input className='addSeervice' type="text" onChange={handlePriceChange} value={singleProduct.price || ''}  placeholder='price'/>
                        <input className='addSeervice' type="submit" value='Update Product' />
                       
                    </form>
                    
                    </div>
                    </Grid>
                    
                    

                    </Grid>

            </Container>
               

           
            {/* <p><small>{id}</small></p> */}
           
            
        </div>
    );
};

export default UpdateProduct;