import React from "react";
import PropTypes from "prop-types";
import { Inicio } from "./inicio";
import ReactPlayer from "react-player";
import "../../styles/home.css";

export const VideoReactPlayer = (props) => {
    const { urlVideo } = props;
    return (
        <div className="col md-4 d-flex justify-content-center">
            <ReactPlayer
                width="100%"
                height="250px"
                controls
                url={urlVideo} />
        </div>
    )
}
Inicio.propTypes = {
    urlVideo: PropTypes.string

}
