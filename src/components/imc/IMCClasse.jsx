import React, { Component } from "react";

class IMCClasse extends Component {

    classificacaoIMC(IMC) {
        if (IMC < 17)
            return <h3>muito abaixo do peso</h3>
        else if (IMC >= 17 && IMC <= 18.49) 
            return <h3>Abaixo do peso</h3>
        else if (IMC >= 18.50 && IMC <= 24.49) 
            return <h3>Peso normal</h3>
        else if (IMC >= 25 && IMC <= 18.49) 
            return <h3>Acima do peso</h3>
        else if (IMC >= 30 && IMC <= 34.49) 
            return <h3>Obesidade I</h3>
        else if (IMC >= 35 && IMC <= 39.99) 
            return <h3>Obesidade II(Severa)</h3>
        else 
           return <h3>Obesidade III(Mórbida)</h3>
    }

    calcularIMC(altura, peso) {
        return peso / (altura * altura)
    }

    render() {
        const {altura, peso} = this.props;
        const imc = this.calcularIMC(altura, peso)
        return (
            <div>
                <h3>A minha altura é {altura}m e meu peso é {peso}kg</h3>
                <h3>O meu IMC é: {imc.toFixed(2)}</h3>
                {this.classificacaoIMC(imc)}
            </div>
        )
    }
}

export default IMCClasse;