import React, {useContext} from 'react';
import {CustomContext} from "../../config/context/context";
import Form from "../Form/Form";

const Login = () => {
    const context = useContext(CustomContext)

    return (
        <>
            <Form/>
        </>
    );
};

export default Login;