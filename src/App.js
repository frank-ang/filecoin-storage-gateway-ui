import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Menubar from './components/Menubar'
import Home from './components/Home'
import DataSets from './components/DataSets'
import DataSetConfigEditor from './components/DataSetConfigEditor';
import ReplicaConfigEditor from './components/repl/ReplicaConfigEditor';
import SPCatalog from './components/sp/SPCatalog';
import DataSetBrowser from './components/retrieve/DataSetBrowser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="DataSets" element={<DataSets/>} />
            <Route exact path="DataSetConfigEditor" element={<DataSetConfigEditor/>}/>
            <Route exact path="ReplicaConfigEditor" element={<ReplicaConfigEditor/>}/>
            <Route exact path="SPCatalog" element={<SPCatalog/>} />
            <Route exact path="DataSetBrowser" element={<DataSetBrowser/>} />           
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
