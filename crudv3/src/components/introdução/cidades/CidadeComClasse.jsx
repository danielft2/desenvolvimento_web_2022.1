import React, {Component} from "react";

class CidadeComClasse extends Component {

    constructor(props) {
        super(props)
        this.state = {fortaleza: 0, quixada: 0, limoeiro: 0, crato: 0}
    }

    votarFortaleza() {
        this.setState({fortaleza: this.state.fortaleza+1})
    }

    votarQuixada() {
        this.setState({quixada: this.state.quixada+1})
    }

    votarLimoeiro() {
        this.setState({limoeiro: this.state.limoeiro+1})
    }

    votarCrato() {
        this.setState({crato: this.state.crato+1})
    }

    render() {;
        return (
            <div>
                <div className="cidades-flex">
                    <h3>Fortaleza: {this.state.fortaleza}</h3>
                    <h3>Quixadá: {this.state.quixada}</h3>
                    <h3>Limoeiro do Norte: {this.state.limoeiro}</h3>
                    <h3>Crato: {this.state.crato}</h3>
                </div>
                <div className="btn-flex">
                    <button onClick={() => this.votarFortaleza()}>Votar em Fortaleza</button>
                    <button onClick={() => this.votarQuixada()}>Votar em Quixada</button>
                    <button onClick={() => this.votarLimoeiro()}>Votar em Limoeiro do Norte</button>
                    <button onClick={() => this.votarCrato()}>Votar em Crato</button>
                </div>
            </div>
        )
    }
}

export default CidadeComClasse;