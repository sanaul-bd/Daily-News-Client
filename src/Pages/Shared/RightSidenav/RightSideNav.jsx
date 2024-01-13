import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter, FaLinkedin } from "react-icons/fa";
import './RightSideNav.css'
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
    // get login function
    const {googleSignIn} = useContext(AuthContext)

    // todo Google sign in btn event
    const handleGoogleSignIn = ()=>{
        // console.log('Google clicked');
        googleSignIn(googleprovider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    // auth provider
    const googleprovider = new GoogleAuthProvider();


    // todo Github sign in btn event
    const handleGithubSignIn = ()=>{
        console.log('Github clicked');
    }
    return (
        <div className=''>
            <ButtonGroup vertical className='button-grup w-100'>
                <Button onClick={handleGoogleSignIn} className='logBtn' variant='outline-primary'><span className='ps-3'><FaGoogle /> Login With Google</span></Button>
                <Button onClick={handleGithubSignIn} className='logBtn' variant='outline-dark'><span className='ps-3'><FaGithub /> Login With Github</span></Button>
            </ButtonGroup>
            <h4 className='py-2 ps-2'>Find on us</h4>
            <div>
                <ListGroup>
                    <a href="https://www.w3schools.com" target="blank"><ListGroup.Item className='mb-1'><FaFacebook />Facebook</ListGroup.Item></a>
                    <a href="https://web.whatsapp.com" target="blank"><ListGroup.Item className='mb-1'><FaWhatsapp />Whats app</ListGroup.Item></a>
                    <a href="https://twitter.com/" target="blank"><ListGroup.Item className='mb-1'><FaTwitter />Twitter</ListGroup.Item></a>
                    <a href="https://www.twitch.tv/" target="blank"><ListGroup.Item className='mb-1'><FaTwitch />Twich</ListGroup.Item></a>
                    <a href="https://www.linkedin.com/" target="blank"><ListGroup.Item className='mb-1'><FaLinkedin />Linkdin</ListGroup.Item></a>
                </ListGroup>
            </div>
            {/* import Brand Carousel Components */}
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;