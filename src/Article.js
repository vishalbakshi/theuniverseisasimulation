import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const articles = require('./articles.json');

const Article = ({ match }) => (

    <div className="article">
        <Link to={"/"}>
            <p id="back-button">&lt;</p>
        </Link>
        <h2 className="title">{articles[match.params.date].title}</h2>
        <h3 className="date">{articles[match.params.date].date}</h3>
        <p className="body">{articles[match.params.date].body}</p>
    </div>
)

export default Article;