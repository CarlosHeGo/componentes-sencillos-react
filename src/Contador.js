import React from "react";
import { useState } from "react";

function Contador(){

    const [contador, setContador] = useState(0);

    return(
        <>
            <h1>Número: {contador}</h1>
            <button onClick={() => setContador(contador+1)}>Incrementar</button>
            <button onClick={() => setContador(contador-1)}>Decrementar</button>
        </>
    );
}
export default Contador;