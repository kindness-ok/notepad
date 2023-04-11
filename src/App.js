import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Main from './pages/Main.jsx';

const App = () => (
  <BrowserRouter>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Notepad-By-KindnessOkpugie</title>
      <link rel="canonical" href="#" />
    </Helmet>
    <Routes>
      <Route path='/' element={<Main />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
