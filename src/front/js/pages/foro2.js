import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CardsForo from "../component/cards-foro";
import postForo from "../component/postforo"
import { Context } from "../store/appContext";


export const Foro2 = () => {
    return (
        <>
            <postForo />
        </>
    )
}