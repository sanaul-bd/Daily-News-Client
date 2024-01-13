import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    useTitle('Login')
    // get ridirect location by useLocation hook
    const location = useLocation()
    // get exisest location 
    const from = location.state?.from?.pathname || '/';


    // set erro
    const [error, setError] = useState('')

    // get the auth 
    const { logInWithIdPass, setLoading } = useContext(AuthContext)
    // ? for redirect after loggd in
    const navigaete = useNavigate()


    const loginEventSubmit = (e) => {
        e.preventDefault();

        // get data 
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        logInWithIdPass(email, password)
            .then(result => {
                const user = result.user;
                console.log("Loggged in ____matched ", user);
                form.reset()
                setError('')
                if(user.emailVerified){
                    navigaete(from, {replace: true})
                }
                else{
                    toast.error('Your Email is not Verified. ')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(()=>{
                setLoading(false)
            })
    };





    return (
        <Form onSubmit={loginEventSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="light" type="submit">
                Log in
            </Button> <br />
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;