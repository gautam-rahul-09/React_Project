import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";  // Update path based on the folder structure
import Services from "../Services";
import Blog  from "../Bag";
import Dashboard from "../Dashboard";
import Login from "../Login";
import SignUp from "../SignUp";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Bag" element={<Blog/>} />
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path ="/SignUp" element={<SignUp/>}/>
      
    </Routes>
  );
};

export default Routing;
