import React, { Component } from 'react';

/*const MeusDadosProps = (props) => {
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Curso: {props.curso}</h3>
        </div>
    )
}*/

class MeusDadosProps extends Component {
    render() {
        return (
            <h3>Nome: {this.nome}</h3>
        )
    }
}

export default MeusDadosProps;