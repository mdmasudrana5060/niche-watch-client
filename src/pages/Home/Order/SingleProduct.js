import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import './SingleProduct.css';

import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import PlaceBooking from './PlaceBooking';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://joli-livre-90273.herokuapp.com/watches/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ width: '98%', mt: 2, mb: 2, }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className='product' item xs={6}>
                        <Box className='product-card'>    <Card sx={{ maxWidth: 580, height: 620, }}>
                            <CardMedia
                                component="img"
                                height="140"
                                style={{ width: "auto", height: "400px", margin: "0 auto" }}
                                image={product.img}
                                alt="green iguana"
                            />
                            <CardContent sx={{ height: 200 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>

                                <Typography alignCenter variant="h5" color="text.primary">
                                    Price:{product.price}taka
                                </Typography>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card></Box>



                    </Grid>
                    <Grid className='product' item xs={6} >
                        <PlaceBooking product={product}></PlaceBooking>

                    </Grid>

                </Grid>
            </Box>
        </>


    );
};

export default SingleProduct;