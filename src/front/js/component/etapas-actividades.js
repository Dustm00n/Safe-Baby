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
                                <button className="item-button">{props.paragraphOne}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphTwo}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphThree}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphFour}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphFive}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphSix}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphSeven}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphEight}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphNine}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphTen}</button>
                            </li>
                            <li className="items">
                                <button className="item-button">{props.paragraphEleven}</button>
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
    paragraphOne: PropTypes.string,
    paragraphTwo: PropTypes.string,
    paragraphThree: PropTypes.string,
    paragraphFour: PropTypes.string,
    paragraphFive: PropTypes.string,
    paragraphSix: PropTypes.string,
    paragraphSeven: PropTypes.string,
    paragraphEight: PropTypes.string,
    paragraphNine: PropTypes.string,
    paragraphTen: PropTypes.string,
    paragraphEleven: PropTypes.string,
};

