import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import ArticleList from './ArticleList';
import Footer from './Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <ArticleList />
      <Footer />
    </div>
  )
}

export default App;
