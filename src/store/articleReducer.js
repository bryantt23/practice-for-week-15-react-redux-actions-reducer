import articles from '../data/data.json';
const LOAD_ARTICLES = 'article/loadArticles';
const initialState = { entries: [], isLoading: true };

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: action.payload };
    default:
      return state;
  }
};

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    payload: articles
  };
};

export default articleReducer;
