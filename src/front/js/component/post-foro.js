import { UpdateModeEnum } from "chart.js";
import React, { Component } from "react";
import "../../styles/post-foro.css"
import Contenido from "./contenido-post";


const PostForo = () => {
    return (
        <div className="container-postforo col 12">
            <div className="row">
                <div className="col-3  profile-postforo">
                    <div className="card-postforo">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="card-img-top" alt="..." />
                        <div className="card-body-postforo">
                            <p className="card-text">Usuario</p>
                        </div>
                    </div>
                </div>
                <div className="col-8 cotenido">
                    <Contenido />
                </div>
            </div>
        </div>


    );
}







export default PostForo
