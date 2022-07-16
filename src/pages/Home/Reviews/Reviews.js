import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://joli-livre-90273.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);



    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography className='heading' sx={{ fontWeight: 400, color: 'info.main', mt: 10, mb: 5, }} variant="h3" component="div">
                        Reviews



                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            reviews.map(review => <Review key={review._id} review={review}></Review>)
                        }





                    </Grid>
                </Container>
            </Box>

        </div>
    );
};

export default Reviews;