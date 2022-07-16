import { TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Button } from '@mui/material';
import './SingleProduct.css';


const PlaceBooking = ({ product }) => {
    const { user } = useAuth();
    const { name, price } = product;

    const initialCustomerInfo = { customerName: user.displayName, email: user.email, phoneNumber: '' }
    const [order, setOrder] = useState(initialCustomerInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order };
        newOrder[field] = value;
        setOrder(newOrder);
    }
    const handleSubmit = e => {
        const Order = {
            ...order,
            productName: name,
            productPrice: price,


        };

        fetch(`https://joli-livre-90273.herokuapp.com/orders`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(Order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    window.alert("Order submitted successfully");


                }
            })



        e.preventDefault();
    }






    return (
        <div >
            <form className='form' onSubmit={handleSubmit}>


                <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    variant='standard'
                    name="customerName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    placeholder="name"
                    size="small"
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
                />




                <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    variant='standard'
                    name="phoneNumber"
                    onBlur={handleOnBlur}
                    defaultValue=""
                    placeholder='phone number'

                    size="small"
                />


                <Button type="submit" sx={{ m: 1 }} variant="contained" >submit</Button>
            </form>


        </div >
    );
};

export default PlaceBooking;