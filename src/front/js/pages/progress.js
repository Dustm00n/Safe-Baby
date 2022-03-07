import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/progress.css";
// import { Doughnut } from 'react-chartjs-2';


export const Progress = (props) => {
    // const { store, actions } = useContext(Context);
    // const params = useParams();
    return (
        <>
            <div className="col">
                <div className="row">
                    <div className="col-6 bg-primary">
                        <div className="card w-75">
                            <div className="card-body-body">
                                <h1 className="title text-center">AQUI VA GRAFICO</h1>
                                {/* <Doughnut /> */}
                                {/* <Doughnut data={data} /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-6 bg-secondary">
                        <div className="card w-75">
                            <div className="card-body-body-body-body my-2">
                                <h1 className="title text-center mb-2">Etapa Inicial de 0 a 2 meses</h1>
                                <ul className="progress-list">
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé empuña la mano y flexiona los brazos.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El cuello no es capaz de sostener la cabeza al jalar al niño para sentarlo.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de Babinski, los dedos de los pies se abren hacia afuera en forma de abanico cuando hay roce en la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">{`Reflejo de Moro (reflejo del sobresalto), extiende los brazos y luego los dobla y los empuja hacia el cuerpo con un breve llanto; a menudo desencadenado por sonidos fuertes o movimientos súbitos.`}</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil palmar, el bebé cierra los dedos y "agarra" el dedo de la madre.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo postural, la pierna se extiende cuando se toca la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil plantar, el bebé flexiona los dedos y la parte delantera del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de orientación y succión, voltea la cabeza en busca del pezón cuando se le toca la mejilla y comienza a chupar cuando el pezón toca los labios.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de la marcha, da pasos rápidos cuando ambos pies se colocan sobre una superficie, con el cuerpo sostenido.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo tónico del cuello, el brazo izquierdo se extiende cuando el bebé mira hacia la izquierda, mientras que el brazo y la pierna derecha se flexionan hacia adentro, y viceversa.</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-6 bg-secondary">
                        <div className="card w-75">
                            <div className="card-body-body my-2">
                                <h1 className="title text-center mb-2">Etapa 2 de 3 a 4 meses</h1>
                                <ul className="progress-list">
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé empuña la mano y flexiona los brazos.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El cuello no es capaz de sostener la cabeza al jalar al niño para sentarlo.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de Babinski, los dedos de los pies se abren hacia afuera en forma de abanico cuando hay roce en la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">{`Reflejo de Moro (reflejo del sobresalto), extiende los brazos y luego los dobla y los empuja hacia el cuerpo con un breve llanto; a menudo desencadenado por sonidos fuertes o movimientos súbitos.`}</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil palmar, el bebé cierra los dedos y "agarra" el dedo de la madre.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo postural, la pierna se extiende cuando se toca la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil plantar, el bebé flexiona los dedos y la parte delantera del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de orientación y succión, voltea la cabeza en busca del pezón cuando se le toca la mejilla y comienza a chupar cuando el pezón toca los labios.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de la marcha, da pasos rápidos cuando ambos pies se colocan sobre una superficie, con el cuerpo sostenido.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo tónico del cuello, el brazo izquierdo se extiende cuando el bebé mira hacia la izquierda, mientras que el brazo y la pierna derecha se flexionan hacia adentro, y viceversa.</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 bg-primary">
                        <div className="card w-75">
                            <div className="card-body-body">
                                <h1 className="title text-center">AQUI VA GRAFICO</h1>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-6 bg-primary">
                        <div className="card w-75">
                            <div className="card-body-body">
                                <h1 className="title text-center">AQUI VA GRAFICO</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 bg-secondary">
                        <div className="card w-75">
                            <div className="card-body-body my-2">
                                <h1 className="title text-center mb-2">Etapa 3 de 5 a 6 meses</h1>
                                <ul className="progress-list">
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé empuña la mano y flexiona los brazos.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El cuello no es capaz de sostener la cabeza al jalar al niño para sentarlo.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de Babinski, los dedos de los pies se abren hacia afuera en forma de abanico cuando hay roce en la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">{`Reflejo de Moro (reflejo del sobresalto), extiende los brazos y luego los dobla y los empuja hacia el cuerpo con un breve llanto; a menudo desencadenado por sonidos fuertes o movimientos súbitos.`}</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil palmar, el bebé cierra los dedos y "agarra" el dedo de la madre.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo postural, la pierna se extiende cuando se toca la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil plantar, el bebé flexiona los dedos y la parte delantera del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de orientación y succión, voltea la cabeza en busca del pezón cuando se le toca la mejilla y comienza a chupar cuando el pezón toca los labios.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de la marcha, da pasos rápidos cuando ambos pies se colocan sobre una superficie, con el cuerpo sostenido.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo tónico del cuello, el brazo izquierdo se extiende cuando el bebé mira hacia la izquierda, mientras que el brazo y la pierna derecha se flexionan hacia adentro, y viceversa.</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-6 bg-secondary">
                        <div className="card w-75">
                            <div className="card-body-body my-2">
                                <h1 className="title text-center mb-2">Etapa 4 de 6 a 9 meses</h1>
                                <ul className="progress-list">
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé empuña la mano y flexiona los brazos.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El cuello no es capaz de sostener la cabeza al jalar al niño para sentarlo.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de Babinski, los dedos de los pies se abren hacia afuera en forma de abanico cuando hay roce en la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">{`Reflejo de Moro (reflejo del sobresalto), extiende los brazos y luego los dobla y los empuja hacia el cuerpo con un breve llanto; a menudo desencadenado por sonidos fuertes o movimientos súbitos.`}</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil palmar, el bebé cierra los dedos y "agarra" el dedo de la madre.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo postural, la pierna se extiende cuando se toca la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil plantar, el bebé flexiona los dedos y la parte delantera del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de orientación y succión, voltea la cabeza en busca del pezón cuando se le toca la mejilla y comienza a chupar cuando el pezón toca los labios.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de la marcha, da pasos rápidos cuando ambos pies se colocan sobre una superficie, con el cuerpo sostenido.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo tónico del cuello, el brazo izquierdo se extiende cuando el bebé mira hacia la izquierda, mientras que el brazo y la pierna derecha se flexionan hacia adentro, y viceversa.</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 bg-primary">
                        <div className="card w-75">
                            <div className="card-body-body">
                                <h1 className="title text-center">AQUI VA GRAFICO</h1>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-6 bg-primary">
                        <div className="card w-75">
                            <div className="card-body-body">
                                <h1 className="title text-center">AQUI VA GRAFICO</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 bg-secondary">
                        <div className="card w-75">
                            <div className="card-body-body my-2">
                                <h1 className="title text-center mb-2">Etapa Final de 9 a 12 meses</h1>
                                <ul className="progress-list">
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El bebé empuña la mano y flexiona los brazos.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">El cuello no es capaz de sostener la cabeza al jalar al niño para sentarlo.</button>
                                    </li>
                                    <li className="items">
                                        <button >Reflejo de Babinski, los dedos de los pies se abren hacia afuera en forma de abanico cuando hay roce en la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">{`Reflejo de Moro (reflejo del sobresalto), extiende los brazos y luego los dobla y los empuja hacia el cuerpo con un breve llanto; a menudo desencadenado por sonidos fuertes o movimientos súbitos.`}</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil palmar, el bebé cierra los dedos y "agarra" el dedo de la madre.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo postural, la pierna se extiende cuando se toca la planta del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo prensil plantar, el bebé flexiona los dedos y la parte delantera del pie.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de orientación y succión, voltea la cabeza en busca del pezón cuando se le toca la mejilla y comienza a chupar cuando el pezón toca los labios.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo de la marcha, da pasos rápidos cuando ambos pies se colocan sobre una superficie, con el cuerpo sostenido.</button>
                                    </li>
                                    <li className="items">
                                        <button className="item-button">Reflejo tónico del cuello, el brazo izquierdo se extiende cuando el bebé mira hacia la izquierda, mientras que el brazo y la pierna derecha se flexionan hacia adentro, y viceversa.</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <div className="container-button">
                <Link to="/">
                    <button className="btn backhome-button">
                        Back home
                    </button>
                </Link>
            </div>
        </>
    );

};

// Process.propTypes = {
//   match: PropTypes.object,
// };

