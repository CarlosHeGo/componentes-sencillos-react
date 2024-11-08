import React from "react";

function ListaTareas(){
    return
    (
        <>
            <h1>Lista de tareas pendientes: </h1>
            <ul>
                <li>
                    <input type="checkbox" />
                    <label>Crear repositorio</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label>Subir tarea</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label>Presentar proyecto</label>
                </li>
            </ul>
        </>
    );

}

export default ListaTareas;