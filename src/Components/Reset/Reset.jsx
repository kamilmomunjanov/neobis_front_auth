import React, {useContext} from 'react';
import Form from "../Form/Form";
import {CustomContext} from "../../config/context/context";
import "./Reset.css";

const Reset = () => {

    const {user, popup, setPopup} = useContext(CustomContext)
    return (
        <>
           <Form/>
            {
                popup ?  <div className="form__popup">
                    На вашу почту «{user.email}» <br/> было отправлено письмо
                    <button className="close" onClick={() => setPopup(false)}>Закрыть</button>
                </div> : ''
            }


        </>
    );
};

export default Reset;