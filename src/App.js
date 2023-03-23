import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/main/Home';
import Blog from './Pages/main/Blog';
import Work from './Pages/main/Work';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
