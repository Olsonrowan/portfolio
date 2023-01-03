import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './routes/home/home';
import About from './routes/about/about';
import Projects from './routes/projects/projects';
import Contact from './routes/contact/contact';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/projects" element={<Projects />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;