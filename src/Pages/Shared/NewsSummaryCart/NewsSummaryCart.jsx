import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar,FaEye } from 'react-icons/fa';

const NewsSummaryCart = ({ news }) => {
    const { author, category_id, details, image_url, thumbnail_url, title, total_view, _id , rating} = news;
    // console.log(author.name);

    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='py-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between'>
                            <Image
                                roundedCircle
                                style={{ height: '60px' }}
                                src={author?.img}
                            ></Image>
                            <div className='ms-3'>
                                <p className='mb-0'>{author?.name}</p>
                                <p className='mb-0'>{author?.published_date}</p>
                            </div>
                        </div>
                        <div>
                            <FaRegBookmark className='me-2'/>
                            <FaShareAlt />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body className='p-0'>
                    <Card.Title className='text-primary py-2'>
                        {title}
                    </Card.Title>
                    <Card.Img variant='top' src={image_url} alt="Card image" />
                    <Card.Text className='py-3'>
                        {
                            details.length > 250 ?
                                <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </> :
                                <>{details}</>
                        }
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className=' d-flex align-items-center'>
                        <FaStar className='text-danger me-1'/>
                        <span className='ms-1'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye/>
                        <span className='ms-2'>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCart;