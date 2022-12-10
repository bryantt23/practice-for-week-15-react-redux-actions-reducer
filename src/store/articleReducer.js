import articles from '../data/data.json';
const LOAD_ARTICLES = 'article/loadArticles';

const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    payload: articles
  };
};

export default loadArticles;
