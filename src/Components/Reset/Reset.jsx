import React, {useContext} from 'react';
import Form from "../Form/Form";
import {CustomContext} from "../../config/context/context";

const Reset = () => {

    const {user, popup, setPopup} = useContext(CustomContext)
    return (
        <>
           <Form/>
            {
                popup ?  <div className="form__popup">
                    На вашу почту «{user.email}» было отправлено письмо
                    <button onClick={() => setPopup(false)}>Закрыть</button>
                </div> : ''
            }
        </>
    );
};

export default Reset;