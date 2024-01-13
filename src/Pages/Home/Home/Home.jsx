import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    const AllNews = useLoaderData()
    return (
        <div className='px-0 py-0'>
            {
                AllNews.map(news => <NewsSummaryCart
                key={news._id}
                news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;