import { Button, LinearProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImage from '../../../images/Login-page-car.jpg'


const Register = () => {
    
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoding,authError } = useAuth()
   
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
        
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ color: '#00e5ff'}} variant='body1' gutterBottom>Please Register</Typography>
                    {!isLoding && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="standard-basic"
                            label="Your Name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                        ></TextField>
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        ></TextField>
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                        ></TextField>
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="standard-basic"
                            label="Retype Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                        ></TextField>
                        <Button
                            sx={{ width: '75%', m: 1 ,bgcolor: '#00e5ff'}}
                            variant='contained'
                            type="submit"
                        
                        >Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'>
                            <Button
                                variant="text"
                                sx={{ color: '#00e5ff'}}
                            >Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoding && <LinearProgress color="secondary" />}
                    {user?.email && <Alert severity="success">Congratulations Your Account successfully created !</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={loginImage} style={{ width: '100%', borderRadius:'15px'}} alt='resgiter' />
                    
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Register;