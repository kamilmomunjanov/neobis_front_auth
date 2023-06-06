import React, {useState, useEffect} from "react";
import Register from "./Components/Register/Register";
import {Routes, Route} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import api from "./config/api/api"
import "./App.css";


function App() {

    const [users, setUsers] = useState()

    useEffect(() => {
        api("users").json()
            .then((res) => console.log(res))
    }, [])


  return (
    <>
        <Routes>
            <Route path="" element={<Register/>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            {/*<Route path="/register" element={<Register/>}/>*/}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
