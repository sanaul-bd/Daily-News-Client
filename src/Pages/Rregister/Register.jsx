import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';


const Register = () => {
    useTitle('Register')
    // set error state
    const [error, setError] = useState('')
    // accepted state
    const [accepted, setAccepted] = useState(false)
    // get creat User context
    const { creatUser, updateUserProfile,verifyEmail } = useContext(AuthContext);
    // ? for redirect after loggd in
    const navigaete = useNavigate()

    const handleRegSubmit = (e) => {
        e.preventDefault();

        // get data 
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        creatUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log("User_____created", user);
                form.reset()
                setError('')
                navigaete('/')
                // updateUserProfile()
                handleUpdateUserProfile(name, email);
                handleEmailVerification();
                toast.success('Please Verify your Email Address')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    // 
    const handleUpdateUserProfile =(name, email)=>{
        const profile = {
            displayName: name,
            email: email
        }
        updateUserProfile(profile)
        .then(()=>{
            console.log("UsrProfileUpdated");
        })
        .catch(error => console.log(error))
    }
    // handle Email verification
    const handleEmailVerification = () =>{
        verifyEmail()
        .then(()=>{
            console.log('E-----mail varification send')
        })
        .catch(error => console.error(error))
    }

    // checkbox handler
    const handleAcceptedCheckBox = (e) => {
        setAccepted(e.target.checked)
        // console.log(accepted);
    }


    return (
        <>
            <Form onSubmit={handleRegSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAcceptedCheckBox}
                        type="checkbox"
                        label={<> Trams and <Link to='/terms'>Conditons </Link> </>}
                    />
                </Form.Group>

                <Button variant="light" type="submit" disabled={!accepted}>
                    Register
                </Button> <br />
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>
        </>
    );
}

export default Register;