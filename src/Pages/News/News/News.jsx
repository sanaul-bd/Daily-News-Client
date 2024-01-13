import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const News = () => {
    useTitle('News Detile')
    const news = useLoaderData()
    const { title, details, image_url, category_id } = news;
    console.log(news);
    return (
        <div>
            <Card className='mx-3 my-1'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='p-0 my-2'>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Read Rilevent News</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;