import React, {useState, useEffect} from 'react';
import articles from './article-content';

const ArticlesPage = ({match}) => {
  const name = match.params.name;

  const [articlesInfo, setArticlesInfo] = useState({upvotes: 0, comments: []});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/articles/${name}`);
      const data = await res.json();
      setArticlesInfo(data);
    };
    fetchData();
  }, [name]);

  const article = articles.find((article) => article.name == name);
  if (!article) return <h1> Artile Does not exist</h1>;

  return (
    <>
      <h1>This is an article {name} page</h1>
      <p>{article.title}</p>
      <p> upvotes {articlesInfo.upvotes}</p>
    </>
  );
};

export default ArticlesPage;
