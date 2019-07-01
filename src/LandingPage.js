import React from 'react';
import Introduction from './Introduction';
import ArticleList from './ArticleList';
import Footer from './Footer';

import './App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Introduction />
      <ArticleList />
      <Footer />
    </div>
  )
}

export default LandingPage;