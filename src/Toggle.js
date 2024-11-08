import React from "react";
import { useState } from "react";

function Toggle() {

    const[visible, setVisible] = useState(false);

    return (
        <>
            {visible && (
                <h4>Este mensaje aparece y desaparece al pulsar el botón</h4>
            )}
            <button onClick={()=>setVisible(!visible)}>{visible ? 'Ocultar' : 'Mostrar'} mensaje</button>
        </>);
}

export default Toggle;