import React, {useEffect, useRef, useState} from 'react';
import "./Form.css";
import {Link, useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Form = () => {

    const [passwordView, setPasswordView] = useState(false)
    const password = useRef()
    const location = useLocation()
    console.log(location)

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


    return (
        <div className="form">
            <form noValidate className="form__content">
                    <span className="form__logo" ref={password}>
                        {
                            location.pathname === "/" || "/" ? "Sign In" : "Sign Up"
                        }
                    </span>
                <p className="form__content-text">
                    {
                        location.pathname === "/" || "/" ? "Если у тебя нет аккаунта, то" : "Если у тебя есть аккаунт, то"
                    }
                </p>
                <p className="form__content-text">
                    {
                        location.pathname === "/" ? <Link to="/register">зарегистрируйтесь здесь!</Link>
                            : <Link to="/">войдите!</Link>
                    }
                </p>

                {
                    location.pathname === "/register" && <label className="form__label">
                        <input {...register("name", {
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
                            {errors.name && errors.name?.message}
                        </p>
                    </label>
                }
                {
                    location.pathname === "/register" && <label className="form__label">
                        <input {...register("surname", {
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
                            {errors.surname && errors.surname?.message}
                        </p>
                    </label>
                }


                <label className="form__label">
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
                </label>
                <label className="form__label">
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
                {
                    location.pathname === "/register" && <label className="form__label">
                        <div className="form__label-field">
                            <input {...register("confirmPassword", {
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
                            {errors.confirmPassword && errors.confirmPassword?.message}
                        </p>
                    </label>
                }


                <button className="form__btn" type="submit">Войти</button>
                <Link className="form__start" to="/register">Начать пользоваться</Link>
            </form>
        </div>
    );
};

export default Form;