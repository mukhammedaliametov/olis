import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Main />
    </BrowserRouter>
  );
};

export default App;