import React, { Component, useState, useEffect} from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [status, setStatus] = useState('Par');

    useEffect(
        ()=> {
           if (contador % 2 == 0)
            setStatus("Par")
           else 
            setStatus("Impar")
        }, 
        [contador]
    )

    return (
        <div>
            <h3>O valor do contador é: {contador}</h3>
            <h3>Par ou Impar?: {status}</h3>
            <button onClick={()=> setContador(contador + 1)}>Aumentar contador</button>
        </div>
    )
}

/*class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {contador: 0}
    }

    render() {
        return (
            <div>
                <h3>O valor do contador é: {this.state.contador}</h3>
                <button onClick={this.setState({contador: this.state.contador + 1})}>Aumentar contador</button>
            </div>
        )
    }
}*/

export default Contador;