import React from "react";
import { io } from "socket.io-client";
import { useState } from "react";
import { Chat } from "../component/chat";
import "../../styles/chat.css"
import { Navbar } from "../component/navbar";

const socket = io.connect("http://localhost:3001");

export function Mainchat() {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };

    return (
        <>
            <Navbar />
            <div className="Mainchat">
                {!showChat ? (
                    <div className="joinChatContainer">
                        <img className="fondo-titulo-chat" src="https://i.pinimg.com/originals/9b/6c/55/9b6c55403594f530a08d74380977bbda.jpg" />
                        <div className="container-fluid container-main-foro">
                            <div className="row only">
                                <h3 className="tittle-chat">Comparte tu experiencia</h3>
                                <div className="card-body-chat col">
                                    <h4 className="card-title-chat">Recomendaciones de Usuarios para tu bebé</h4>
                                    <p className="card-text">Aca puedes compartir tu experiencia cuidando a un bebé, y leer recomendaciones de otros usuarios.</p>
                                    <p className="card-text">
                                        <small className="text-muted">IMPORTANTE: toda informacion que se comparta en esta sala de chat, no esta verificada por un Profesional de la salud.</small>
                                    </p>
                                </div>
                                <div className="container-chat">
                                    <input className="input-chat"
                                        type="text"
                                        placeholder="Nombre..."
                                        onChange={(event) => {
                                            setUsername(event.target.value);
                                        }}
                                    />
                                    <input className="input-chat"
                                        type="text"
                                        placeholder="Numero de sala..."
                                        onChange={(event) => {
                                            setRoom(event.target.value);
                                        }}
                                    />
                                </div>
                                <button className="button-chat"
                                    onClick={joinRoom}>Entrar a la Sala</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Chat socket={socket} username={username} room={room} />
                )}
            </div>
        </>
    );
}

