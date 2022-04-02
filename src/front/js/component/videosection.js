import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";
import { VideoReactPlayer } from "./videoreactplayer";
import { Inicio } from "./inicio";

export const VideoSection = (props) => {
    const { tituloVideo, urlVideo1, urlVideo2, urlVideo3 } = props;
    return (
        <div className="card-video-home">
            <h5 className="card-title-video-home">{tituloVideo}</h5>
            <div className="row">
                <VideoReactPlayer urlVideo={urlVideo1} />
                <VideoReactPlayer urlVideo={urlVideo2} />
                <VideoReactPlayer urlVideo={urlVideo3} />
            </div>
        </div>
    )
}

Inicio.propTypes = {
    tituloVideo: PropTypes.string,
    urlVideo1: PropTypes.string,
    urlVideo2: PropTypes.string,
    urlVideo3: PropTypes.string
}
