import React from "react";

const IMC = (props) => {

    function calcularIMC(altura, peso) {
        return peso / (altura * altura)
    }

    const {altura, peso} = props;
    return (
        <div>
            <h3>A minha altura é {altura}</h3>
            <h3>O meu peso é {peso}</h3>
            <h3>O meu IMC é {calcularIMC(altura, peso)}</h3>
        </div>
    )
}

export default IMC;