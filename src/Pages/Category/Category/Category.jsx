import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';
import useTitle from '../../../Hooks/useTitle';

const Category = () => {
    const categoryNews = useLoaderData()
    // console.log(categoryNews); 
    useTitle('Category')

    return (
        <div>
            {/* <h2>THis is Category has news {categoryNews.length}</h2> */}
            {
                categoryNews.map(news => <NewsSummaryCart
                    key={news._id}
                    news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Category;