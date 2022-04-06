import React from "react";
const Filho = (props) => {
    return (
        <div>
            <button onClick={()=> {
                props.notificarPai('Oi pai tudo bem')
            }}>
                Enviar Mensagem para o meu pai
            </button>
        </div>
    )
}

export default Filho;