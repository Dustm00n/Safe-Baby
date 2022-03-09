import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const [registerform, setRegisterForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    })
    const [registerErrors, setRegisterErrors] = useState({})
    const handleChange = (e, item) => {
        let aux = registerform;
        aux[item] = e.target.value;
        setRegisterForm(aux);
        console.log(registerform)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.register(registerform);
        setRegisterErrors(handleValidate(registerform))
        console.log('store.register', store.register);

    }

    const handleValidate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.nombre) {
            errors.nombre = "Nombre es requerido!";
            console.log(errors.nombre)
        }
        if (!values.apellido) {
            errors.apellido = "Apellido es requerido!";
            console.log(errors.apellido)
        }
        if (!values.email) {
            errors.email = "Email es requerido!";
            console.log(errors.email)
        } else if (!regex.test(values.email)) {
            errors.email = "Tu correo no es valido!";
            console.log(errors.email)
        }
        if (!values.password) {
            errors.password = "Password es requerido!";
            console.log(errors.password)
        }
        return errors;
    }

    return (
        <>
            <div className="main-signup">
                <div className="form-container-signup">
                    <h1 className="title-signup">Sign Up</h1>
                    <form className="form-signup" onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Nombre"
                                onChange={(e) => { handleChange(e, 'nombre') }} />
                        </div>
                        <p>{registerErrors.nombre}</p>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Apellido"
                                onChange={(e) => { handleChange(e, 'apellido') }} />
                        </div>
                        <p>{registerErrors.apellido}</p>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                                onChange={(e) => { handleChange(e, 'email') }} />
                        </div>
                        <p>{registerErrors.email}</p>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(e) => { handleChange(e, 'password') }} />
                        </div>
                        <p>{registerErrors.password}</p>
                        <button type="submit" className="btn btn-signup d-grid gap-2 col-6 mx-auto">Sign up</button>
                    </form>
                </div>
            </div>
        </>
    );
};
