import React, {useContext} from 'react';
import {CustomContext} from "../../config/context/context";
import "./Home.css";

const Home = () => {
    const {user} = useContext(CustomContext)
    return (
        <div className="home">
            Поздравляем вы вошли в аккаунт
            Email : {user.email}
        </div>
    );
};

export default Home;