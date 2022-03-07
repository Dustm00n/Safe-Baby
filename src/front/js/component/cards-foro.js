import React from "react";
import { AiFillWechat } from "react-icons/ai";
import '../../styles/cards-foro.css';
import Temas from "../component/temas";
const CardsForo = () => {
  return (
    <div className="container-main col-12">
      {/* row 1 */}
      <div className="row">
        <div className="col-8">
          {/* row 2 */}
          <div className="row">
            <button type="button" className="btn btn-outline-dark boton-chat col-2">{<AiFillWechat size={40} />}</button>
            <div className="card-body1 col-3">
              <h5 className="card-title">TEMA</h5>
              <p className="card-text">El tema que se esta tocando</p>
              <p className="card-text">
                <small className="text-muted">Funcionalidad del foro</small>
              </p>
            </div>
            <div className="card-body2 col-2">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="imagen" alt="..." />
            </div>
            <div className="card-body3 col-3">
              <h5 className="card-title">Nombre de Usuario</h5>
              <p className="card-text">
                <small className="text-muted">Ayer a la(s) 9:47 PM</small>
              </p>
            </div>
          </div>
          <div className="row">
            <button type="button" className="btn btn-outline-dark boton-chat col-2">{<AiFillWechat size={40} />}</button>
            <div className="card-body1 col-3">
              <h5 className="card-title">TEMA</h5>
              <p className="card-text">El tema que se esta tocando</p>
              <p className="card-text">
                <small className="text-muted">Funcionalidad del foro</small>
              </p>
            </div>
            <div className="card-body2 col-2">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="imagen" alt="..." />
            </div>
            <div className="card-body3 col-3">
              <h5 className="card-title">Nombre de Usuario</h5>
              <p className="card-text">
                <small className="text-muted">Ayer a la(s) 9:47 PM</small>
              </p>
            </div>
          </div>
          <div className="row">
            <button type="button" className="btn btn-outline-dark boton-chat col-2">{<AiFillWechat size={40} />}</button>
            <div className="card-body1 col-3">
              <h5 className="card-title">TEMA</h5>
              <p className="card-text">El tema que se esta tocando</p>
              <p className="card-text">
                <small className="text-muted">Funcionalidad del foro</small>
              </p>
            </div>
            <div className="card-body2 col-2">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="imagen" alt="..." />
            </div>
            <div className="card-body3 col-3">
              <h5 className="card-title">Nombre de Usuario</h5>
              <p className="card-text">
                <small className="text-muted">Ayer a la(s) 9:47 PM</small>
              </p>
            </div>
          </div>
          <div className="row">
            <button type="button" className="btn btn-outline-dark boton-chat col-2">{<AiFillWechat size={40} />}</button>
            <div className="card-body1 col-3">
              <h5 className="card-title">TEMA</h5>
              <p className="card-text">El tema que se esta tocando</p>
              <p className="card-text">
                <small className="text-muted">Funcionalidad del foro</small>
              </p>
            </div>
            <div className="card-body2 col-2">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="imagen" alt="..." />
            </div>
            <div className="card-body3 col-3">
              <h5 className="card-title">Nombre de Usuario</h5>
              <p className="card-text">
                <small className="text-muted">Ayer a la(s) 9:47 PM</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Temas />
        </div>
      </div>
    </div>

  );
};


export default CardsForo;
