import { useState } from "react";
// import {Country} from './components/country'
import "./App.css";
// import { City } from './components/city'
import { Route, Routes } from "react-router-dom";
import { AddCountry } from "./components/addCountry";

import { Home } from "./components/Home";
import { AddCity } from "./components/addCity";
function App() {
  return (
    <>
      <Routes>
        <Route path="/add-country" element={<AddCountry />}></Route>
        <Route path="/add-city" element={<AddCity />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* <Country/>
   <br />
   <City/> */}
    </>
  );
}

export default App;
