import { Container } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('https://joli-livre-90273.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 400, color: 'info.main', m: 3 }} variant="h3" component="div">
                    Watches

                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        watches.map(watch => <Product key={watch._id} watch={watch}></Product>)
                    }


                </Grid>
            </Container>
        </Box>
    );
};

export default Products;