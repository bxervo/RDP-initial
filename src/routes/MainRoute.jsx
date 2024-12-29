import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFount from '../views/NotFount';
import Main from '../views/Main';
import LayBooks from '../Layouts/LayBooks';
import Books from '../views/Books';
import BookView from '../views/BookView';
import LayNormal from '../Layouts/LayNormal';
import Checkout from '../views/Checkout';
import ValidPay from '../views/ValidPay';

function MainRoute() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/books" element={<LayBooks><Books /></LayBooks>} />
          <Route path="/books/:idBooks" element={<LayBooks><BookView /></LayBooks>} />
          {/* <Route path="/cart" element={<LayNormal><Cart /></LayNormal>} /> */}
          <Route path="/cart/checkout" element={<LayNormal><Checkout /></LayNormal>} />
          <Route path="/cart/checkout/success" element={<LayNormal><ValidPay /></LayNormal>} />
          <Route path="*" element={<LayBooks><NotFount /></LayBooks>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainRoute