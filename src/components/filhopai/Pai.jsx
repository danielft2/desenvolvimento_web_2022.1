import React from "react";
import Filho from "./Filho";

const Pai = () => {
    function mensagemRecebidaDoMeuFilho(msg) {
        alert(`recebi do meu filho ${msg}`);
    }

    return (
        <div>
            <Filho notificarPai = {mensagemRecebidaDoMeuFilho}/>
        </div>
    )
}

export default Pai;