import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const AddProduct = () => {
    const [product, setProduct] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        console.log(newProduct);
        setProduct(newProduct);

    }
    console.log(product);
    const handleAddProduct = e => {
        fetch(`https://joli-livre-90273.herokuapp.com/watches`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    window.confirm('Product added successfully')
                }
            })
        e.preventDefault();
    }

    return (
        <>

            <form onSubmit={handleAddProduct}>
                <TextField
                    sx={{ width: "90%", m: 2 }}
                    id="standard-basic"
                    name="name"
                    onBlur={handleOnBlur}
                    label="Product name"
                    variant='filled'
                />
                <TextField
                    sx={{ width: "90%", m: 2 }}
                    id="standard-basic"
                    name="img"
                    type=""
                    onBlur={handleOnBlur}
                    label="Photo Url"
                    variant="filled" />

                <TextField
                    sx={{ width: "90%", m: 2 }}
                    id="standard-basic"
                    name="description"
                    onBlur={handleOnBlur}
                    label="Description"
                    variant="filled" />

                <TextField
                    sx={{ width: "90%", m: 2 }}
                    id="standard-basic"
                    name="price"
                    onBlur={handleOnBlur}
                    label="Price"
                    variant="filled" />


                <Button sx={{ width: "90%", m: 2 }} variant="contained" type="submit">Add Product</Button>

            </form>
        </>
    );
};

export default AddProduct;