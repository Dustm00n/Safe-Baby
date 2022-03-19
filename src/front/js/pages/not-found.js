
import React from 'react';
import 'animate.css';
import '../../styles/not-found.css';

export const NotFound = () => {
    return (
        <>
            <div className='box-animated'>
                <h1 className='animate__animated animate__fadeInRight'>404 Page not found!</h1>
                <img className="fondo-titulo-not-found" src="https://i.pinimg.com/originals/9b/6c/55/9b6c55403594f530a08d74380977bbda.jpg" />
            </div>
        </>
    )
}
