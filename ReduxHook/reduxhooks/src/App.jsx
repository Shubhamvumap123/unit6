import React, { useState } from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './Components/Home'
import './App.css'
import Login from './Components/Login';
import TodosCreate from './Components/TodosCreate'
import {useSelector} from 'react-redux'
const PrivateRoutes = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
const {isAuthenticated} = useSelector ((state) => state.login)

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          
          element={
           
            <PrivateRoutes isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/TodoCreate"
          element={
            <PrivateRoutes isAuthenticated={isAuthenticated}>
              <TodosCreate />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </div>
  );
  
}

export default App
