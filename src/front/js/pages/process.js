import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/index.css";

export const Process = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="jumbotron">
      <h1 className="display-4">This will show the demo element:</h1>
      <img src={rigoImageUrl} />
      <hr className="my-4" />
      <div className="container-button">
        <Link to="/">
          <button className="btn backhome-button">
            Back home
          </button>
        </Link>
      </div>
    </div>
  );
};

Process.propTypes = {
  match: PropTypes.object,
};

