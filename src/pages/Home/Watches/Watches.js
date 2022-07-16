import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';


const Watches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://joli-livre-90273.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);

    const homeWatches = watches.slice(0, 6);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 400, color: 'info.main', mb: 5, textDecoration: 'underline dotted', mt: 10 }} variant="h3" component="div">
                    Watches
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        homeWatches.map(watch => <Watch key={watch._id} watch={watch}></Watch>)
                    }


                </Grid>
            </Container>
        </Box>


    );
};

export default Watches;