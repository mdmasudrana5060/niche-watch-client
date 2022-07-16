import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, description, price, _id } = props.watch;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, height: 650 }}>
                <CardMedia
                    component="img"
                    height="140"
                    style={{ width: "auto", height: "400px", margin: "0 auto" }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent sx={{ height: 200 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    {name}
                    <Typography alignCenter variant="h5" color="text.primary">
                        Price:{price}taka
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{ margin: '0 0 0 110px' }} to={`/singleProduct/${_id}`}>
                        <Button sx={{ mx: 'auto' }} variant='contained' size="small">Order Now</Button></Link>

                </CardActions>
            </Card>

        </Grid>
    );
};

export default Product;