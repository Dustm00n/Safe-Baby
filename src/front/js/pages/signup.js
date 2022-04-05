import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavbarLoginSignup } from '../component/navbar-login-signup';

import "../../styles/signup.css";

export const SignUp = () => {

    const { actions } = useContext(Context);

    let allGood = false;

    const [registerForm, setRegisterForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        rol_name: "",
        avatar: ""
    })
    console.log(registerForm);
    const history = useHistory();

    const [registerErrors, setRegisterErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newState = { ...registerForm };
        newState[name] = value;
        setRegisterForm(newState);
    }

    const handleChangeFile = (e) => {
        const { name, files } = e.target;
        const newState = { ...registerForm };
        newState[name] = files[0];
        setRegisterForm(newState);
    }

    const handleValidate = (registerForm) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const regexFile = /^.*(jpg|jpeg|png)$/gm;
        if (!registerForm.nombre) {
            errors.nombre = "Nombre es requerido!";
            allGood = true;
        }
        if (!registerForm.apellido) {
            errors.apellido = "Apellido es requerido!";
            allGood = true;
        }
        if (!registerForm.email) {
            errors.email = "Email es requerido!";
            allGood = true;
        } else if (!regex.test(registerForm.email)) {
            errors.email = "Tu correo no es valido!";
        }
        if (!registerForm.password) {
            errors.password = "Password es requerido!";
            allGood = true;
        }
        if (!registerForm.rol_name) {
            errors.rol_name = "Tu distinción es requerido!";
            allGood = true;
        }
        if (!registerForm.avatar) {
            errors.avatar = 'Solo pueden ser imagenes';
            allGood = true;
        }
        return errors;

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setRegisterErrors(handleValidate(registerForm));
        if (allGood === false) {
            let formData = new FormData();
            formData.append('nombre', registerForm.nombre);
            formData.append('apellido', registerForm.apellido);
            formData.append('email', registerForm.email);
            formData.append('password', registerForm.password);
            formData.append('rol_name', registerForm.rol_name);
            formData.append('avatar', registerForm.avatar);
            actions.signUp(formData, history);
            e.target.reset();
            allGood = true;
        } else return false;
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
                        <div className="mb-3">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                id="rol_name"
                                name="rol_name"
                                onChange={(e) => { handleChange(e) }}
                            >
                                <option placeholder="Selecciona tu distinción">Selecciona tu distinción</option>
                                <option value="Mamá">Mamá</option>
                                <option value="Papá">Papá</option>
                                <option value="Niñera">Niñera</option>
                                <option value="Niñero">Niñero</option>
                            </select>
                        </div>
                        <p className="errors-signup">{registerErrors.rol_name}</p>
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
