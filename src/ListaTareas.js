import React, { useState } from "react";



function ListaTareas(){

    const[tareas, setTareas] = useState(['Tarea1','Tarea2'])

    return(
       <> <ul>
            {tareas.map((tarea, index) => (
                <li key={index}>
                    <input type="checkbox"/>{tarea}
                </li>
            ))}
        </ul>
        </>
    );
}
export default ListaTareas;