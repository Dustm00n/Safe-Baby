import React from "react";
import io from "socket.io-client";
import { useState } from "react";
import { Chat } from "./chat";
import "../../styles/chat.css"
import { AiFillWechat } from "react-icons/ai";



const socket = io.connect("http://localhost:3001");

export function App() {
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
        <div className="App">
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3 className="tittle-chat">Comparte tu experiencia</h3>
                    <div className="container-fluid container-main-foro col-12">
                        {/* row 1 */}
                        <div className="row">
                            <div className="col-2">
                                <a
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    type="button"
                                    className="button-icon"
                                >
                                    {<AiFillWechat size={150} />}
                                </a>
                            </div>
                            <div className="card-body-chat col-6">
                                <h4 className="card-title-chat">Recomendaciones de Usuarios para tu bebé</h4>
                                <p className="card-text">Aca puedes compartir tu experiencia cuidando a un bebé, y leer recomendaciones de otros usuarios.</p>
                                <p className="card-text">
                                    <small className="text-muted">IMPORTANTE: toda informacion que se comparta en esta sala de chat, no esta verificada por un Profesional de la salud.</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <input
                            type="text"
                            placeholder="Nombre..."
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Numero de sala..."
                            onChange={(event) => {
                                setRoom(event.target.value);
                            }}
                        />
                    </div>
                    <button onClick={joinRoom}>Entrar a la Sala</button>
                </div>
            ) : (
                <Chat socket={socket} username={username} room={room} />
            )}

        </div>
    );
}

