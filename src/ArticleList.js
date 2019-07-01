import React from 'react';
import { Link } from 'react-router-dom';
const articles = require("./articles.json");



const ArticleList = () => {
    /*
    const article_jsx = Object.keys(articles).map((x) => {
        <Link to={"/" + articles[x].key}>
            <h3>{x.title + ": " + x.date}</h3>
        </Link>
    });
    */

    const article_jsx = Object.keys(articles).map((x) => <Link to={"/"+articles[x].key}><h3>{articles[x].title}</h3></Link>);
    return (
    <div className="article-list">
        <h2>articles</h2>
        {article_jsx}
    </div>
    )}


export default ArticleList;