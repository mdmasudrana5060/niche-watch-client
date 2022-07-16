import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Review = (props) => {
    const { customerName, email, review } = props.review
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, height: 300, padding: 2, mb: 10, }}>
                {/* <CardMedia
                    component="img"
                    height="140"
                    style={{ width: "auto", height: "400px", margin: "0 auto" }}
                    image={img}
                    alt="green iguana"
                /> */}
                <CardContent sx={{ height: 200 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {customerName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {email}
                    </Typography>

                    <Typography alignCenter variant="h5" color="text.primary">
                        {review}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Link className='link-button'
                        to={`/singleProduct/${_id}`}><Button variant='contained' size="small">Order Now</Button></Link>
                </CardActions> */}
            </Card>

        </Grid>
    );
};

export default Review;