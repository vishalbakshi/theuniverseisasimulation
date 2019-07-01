import React from 'react';
import Introduction from './Introduction';
import ArticleList from './ArticleList';

import './App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Introduction />
      <ArticleList />
    </div>
  )
}

export default LandingPage;