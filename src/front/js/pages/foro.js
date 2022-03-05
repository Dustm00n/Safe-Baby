import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CardsForo from "../component/cards foro";
import { Context } from "../store/appContext";
import { AiFillWechat } from "react-icons/ai";
export const Foro = () => {
  return (
    <>
      <div className="container-main col-12">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <button type="button" className="btn btn-outline-dark boton-chat col-2">{<AiFillWechat size={90} />}</button>
              <div className="card-body1 col-3">
                <h5 className="card-title">TEMA</h5>
                <p className="card-text">El tema que se esta tocando</p>
                <p className="card-text">
                  <small className="text-muted">Usuario que lo publico y los minutos</small>
                </p>
              </div>
              <div className="card-body2 col-3">
                <h5 className="card-title">Cantidas de mensajes </h5>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="caja">asddad</div>
          </div>
        </div>
      </div>
    </>
  );
}
// lsdjnfd