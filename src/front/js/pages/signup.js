import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavbarLoginSignup } from '../component/navbar-login-signup';

import "../../styles/signup.css";

export const SignUp = () => {
    const { actions } = useContext(Context);
    const [registerform, setRegisterForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        // rol_name: "",
        avatar: null
    })

    const history = useHistory();

    const [registerErrors, setRegisterErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newState = { ...registerform };
        newState[name] = value;
        setRegisterForm(newState);
    }

    const handleChangeFile = (e) => {
        const { name, files } = e.target;
        const newState = { ...registerform };
        newState[name] = files[0];
        setRegisterForm(newState);
    }

    const handleValidate = (registerform) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!registerform.nombre) {
            errors.nombre = "Nombre es requerido!";
        }
        if (!registerform.apellido) {
            errors.apellido = "Apellido es requerido!";
        }
        if (!registerform.email) {
            errors.email = "Email es requerido!";
        } else if (!regex.test(registerform.email)) {
            errors.email = "Tu correo no es valido!";
        }
        if (!registerform.password) {
            errors.password = "Password es requerido!";
        }
        // if (!/^.*\.(jpg|JPG|png|PNG)$/.test(registerform.avatar)) {
        //     errors.avatar = 'Solo puede ser archivos .jpg o .png'
        // }
        // if (!registerform.rol_name) {
        //     errors.rol_name = "Tu distinción es requerido!";
        // }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegisterErrors(handleValidate(registerform));
        let formData = new FormData();
        formData.append('nombre', registerform.nombre);
        formData.append('apellido', registerform.apellido);
        formData.append('email', registerform.email);
        formData.append('password', registerform.password);
        // formData.append('rol', registerform.rol_name);
        formData.append('avatar', registerform.avatar);
        actions.signUp(formData, history);
        e.target.reset();
    }

    return (
        <>
            <NavbarLoginSignup />
            <div className="main-signup">
                <div className="form-container-signup">
                    <h1 className="title-signup">Sign Up</h1>
                    <form className="form-signup" onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                id="nombre"
                                name="nombre"
                                placeholder="Nombre"
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <p className="errors-signup">{registerErrors.nombre}</p>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                id="apellido"
                                name="apellido"
                                placeholder="Apellido"
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <p className="errors-signup">{registerErrors.apellido}</p>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <p className="errors-signup">{registerErrors.email}</p>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <p className="errors-signup">{registerErrors.password}</p>
                        {/* <div className="mb-3">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                id="rol_name"
                                name="rol_name"
                                onChange={(e) => { handleChange(e) }}
                            >
                                <option placeholder="Selecciona tu distinción">Selecciona tu distinción</option>
                                <option value="mama">Mamá</option>
                                <option value="papa">Papá</option>
                                <option value="niñera">Niñera</option>
                                <option value="niñero">Niñero</option>
                            </select>
                        </div>
                        <p className="errors-signup">{registerErrors.rol_name}</p> */}
                        <div className="mb-3">
                            <input
                                type="file"
                                className="form-control"
                                id="avatar"
                                name="avatar"
                                placeholder="avatar"
                                onChange={(e) => { handleChangeFile(e) }} />
                        </div>
                        <p className="errors-signup">{registerErrors.avatar}</p>
                        <button type="submit" className="btn btn-signup d-grid gap-2 col-6 mx-auto">Sign up</button>
                    </form>
                </div>
            </div>
        </>
    );
};
