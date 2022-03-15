import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Clases",
        allDay: true,
        start: new Date(2022, 6, 0),
        end: new Date(2022, 6, 0),
    },
    {
        title: "Vacaciones",
        start: new Date(2022, 6, 7),
        end: new Date(2022, 6, 10),
    },
    {
        title: "Hora Bebe",
        start: new Date(2022, 6, 20),
        end: new Date(2022, 6, 23),
    },
];

function Calendario() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="Calendario">
            <h1 className="titulo-calendario">Calendario</h1>
            <h2 className="subtitulo-calendario">Agrega Nuevo evento</h2>
            <div className="contenedor-evento">
                <input className="agregar-titulo" type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <div>
                    <DatePicker className="start-date-picker" placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                </div>
                <div>
                    <DatePicker className="end-date-picker" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                </div>
                <button className="boton-agregar-evento" stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Agregar evento
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default Calendario