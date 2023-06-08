import React, {useContext} from 'react';
import {CustomContext} from "../../config/context/context";

const Home = () => {
    const {user} = useContext(CustomContext)
    return (
        <div>
            Поздравляем вы вошли в аккаунт
            Email : {user.email}
        </div>
    );
};

export default Home;