import React from "react";

const Enemy = (props) => {
    const {nome, arena, img} = props;
    return (
        <div>
            <h3>{nome} da arena {arena}</h3>
        </div>
    )
}

export default Enemy;