import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const About = () => {
    return (
        <div>
            <Container>
                <Typography sx={{ fontWeight: 400, color: 'info.main', mb: 5, textDecoration: 'underline dotted', mt: 5 }} variant='h3'>About us!</Typography>
                <Typography variant='h5'>
                    Niche watch,we are the online based watch shop.We providing our customer the best quality watch with a minmum price .It is our responsiblity to provide the best watch to the customer.The watch exactly same as the photos are given in the website.If customer does not like the watch after getting watch ,they can return it.

                </Typography>
                <Typography variant='h5'>Customer satisfaction is our main goal.</Typography>
            </Container>


        </div>
    );
};

export default About;