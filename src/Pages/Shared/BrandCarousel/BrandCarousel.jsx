import Carousel from 'react-bootstrap/Carousel';
import Camera from '../../../assets/Image/camera.png'
import Drone from '../../../assets/Image/drone.png'
import Light from '../../../assets/Image/lights.png'

function BrandCarousel() {
    return (
        <Carousel className='py-2'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Camera}
                    alt="Camera"
                />
                {/* <Carousel.Caption>
                    <h3>Camera</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Drone}
                    alt="Drone"
                />

                {/* <Carousel.Caption>
                    <h3>Drone</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Light}
                    alt="Light"
                />

                {/* <Carousel.Caption>
                    <h3>Light</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default BrandCarousel;