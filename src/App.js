import React from "react";
import Signup from './auth/Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Signin from './auth/Signin/Signin'
import ForgetPassword from "./auth/ForgetPassword/ForgetPassword";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget-password" element={<ForgetPassword />}/>
      </Routes>
    </Router>
  );
}

export default App;
