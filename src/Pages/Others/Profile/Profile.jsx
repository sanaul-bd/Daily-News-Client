import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    // get user froom use Context
    const {user} = useContext(AuthContext)
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control defaultValue={user?.email} readOnly type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control defaultValue={user?.displayName} type="text" placeholder="User Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>


            
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;