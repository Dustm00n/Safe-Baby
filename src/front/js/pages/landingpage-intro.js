import React from 'react';
import { NavbarLoginSignup } from '../component/navbar-login-signup';
import "../../styles/landingpage-intro.css";

export const LandingPageIntro = () => {
    return (
        <>
            <NavbarLoginSignup />
            <section>
                <div className="content-explanation">
                    <h1 className="project-title">Safe Baby</h1>
                    <p className="project-content">Save baby es una aplicación que va dirigida a todos los padres y cuidadores (niñeras) para ayudarlos a llevar un control de las actividades que realizaría el bebé durante su etapa de crecimiento a partir de su nacimiento hasta cumplir 1 año.</p>
                </div>
            </section>
        </>
    )
}