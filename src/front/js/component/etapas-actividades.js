import React from "react";
import PropTypes from "prop-types";
export const EtapasActividades = (props) => {
    return (
        <>
            <div className="container-progress col-6 px-0">
                <div className="card-progress w-80 my-5">
                    <div className="card-body-progress">
                        <h1 className="title-stage text-center">{props.titleStage}</h1>
                        <ul className="progress-list">
                            {props.paragraphOne === undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphOne}</button>
                            </li>}
                            {props.paragraphTwo == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphTwo}</button>
                            </li>}
                            {props.paragraphThree == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphThree}</button>
                            </li>}
                            {props.paragraphFour == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphFour}</button>
                            </li>}
                            {props.paragraphFive == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphFive}</button>
                            </li>}
                            {props.paragraphSix == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphSix}</button>
                            </li>}
                            {props.paragraphSeven == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphSeven}</button>
                            </li>}
                            {props.paragraphEight == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphEight}</button>
                            </li>}
                            {props.paragraphNine == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphNine}</button>
                            </li>}
                            {props.paragraphTen == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphTen}</button>
                            </li>}
                            {props.paragraphEleven == undefined ? '' : <li className="items">
                                <button className="item-button">{props.paragraphEleven}</button>
                            </li>}
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
    paragraphEleven: PropTypes.string
};

