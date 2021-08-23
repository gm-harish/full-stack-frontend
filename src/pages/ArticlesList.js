import React from 'react';
import articles from './article-content';
import {Link} from 'react-router-dom';

const ArticlesList = () => (
  <>
    <h1>Articles List</h1>
    {articles.map((article) => (
      <Link to={`/articles/${article.name}`}>
        <h3 key={article.title}>{article.title}</h3>
      </Link>
    ))}
  </>
);

export default ArticlesList;
