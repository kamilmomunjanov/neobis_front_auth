import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../api/api";

export const CustomContext = createContext()


const Context = (props) => {

    const [user, setUser] = useState({email:""})
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
        user, setUser, registerUser, loginUser
    }

    return <CustomContext.Provider value={value} >
        {
            props.children
        }
    </CustomContext.Provider>
}

export default Context