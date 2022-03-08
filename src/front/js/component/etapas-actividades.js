import React from "react";
import PropTypes from "prop-types";

export const EtapasActividades = (props) => {
    return (
        <>
            <div className="container-progress col-6 px-0">
                <div className="card-progress w-80 my-5">
                    <div className="card-body-progress">
                        <h1 className="title text-center mb-2">{props.titleStage}</h1>
                        <ul className="progress-list">
                            <li className="items">
                                <button className="item-button">{props.paragraphA}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphB}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphC}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">E{props.paragraphD}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphE}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphF}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphG}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphH}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphI}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphJ}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphK}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

};

EtapasActividades.propTypes = {
    titleStage: PropTypes.string,
    paragraphA: PropTypes.string,
    paragraphB: PropTypes.string,
    paragraphC: PropTypes.string,
    paragraphD: PropTypes.string,
    paragraphE: PropTypes.string,
    paragraphF: PropTypes.string,
    paragraphG: PropTypes.string,
    paragraphH: PropTypes.string,
    paragraphI: PropTypes.string,
    paragraphJ: PropTypes.string,
    paragraphK: PropTypes.string,
};

