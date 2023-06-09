import React, {useContext, useEffect, useRef, useState} from 'react';
import "./Form.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {CustomContext} from "../../config/context/context";

const Form = () => {

    const [passwordView, setPasswordView] = useState(false)

    const password = useRef()
    const location = useLocation()
    const {loginUser, activateEmail, user,userInfo,addPassword, resetPassword, checkPassword} = useContext(CustomContext)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onBlur"
    })

    const viewPassword = () => {
        setPasswordView(prevState => !prevState)
    }

    password.current = watch("password")

    const submitForm = (data) => {
        if (location.pathname === "/register") {
            activateEmail(data)
        }else if (location.pathname === '/userinfo'){
            userInfo(data)
        } else if (location.pathname === '/password') {
            addPassword(data)
        } else if (location.pathname === "/reset") {
            resetPassword(data)
        } else if (location.pathname === "/reset/password") {
            checkPassword(data)
        } else {
            loginUser(data)
        }
    }


    return (
        <div className="form">


            <form noValidate className="form__content" onSubmit={handleSubmit(submitForm)}>
                    <span className="form__logo">
                        {
                            location.pathname === "/"  ? "Sign In" : "Sign Up"
                        }
                    </span>
                {/*/!*<img src="../../../public/img/Frame.png" alt=""/>*!/ Dont work*/}

                {
                    location.pathname !== '/' &&  <button className='form__back' onClick={() => navigate(-1)}>Назад</button>
                }

                {
                    location.pathname === "/userinfo" && <label className="form__label">
                        <input {...register("first_name", {
                            required: {
                                message: "Имя обязательно к заполнению",
                                value: true
                            },
                            minLength: {
                                message: "Минимум 2 символа",
                                value: 2
                            },
                            pattern: {
                                message: "Напишите правильно своё имя",
                                value: /^[а-яА-ЯёЁa-zA-Z]+$/
                            }
                        })} className="form__label-input" type="text" placeholder="Имя"/>
                        <p className="register__label-error">
                            {errors.first_name && errors.first_name?.message}
                        </p>
                    </label>
                }
                {
                    location.pathname === "/userinfo"  && <label className="form__label">
                        <input {...register("last_name", {
                            required: {
                                message: "Фамилия обязательна к заполнению",
                                value: true
                            },
                            minLength: {
                                message: "Минимум 2 символя",
                                value: 2
                            },
                            pattern: {
                                message: "Напишите правильно свою фамилию",
                                value: /^[а-яА-ЯёЁa-zA-Z]+$/
                            }
                        })} className="form__label-input" type="email" placeholder="Фамилия"/>
                        <p className="register__label-error">
                            {errors.last_name && errors.last_name?.message}
                        </p>
                    </label>
                }

                {/*{*/}
                {/*    location.pathname === '/userinfo' &&   <label className='form__label'>*/}

                {/*        <div className='form__label-field'>*/}
                {/*            <InputMask mask={`+\\9\\96(999)99-99-99`} {...register('phone', {*/}
                {/*                required: {*/}
                {/*                    value: true,*/}
                {/*                    message: 'Это поле обязательное'*/}
                {/*                },*/}
                {/*                pattern: {*/}
                {/*                    value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,*/}
                {/*                    message: 'Заполните номер телефона'*/}
                {/*                }*/}
                {/*            })} className='form__label-input' type="tel" placeholder='Enter your phone'/>*/}
                {/*        </div>*/}
                {/*        <p className='register__label-error'>*/}
                {/*            {errors.phone && errors.phone?.message}*/}
                {/*        </p>*/}
                {/*    </label>*/}
                {/*}*/}
                {
                    location.pathname === "/reset" ? <h2 className="reset">Сброс пароля</h2> : ""
                }
                {
                    location.pathname === "/reset" ? <p className="reset__text">На введенную вами почту мы отправим ссылку, <br/>
                        перейдя по которой вы сможете сбросить пароль</p> : ""
                }

                {
                    location.pathname === '/register' || location.pathname === '/' || location.pathname === '/userinfo' || location.pathname === "/reset" ?  <label className="form__label">
                        <input {...register("email", {
                            required: {
                                message: "Email обязателен к заполнению",
                                value: true
                            },
                            minLength: {
                                message: "Минимум 10 символов",
                                value: 10
                            },
                            pattern: {
                                message: "Напишите правильно свой Email",
                                value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })} className="form__label-input" type="email" placeholder="Электронная почта"/>
                        <p className="register__label-error">
                            {errors.email && errors.email?.message}
                        </p>
                    </label> : ''
                }


                {
                    location.pathname === '/password' || location.pathname === '/' || location.pathname === '/reset/password' ? <label className="form__label">
                        <div className="form__label-field">
                            <input {...register("password", {
                                required: {
                                    message: "Пароль обязателен к заполнению",
                                    value: true
                                },
                                pattern: {
                                    message: "Пароль должен содержать не менее 8 символов, заглавную букву, число",
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                }
                            })} className="form__label-input" type={passwordView ? "text" : "password"} placeholder="Пароль"/>
                            <span className="form__label-icon" onClick={viewPassword}>
                            {
                                passwordView ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
                            }


                        </span>
                        </div>
                        <p className="register__label-error">
                            {errors.password && errors.password?.message}
                        </p>
                    </label>

                        : ''
                }
                {
                     location.pathname === '/' ?
                        <Link to="/reset" className="form__forgot-password">Забыли пароль?</Link> : ""
                }

                {
                    location.pathname === "/password" || location.pathname === '/reset/password' ? <label className="form__label">
                        <div className="form__label-field">
                            <input {...register("password_repeat", {
                                validate: value =>
                                    value === password.current || "Неверно введён пароль"
                            })} className="form__label-input" type={passwordView ? "text" : "password"} placeholder="Повторите пароль"/>
                            {/*<span className="form__label-icon" onClick={viewPassword}>*/}
                            {/*    {*/}
                            {/*        passwordView ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>*/}
                            {/*    }*/}
                            {/*</span>*/}
                        </div>
                        <p className="register__label-error">
                            {errors.password_repeat && errors.password_repeat?.message}
                        </p>
                    </label> : ""
                }



                {
                    location.pathname === "/reset/password" ? <button className="form__btn">Сбросить пароль</button> : <button className="form__btn" type="submit">Войти</button>
                }

                {
                    location.pathname === '/' &&   <Link className="form__start" to="/register">Начать пользоваться</Link>
                }



            </form>



        </div>
    );
};

export default Form;