import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CardsForo from "../component/cards foro";
import { Context } from "../store/appContext";
import { AiFillWechat } from "react-icons/ai";
export const Foro = () => {
  return (
    <>
      <CardsForo />
    </>
  );
}
