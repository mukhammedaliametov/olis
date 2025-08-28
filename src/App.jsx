import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
