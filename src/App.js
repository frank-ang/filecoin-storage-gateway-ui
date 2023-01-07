import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Menubar from './components/Menubar'
import Home from './components/Home'
import "./index.css";

import { 
  BrowserRouter as Router, 
  Route ,
  Link, 
  Routes
} from "react-router-dom";


const Footer = () => {
  return (
      <footer className="fixed-bottom footer text-center text-muted bg-dark">
        © 2023 Frank Ang
      </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Container>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </Router>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
