import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrders, setMyorders] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch(`https://joli-livre-90273.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [control]);

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete');
        if (proceed) {
            fetch(`https://joli-livre-90273.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleltedCount) {

                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })
        }

    }

    return (

        <Container>
            <h1>My Booking List</h1>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Order id</th>
                            <th>Product Name</th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => (
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.email}</td>

                                    <td><Button onClick={() => handleDelete(order._id)} variant='error'> Delete</Button> </td>
                                </tr>

                            ))
                        }


                    </tbody>
                </Table >
            </Container >
        </Container >
    );
};

export default MyOrder;