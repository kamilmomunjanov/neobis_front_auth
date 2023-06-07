import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../api/api";
import axios from "axios";

export const CustomContext = createContext()


const Context = (props) => {

    const [user, setUser] = useState({email:""})
    const [popup, setPopup] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
    }, [])

    const registerUser = (user) => {
        api.post('register', {
            header: {
                "content-type": "application/json"
            },
            json: {
                ...user
            }
        }).json().then((res) => {
            setUser(res.user)
            navigate('/register')
            localStorage.setItem("user", JSON.stringify(res.user))
        })
    }

    const activateEmail = (data) => {
        api.post('auth/register/email/', {
            json: data
        }).json().then((res) => {
            setUser(res.data)
            setPopup(true)
            localStorage.setItem("user", JSON.stringify(res.data))
        })
    }

    const userInfo = (data) => {
        api.patch('auth/register/personal-info/?email=momunjanov@inbox.ru/', {
                json:{
                    email: "momunjanov@inbox.ru",
                    ...data,
                    birth_date: "1999-02-05"
                }
        }).then((res) => {
            setUser(res.data)
            setPopup(true)
            localStorage.setItem("user", JSON.stringify(res.data))
        })
    }

    const loginUser = (user) => {
        api.post('login', {
            header: {
                "content-type": "application/json"
            },
            json: {
                ...user
            }
        }).json().then((res) => {
            setUser(res.user)
            navigate('/register')
            localStorage.setItem("user", JSON.stringify(res.user))
        })
    }

    let value = {
        user, setUser, activateEmail, loginUser, popup, setPopup,userInfo
    }

    return <CustomContext.Provider value={value} >
        {
            props.children
        }
    </CustomContext.Provider>
}

export default Context