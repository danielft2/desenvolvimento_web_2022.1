import React, { Component } from "react";

/*const Informacoes = (props) => {
    return (
        <div>
            <h4>Nome: {props.nome}</h4>
            <h4>Curso: {props.curso}</h4>
            <h4>Turno: {props.turno}</h4>
            <h4>Universidade: {props.universidade}</h4>
        </div>
    )
}*/

/*class Informacoes extends Component {
    render() {
        return (
            <div>
                <h4>Nome: {this.props.nome}</h4>
                <h4>Curso: {this.props.curso}</h4>
                <h4>Turno: {this.props.turno}</h4>
                <h4>Universidade: {this.props.universidade}</h4>
            </div>
        )
    }
}*/

const Informacoes  = (props) => {
    const {nome, curso, turno, universidade} = props;
    return (
        <div>
            <h4>Nome: {nome}</h4>
            <h4>Curso: {curso}</h4>
            <h4>Turno: {turno}</h4>
            <h4>Universidade: {universidade}</h4>
        </div>
    )
}

export default Informacoes;