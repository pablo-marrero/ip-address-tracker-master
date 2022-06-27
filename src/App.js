import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { LookData } from './Components/LookData/LookData';
import { SectionMap } from './Components/SectionMap/SectionMap';

function App() {
//Listo la configuracion del store. Se puede comenzar el proyecto :D

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home"/>}>
        </Route>

        <Route path="/home" element={[<Header key={"header"}/>,<LookData key={"lookData"}/>,<SectionMap key={"sectionMap"}/>]}/>

        </Routes>
      </Router>
    </>
  );
}
export default App;

