// import CircularProgress from '@mui/material/CircularProgress';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
import { Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';


const Login = () => {
    const { signInWithGoogle, logInUser, isLoading, user, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    };
    const handleLogin = e => {

        logInUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignin = () => {
        // signInWithGoogle(history, location);
        // console.log('google button clicked');
        signInWithGoogle();

    }
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Typography variant='h3'>
                    Please Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        sx={{ width: "90%", m: 2 }}
                        id="standard-basic"
                        name="email"
                        onChange={handleOnChange}
                        label="Your email"
                        variant='filled'
                    />
                    <TextField
                        sx={{ width: "90%", m: 2 }}
                        id="standard-basic"
                        name="password"
                        type="password"
                        onChange={handleOnChange}
                        label="password"
                        variant="filled" />
                    <Button sx={{ width: "90%", m: 2 }} variant="contained" type="submit">Login</Button>
                    <NavLink to="/register" style={{ textDecoration: 'none' }}> <Button>Are You New Here?Please Register</Button> </NavLink>

                </form>
                <p>---------------------Google sign in----------------------</p>
                <Button onClick={handleGoogleSignin} variant="contained">Google Sign In</Button>
                {/* {
                    isLoading && <CircularProgress />
                }
                {
                    user.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        You login successfully
                    </Alert>}
                {
                    authError && <Alert severity="error">
                        <AlertTitle>Failed</AlertTitle>
                        {authError}— <strong>check it out!</strong>
                    </Alert>

                } */}


            </Container>
        </>

    );
};

export default Login;