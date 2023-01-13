import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Menubar from './components/Menubar'
import Home from './components/Home'
import DataSets from './components/DataSets'
import DataSetConfigEditor from './components/DataSetConfigEditor';
import "./index.css";

import { 
  BrowserRouter as Router, 
  Route ,
  Routes
} from "react-router-dom";

const Footer = () => {
  return (
      <footer className="fixed-bottom footer text-center text-muted bg-dark">
        © 2023 Ecosystem Network Growth Team
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
            <Route exact path="DataSets" element={<DataSets/>} />
            <Route exact path="DataSetConfigEditor" element={<DataSetConfigEditor/>}/>
          </Routes>
        </Router>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
