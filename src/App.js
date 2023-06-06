import React, {useState, useEffect} from "react";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import api from "./config/api/api"
import "./App.css";


function App() {

    const [users, setUsers] = useState()

    // useEffect(() => {
    //     api("users").json()
    //         .then((res) => console.log(res))
    // }, [])


  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
