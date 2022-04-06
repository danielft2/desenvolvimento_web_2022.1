import React from "react";

const Hero = (props) => {
    const {nome, arena, img} = props;
    return (
        <div>
            <img src="" alt=""  className="img"/>
            <h3>{nome} da arena {arena}</h3>
        </div>
    )
}

export default Hero;