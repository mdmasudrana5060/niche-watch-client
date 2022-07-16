import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);

    };
    const handleAdminSubmit = e => {
        const user = { email };
        fetch(`https://joli-livre-90273.herokuapp.com/users/admin`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);


                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField

                    sx={{ width: "90%", m: 2 }}
                    variant="filled"
                    placeholder="Email"
                    name="name"
                    onBlur={handleOnBlur}
                />
                <Button variant='contained' type='submit'>Make Admin</Button>
            </form>
            {success && <Alert severity='success'>Made Admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;