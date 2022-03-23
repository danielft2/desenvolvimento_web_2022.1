import React, { Component } from "react";

/*class Questao02 extends Component {
    render() {
        return (
            <div className="App questao">
                <h2>Questão 02</h2>
                <h3>Nome: Daniel Almeida de Freitas</h3>
                <h3>Curso: Engenharia de Software</h3>
                <h3>Cidade de Origem: Ibicuitinga</h3>
            </div>
        )
    }
}*/

/*class Questao02 extends Component {
    render() {
        return (
            <div className="App questao">
                <h2>Questão 02</h2>
                <h3>Nome: {this.nome}</h3>
                <h3>Curso: {this.curso}</h3>
                <h3>Cidade {this.cidade}</h3>
            </div>
        )
    }
}*/

class Questao02 extends Component {
    render() {
        const {nome, curso, cidade} = this.props;
        return (
            <div className="App questao">
                <h2>Questão 04</h2>
                <h3>Nome: {nome}</h3>
                <h3>Curso: {curso}</h3>
                <h3>Cidade: {cidade}</h3>
            </div>
        )
    }
}

export default Questao02;