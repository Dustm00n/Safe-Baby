import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import { EtapasGraficoActividades } from "../component/etapas-grafico-actividades";
import { EtapasActividades } from "../component/etapas-actividades";
// import { Doughnut } from 'react-chartjs-2';
import "../../styles/progress.css";

export const Progress = () => {
    // const { store, actions } = useContext(Context);
    // const params = useParams();
    return (
        <>
            <div className="col">
                <div className="row">
                    <EtapasGraficoActividades />
                    <EtapasActividades
                        titleStage="Etapa Inicial de 0 a 2 meses"
                        paragraphOne="El bebé puede levantar y voltear la cabeza cuando está acostado boca arriba."
                        paragraphTwo="El bebé empuña la mano y flexiona los brazos."
                        paragraphThree="El cuello no es capaz de sostener la cabeza al jalar al niño para sentarlo."
                        paragraphFour="Reflejo de Babinski, los dedos de los pies se abren hacia afuera en forma de abanico cuando hay roce en la planta del pie."
                        paragraphFive="Reflejo de Moro (reflejo del sobresalto), extiende los brazos y luego los dobla y los empuja hacia el cuerpo con un breve llanto; a menudo desencadenado por sonidos fuertes o movimientos súbitos."
                        paragraphSix={`Reflejo prensil palmar, el bebé cierra los dedos y "agarra" el dedo de la madre.`}
                        paragraphSeven="Reflejo postural, la pierna se extiende cuando se toca la planta del pie."
                        paragraphEight="Reflejo prensil plantar, el bebé flexiona los dedos y la parte delantera del pie."
                        paragraphNine="Reflejo de orientación y succión, voltea la cabeza en busca del pezón cuando se le toca la mejilla y comienza a chupar cuando el pezón toca los labios."
                        paragraphTen="Reflejo de la marcha, da pasos rápidos cuando ambos pies se colocan sobre una superficie, con el cuerpo sostenido."
                        paragraphEleven="Reflejo tónico del cuello, el brazo izquierdo se extiende cuando el bebé mira hacia la izquierda, mientras que el brazo y la pierna derecha se flexionan hacia adentro, y viceversa."
                    />
                </div >
            </div>
            <div className="col">
                <div className="row">
                    <EtapasActividades
                        titleStage="Etapa 2 de 3 a 4 meses"
                        paragraphOne="El mejor control muscular del ojo le permite al bebé seguir objetos."
                        paragraphTwo="Comienza a controlar las manos y los pies, pero estos movimientos no son sincronizados. El bebé puede comenzar a utilizar ambas manos, trabajando con ellas al mismo tiempo para cumplir tareas. El bebé todavía no es capaz de coordinar el agarre, pero manotea los objetos para acercarlos él."
                        paragraphThree="El incremento en la visión le permite diferenciar los objetos de los fondos con muy poco contraste (como un botón en una blusa del mismo color)."
                        paragraphFour="El bebé se levanta  (torso superior, los hombros y la cabeza) con los brazos cuando está acostado boca abajo (sobre el estómago)."
                        paragraphFive="Los músculos del cuello se desarrollan lo suficientemente para permitir que se siente con ayuda y mantenga la cabeza erguida."
                        paragraphSix="Los reflejos primitivos ya han desaparecido o están comenzando a desaparecer."
                    />
                    <EtapasGraficoActividades />
                </div >
            </div>
            <div className="col">
                <div className="row">
                    <EtapasGraficoActividades />
                    <EtapasActividades
                        titleStage="Etapa 3 de 5 a 6 meses"
                        paragraphOne="El bebé es capaz de sentarse solo, sin ayuda, inicialmente por poco tiempo y luego por 30 segundos o más."
                        paragraphTwo="El bebé comienza a tomar bloques o cubos usando la técnica de agarre cubital palmar (presiona el bloque en la palma de la mano mientras flexiona o dobla la muñeca hacia adentro), pero todavía no usa el pulgar."
                        paragraphThree="El bebé gira desde la espalda hasta el estómago. Cuando está sobre el estómago, puede empujarse con los brazos para levantar los hombros y la cabeza y mirar alrededor o alcanzar objetos."
                    />
                </div >
            </div>
            <div className="col">
                <div className="row">
                    <EtapasActividades
                        titleStage="Etapa 4 de 6 a 9 meses"
                        paragraphOne="El gateo puede comenzar."
                        paragraphTwo="El bebé puede caminar sosteniéndose de la mano de un adulto."
                        paragraphThree="El bebé puede sentarse firmemente, sin ayuda, durante largos períodos de tiempo."
                        paragraphFour="El bebé aprende a sentarse desde una posición erguida."
                        paragraphFive="El bebé puede sujetarse y mantener una posición erguida mientras se apoya en los muebles."
                    />
                    <EtapasGraficoActividades />
                </div >
            </div>
            <div className="col">
                <div className="row">
                    <EtapasGraficoActividades />
                    <EtapasActividades
                        titleStage="Etapa Final de 9 a 12 meses"
                        paragraphOne="El bebé comienza a mantener el equilibrio mientras se pone de pie solo."
                        paragraphTwo="El bebé da pasos sosteniéndose de una mano; puede dar unos pasos solo."
                    />
                </div >
            </div>
            {/* <div className="container-button">
                <Link to="/">
                    <button className="btn backhome-button">
                        Back home
                    </button>
                </Link>
            </div> */}
        </>
    );

};

