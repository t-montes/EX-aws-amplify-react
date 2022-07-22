import './App.css';
import { BrowserRouter as Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Premium from './pages/Premium';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="nav-content">
          <Nav.Link className="nav-content" href="/">Home</Nav.Link>
          <Nav.Link className="nav-content" href="/about">About</Nav.Link>
          <Nav.Link className="nav-content" href="/premium">Premium</Nav.Link>
        </div>
      </Router>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/premium" exact element={<Premium />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
