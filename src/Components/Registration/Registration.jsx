import React, {useContext, useState} from 'react';
import Form from "../Form/Form";
import {CustomContext} from "../../config/context/context";


const Registration = () => {


    const {user, popup, setPopup} = useContext(CustomContext)

    return (
        <div>
            <Form />
            {
                popup ?  <div className="form__popup">
                    На вашу почту «{user.email}» было отправлено письмо
                    <button onClick={() => setPopup(false)}>Закрыть</button>
                </div> : ''
            }

        </div>
    );
};

export default Registration;