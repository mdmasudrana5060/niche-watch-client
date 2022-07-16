import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Niche Watch
                    </Typography>
                    <NavLink className="link" to="/home">     <Button color="inherit">Home</Button>  </NavLink>
                    <NavLink className="link" to="/explore">     <Button color="inherit">Explore</Button></NavLink>
                    <NavLink className="link" to="/register">     <Button color="inherit">Register</Button></NavLink>




                    {
                        user?.email ?
                            <Box>
                                <NavLink className="link" to="/dashboard">     <Button color="inherit">Dashboard</Button></NavLink>
                                < Button sx={{ color: 'white' }} onClick={logOut}>LogOut</Button>

                            </Box>


                            : <NavLink className="link" to="/login">     <Button color="inherit">Login</Button></NavLink>
                    }
                    {(user.email) && <span style={{ padding: "10px" }}>{user.displayName}</span>}

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;