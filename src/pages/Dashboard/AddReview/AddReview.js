import React from 'react';
import { Button, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const AddReview = () => {
    const { user } = useAuth();
    const initialCustomerInfo = { customerName: user.displayName, email: user.email, review: '' }
    const [review, setReview] = useState(initialCustomerInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    const handleReview = e => {

        fetch(`https://joli-livre-90273.herokuapp.com/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    window.confirm('your review submitted successfully')
                }
            })


        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleReview}>

                <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    variant='standard'
                    name="customerName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    placeholder="name"
                    size="small"
                    disabled
                />
                <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    variant='standard'
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    placeholder='email'
                    size="small"
                    disabled
                />
                <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    variant='standard'
                    name="review"
                    onBlur={handleOnBlur}
                    defaultValue=""
                    placeholder='review'
                    multiline
                    rows={2}
                    maxRows={4}

                    size="small"
                />




                <Button sx={{ width: "90%", m: 2 }} variant="contained" type="submit">Add Review</Button>

            </form>

        </div>
    );
};

export default AddReview;