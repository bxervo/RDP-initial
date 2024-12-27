import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import NotFount from '../views/NotFount';

function MainRoute() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainRoute