import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Fetchdata from "./components/Fetchdata";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/general" element={<Fetchdata cat="general" />} />
          <Route path="/business" element={<Fetchdata cat="business" />} />
          <Route
            path="/entertainment"
            element={<Fetchdata cat="entertainment" />}
          />
          <Route path="/health" element={<Fetchdata cat="health" />} />
          <Route path="/science" element={<Fetchdata cat="science" />} />
          <Route path="/sports" element={<Fetchdata cat="sports" />} />
          <Route
            exact
            path="/technology"
            element={<Fetchdata cat="technology" />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
