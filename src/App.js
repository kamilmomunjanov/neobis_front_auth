import React, {useState, useEffect} from "react";
import Registration from "./Components/Registration/Registration";
import UserInfo from "./Components/UserInfo/UserInfo";
import Login from "./Components/Login/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import "./App.css";
import Password from "./Components/Password/Password";
import Home from "./Components/Home/Home";
import Reset from "./Components/Reset/Reset";
import ResetPassword from "./Components/ResetPassword/ResetPassword";


function App() {


  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            <Route path="/register" element={<Registration/>}/>
            <Route path="/userinfo" element={<UserInfo/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/password" element={<Password/>}/>
            <Route path="/reset" element={<Reset/>}/>
            <Route path="/reset/password" element={<ResetPassword/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
