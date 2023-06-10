import {createContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import api from "../api/api";
import axios from "axios";

export const CustomContext = createContext()


const Context = (props) => {

    const [user, setUser] = useState({email:""})
    const [popup, setPopup] = useState(false)
    const navigate = useNavigate()
    const {id, token} = useParams()

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
            setUser(res)
            navigate('/register')
            localStorage.setItem("user", JSON.stringify(res))
        })
    }

    const activateEmail = (data) => {
        api.post('auth/register/email/', {
            json: data
        }).json().then((res) => {
            setUser(res)
            setPopup(true)
            localStorage.setItem("user", JSON.stringify(res))
        })
    }
    const resetPassword = (data) => {
        api.post('auth/request-reset-email/', {
            json: data
        }).json().then((res) => {
            setPopup(true)
        })
    }
    // http://35.234.124.146/auth/password-reset/Nzk/bpl5m8-b834f17ab43e510b1e927e5a03bbb543/
    //     const checkPassword = (data) => {
    //         api.post(`auth/reset-password/confirm/`, {
    //             json: {
    //                 ...data
    //             }
    //             }
    //         ).json().then((res) => {
    //             setUser(res)
    //             setPopup(true)
    //         })
    //     }

    const userInfo = (data) => {
        api.put('auth/register/personal-info/?email=momunjanov@inbox.ru/', {
                json:{
                    ...data,
                    birth_date: "1999-02-05"
                }
        }).json().then((res) => {
            setUser(res)
            localStorage.setItem("user", JSON.stringify(res))
            navigate('/password')
        })
    }

    const addPassword = (data) => {
        api.put('auth/register/password/momunjanov@inbox.ru/', {
            json: {
                ...data
            }
        }).json().then((res) => {
            setUser(res)
            navigate('/')
            localStorage.setItem("user", JSON.stringify(res))
        })
    }

    const loginUser = (user) => {
        api.post('auth/login/', {
            header: {
                "content-type": "application/json"
            },
            json: {
                ...user
            }
        }).json().then((res) => {
            setUser(res)
            console.log('вошли в акк')
            console.log(res)
            navigate('/home')
            localStorage.setItem("user", JSON.stringify(res))
        })
    }

    let value = {
        user, setUser, activateEmail, loginUser, popup, setPopup,userInfo,addPassword,resetPassword
    }

    return <CustomContext.Provider value={value} >
        {
            props.children
        }
    </CustomContext.Provider>
}

export default Context