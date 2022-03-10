import React from 'react';
import LogoBebe from "../../img/logo-bebe.png";
import { Link } from "react-router-dom";

import "../../styles/landingpage-intro.css";

export const LandingPageIntro = () => {
    return (
        <>
            <nav className="navbar py-3">
                <img className="navbar-brand-intro" src={LogoBebe} />
                <div className="navbar-container-intro gap-4 d-flex justify-content-end">
                    <div className="button-link-login">
                        <Link to="/login">
                            <button className="btn btn-navbar-intro">Login</button>
                        </Link>
                    </div>
                    <div className="button-link-signup">
                        <Link to="/signup">
                            <button className="btn btn-navbar-intro">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <section>
                <div className="content-explanation">
                    <h1 className="project-title">Safe Baby</h1>
                    <p className="project-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nesciunt soluta blanditiis iusto ea dolore fugiat sunt, exercitationem nostrum hic eligendi eius excepturi iste, corrupti quod nam atque delectus. Consequuntur.</p>
                </div>
            </section>
        </>
    )
}