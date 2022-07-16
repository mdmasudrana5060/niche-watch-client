import { Container } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';


const Register = () => {
    const { user, authError, registerUser, isLoading } = useAuth();
    const history = useHistory();

    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Container>


                <Typography variant='h3'>
                    Please Register
                </Typography>
                {
                    !isLoading && <form onSubmit={handleOnSubmit}>
                        <TextField

                            sx={{ width: "90%", m: 2 }}
                            variant="filled"
                            placeholder="Enter Your Name "
                            name="name"
                            onBlur={handleOnBlur}
                        />
                        <TextField

                            sx={{ width: "90%", m: 2 }}
                            variant="filled"
                            placeholder="Enter Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: "90%", m: 2 }}
                            variant="filled"
                            placeholder="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                        />
                        <TextField

                            sx={{ width: "90%", m: 2 }}
                            variant="filled"

                            placeholder="Re-type Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                        />
                        <Button sx={{ width: "90%", m: 2 }} variant="contained" type="submit">Register</Button>

                        <NavLink to="/login"><Button variant="type">Already registered?Please Login</Button></NavLink>

                    </form>
                }
                {
                    isLoading && <CircularProgress />
                }
                {
                    user.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        You registered successfully
                    </Alert>}
                {
                    authError && <Alert severity="Error">
                        <AlertTitle>Failed</AlertTitle>
                        {authError}— <strong>check it out!</strong>
                    </Alert>

                }

            </Container>
        </>

    );
};

export default Register;