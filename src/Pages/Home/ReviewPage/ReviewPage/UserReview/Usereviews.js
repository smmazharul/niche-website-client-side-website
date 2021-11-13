import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';

const Usereviews = () => {
    const [ reviews, setReviews ] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviewCollactions`)
            .then(res => res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
           <h2 style={{color:'orange'}}>Our Review page</h2>
            {
                reviews.map(rev => <div key={rev._id} rev={rev}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent style={{background:'#36a3a1', }}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {rev.titile}
                            </Typography>
                            <Typography variant="h5" component="div">
                            {rev.email}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {rev.descrption}
                            </Typography>
                            <Rating name="read-only" value={rev.rating} readOnly />

                        </CardContent>
                        
                     </Card>

                </div>)
            }
                 

   </div>
    );
};

export default Usereviews;