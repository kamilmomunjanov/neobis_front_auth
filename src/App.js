import React, {useState, useEffect} from "react";
import Registration from "./Components/Registration/Registration";
import UserInfo from "./Components/UserInfo/UserInfo";
import Login from "./Components/Login/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import "./App.css";
import Password from "./Components/Password/Password";


function App() {


  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            <Route path="/register" element={<Registration/>}/>
            <Route path="/userinfo" element={<UserInfo/>}/>
            <Route path="/password" element={<Password/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
