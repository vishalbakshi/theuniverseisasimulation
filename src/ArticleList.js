import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = () => (
    <div class="article-list">
        <h2>articles</h2>
        <Link to={"/20190701"}>
            <h3>binary opposite states: monday, july 1, 2019</h3>
        </Link>
        
    </div>
)


export default ArticleList;