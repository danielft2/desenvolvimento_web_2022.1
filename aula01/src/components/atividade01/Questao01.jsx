import React, { Component } from "react";

/*const Questao01 = () => {
    return (
        <div className="App questao">
            <h2>Questão 01</h2>
            <h3>Nome: Daniel Almeida de Freitas</h3>
            <h3>Curso: Engenharia de Software</h3>
            <h3>Cidade de Origem: Ibicuitinga</h3>
        </div>
    )
}*/

/*function Questao01() {
    return (
        <div className="App MeusDados">
            <h2>Questão 01</h2>
            <h3>Nome: Daniel Almeida de Freitas</h3>
            <h3>Curso: Engenharia de Software</h3>
            <h3>Cidade de Origem: Ibicuitinga</h3>
        </div>
    )
}*/

/*const Questao01 = (props) => {
    return (
        <div className="App questao">
            <h2>Questão 03</h2>
            <h3>Nome: {props.nome}</h3>
            <h3>Curso: {props.curso}</h3>
            <h3>Cidade de Origem: {props.cidade}</h3>
        </div>
    )
}*/

const Questao01 = (props) => {
    const {nome, curso, cidade} = props;
    return (
        <div className="App questao">
            <h2>Questão 01</h2>
            <h3>Nome: {nome}</h3>
            <h3>Curso: {curso}</h3>
            <h3>Cidade de Origem: {cidade}</h3>
        </div>
    )
}

export default Questao01;