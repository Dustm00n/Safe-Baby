import React from "react";
import Profile from "../component/perfil";
import InfoBB from "../component/perfil2-informacioon"
import { Navbar } from "../component/navbar";

export const Perfil = () => {
    return (
        <>
            <Navbar />
            <Profile />
            <InfoBB />
        </>
    )
}