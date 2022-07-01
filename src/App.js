import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { LookData } from './Components/LookData/LookData';
import { SectionMap } from './Components/SectionMap/SectionMap';
import { Register } from './Components/Loguin/Register';
import { Login } from './Components/Loguin/Login';
import { ProotectedRoute } from './Components/Loguin/ProtectedRoute';

function App() {
//Listo la configuracion del store. Se puede comenzar el proyecto :D

  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/home"/>}/>

            <Route path="/home" element={[
            <ProotectedRoute key={"ProotectedRoute"}>
              <Header key={"header"}/><LookData key={"lookData"}/><SectionMap key={"sectionMap"}/>
            </ProotectedRoute>
            ]}/>

          <Route exact path='/register' element={<Register/>}/>
          
          <Route exact path='/Login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;

