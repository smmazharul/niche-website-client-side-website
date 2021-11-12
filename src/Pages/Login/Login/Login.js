import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImage from '../../../images/Login-page-car.jpg'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoding, authError } = useAuth()
    const location = useLocation()
    const history=useHistory()
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
       
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ color: '#00e5ff'}} variant='body1' gutterBottom>Please Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnchange}
                            variant="standard"
                        ></TextField>
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnchange}
                            variant="standard"
                        ></TextField>
                        <Button
                            sx={{ width: '75%', m: 1 ,bgcolor: '#00e5ff'}}
                            variant='contained'
                            type="submit"
                        
                        >Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'>
                            <Button
                                variant="text"
                                sx={{ color: '#00e5ff'}}
                            >New User? Please Register</Button>
                        </NavLink>
                    </form>
                    {isLoding && <LinearProgress color="secondary" />}
                    {user?.email && <Alert severity="success">Congratulations You login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImage} style={{width:'100%',}} />
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Login;