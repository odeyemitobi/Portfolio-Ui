import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/main/Home';
import Blog from './Pages/main/Blog';
import Work from './Pages/main/Work';
import WorkDetails from './Pages/sub/WorkDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/workdetails" element={<WorkDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
