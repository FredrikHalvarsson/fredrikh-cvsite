import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';
import {useEffect, useState} from 'react';
import EggTypeModal from './components/ui/EggTypeModal'

export default function App() {
  const [keys, setKeys] =useState([]);
  const keySequence = 'nggyu';
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {

  const handleKeyPress = (event) => {
    setKeys((previousKeys) => [...previousKeys, event.key].slice(-keySequence.length));
    setKeys(keys => {
      if (keys.join('')===keySequence) {
        setModalOpened(true);
        setKeys([]);
      }
      else {
        setModalOpened(false);
      }
      return keys;
    })
  };

  document.addEventListener('keydown', handleKeyPress);
  return ()=>{
    document.removeEventListener('keydown', handleKeyPress);
  };
  
}, [keys]);

  return (
    <Router>
    <div className="site-container">
      <header className="site-header">
        <Menu/>
      </header>
      <main className="site-content">
        {modalOpened && <EggTypeModal/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/CV" element={<CV/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <footer className="site-footer">
        <Footer/>
      </footer>
    </div>
    </Router>
  );
}