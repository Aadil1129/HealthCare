import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import PagesServices from "./pages/services";
import PagesAbout from "./pages/about";
import PagesDepartment from "./pages/department";
import PagesDoctor from "./pages/doctor";
import PagesOffers from "./pages/offers";
import PagesFaq from "./pages/faq";
import Home from "./components/home/index.jsx";
import { Routes, Route } from "react-router-dom";
// ..
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/doctor" exact element={<PagesDoctor />} />
        <Route path="/services" exact element={<PagesServices />} />
        <Route path="/about" exact element={<PagesAbout />} />
        <Route path="/Offers" exact element={<PagesOffers />} />
        <Route path="/faq" exact element={<PagesFaq />} />
        <Route path="/department" exact element={<PagesDepartment />} />
      </Routes>
    </div>
  );
}

export default App;
