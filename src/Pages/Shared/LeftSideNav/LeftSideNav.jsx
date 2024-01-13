import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categoris, setCategoris] = useState([])

    useEffect(() => {
        fetch('https://daily-news-server-sanaul-bd.vercel.app/news-categoris')
            .then(res => res.json())
            .then(data => setCategoris(data))
    }, []);
    // console.log(categoris);
    return (
        <div>
            <h4>Categori</h4>
            <>
                {
                    categoris.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </>
        </div>
    );
};

export default LeftSideNav;