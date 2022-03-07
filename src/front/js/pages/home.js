import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import imageUrl from "../../img/rigo-baby.jpg"
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5 mx-5">
      <h5>Recomendaciones para el cuidado de tu bebé</h5>
      <div className="scrollmenu">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema A</h5>
              <div className="card-body">
                <p className="parrafoA">
                  Manejar a un recién nacido
                  Si no ha pasado mucho tiempo cerca de recién nacidos, su fragilidad tal vez le resulte intimidante. Aquí se incluyen algunos aspectos básicos para tener en cuenta:

                  Lavarse las manos (o usar un desinfectante para las manos) antes de tomar al bebé. Los recién nacidos todavía no tienen un sistema inmunitario fuerte, por eso tienen riesgo de contagiarse infecciones. Asegúrese de que todas las personas que toquen al bebé tengan las manos limpias.
                  Sostener la cabeza y el cuello del bebé. Al acunar al bebé, alzarlo bien erguido o acostarlo, es necesario sujetarle la cabeza.
                  Nunca sacuda al recién nacido, ya sea para jugar o descargar su frustración. Las sacudidas pueden provocar sangrado en el cerebro e incluso la muerte. Si necesita despertar al bebé, no lo sacuda; simplemente acaríciele los pies o las mejillas.
                  Asegúrese de atar las cintas del carrito o la silla de seguridad para el automóvil cuando coloque al bebé. Limite las actividades que podrían ser muy bruscas o provocar sacudones.
                  Recuerde que el recién nacido no está preparado para juegos bruscos, como mecerlo sobre las rodillas o lanzarlo al aire.
                </p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema B</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema C</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <h5>Advertencias para el cuidado de tu bebé</h5>
      <div className="scrollmenu">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema A</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema B</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema C</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h5>ESPACIO PARA TU BEBÉ</h5>
      </div>
      <div className="card">
        <h5 className="card-title">Educacion para tu bebé</h5>
        <div className="row">
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
        </div>
      </div>
      <div className="card">
        <h5 className="card-title">Entretenimiento para tu bebé</h5>
        <div className="row">
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
        </div>
      </div>
      <div className="card">
        <h5 className="card-title">Música para tu bebé</h5>
        <div className="row">
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
        </div>
      </div>
    </div>


  );
};
