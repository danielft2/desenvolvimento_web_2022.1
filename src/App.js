import { Component } from 'react';
import './App.css';

/*import MeusDados from './components/MeusDados'
import MeusDadosProps from './components/MeusDadosProps';
import Informacoes from './components/informacoes';
*/

import Questao01 from './components/atividade01/Questao01';
import Questao02 from './components/atividade01/Questao02';
import Questao03 from './components/atividade01/Questao03';
import Questao04 from './components/atividade01/Questao04';


//Questão01 - Funções
/*function App() {
  return (
    <div>
      <Questao01/>
    </div>
  )
}*/

//Questão02 - Classe
/*function App() {
  return (
    <div>
      <Questao02/>
    </div>
  )
}*/

//Questão03 - props
/*function App() {
  return (
    <div>
      <Questao03/>
    </div>
  )
}*/

//Questão04 - props
function App() {
  return (
    <div>
      <Questao04/>
    </div>
  )
}




























//Componente principal que renderiza todos os outros
/*function App() {
  return (
    <div className='App'>
      <MeusDados/>
      <MeusDadosProps 
        nome="Daniel"
        curso="ES"
        diciplina="Desenvolvimento Web"
      />
      <Informacoes 
        nome="Daniel Almeida"
        curso="ES"
        turno="Tarde"
        universidade="UFC"
      />
    </div>
  )
}*/

//como criar um componente
// 01 - criando uma função clássica
/*function App() {
  return (
    <div className="App">
      <h1>Nome: Daniel Almeida de Freitas</h1>
      <h1>Curso: Engenharia de Software</h1>
      <h1>Disciplina: Desenvolvimento de Software para Web</h1>
    </div>
  );
}*/

// 02 - Uma constante recebendo uma função anônima
/*const App = () => {
  return (
    <div className="App">
      <h1>Nome: Daniel Almeida de Freitas</h1>
      <h1>Curso: Engenharia de Software</h1>
      <h1>Disciplina: Desenvolvimento de Software para Web</h1>
    </div>
  )
}*/

// 03 - Sem o return
/*const App = () => 
  <div className="App">
    <h1>Nome: Daniel Almeida de Freitas</h1>
    <h1>Curso: Engenharia de Software</h1>
    <h1>Disciplina: Desenvolvimento de Software para Web</h1>
  </div>
*/

// 04 - Ciando classe
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nome: Daniel Almeida de Freitas</h1>
        <h1>Curso: Engenharia de Software</h1>
        <h1>Disciplina: Desenvolvimento de Software para Web</h1>
      </div>
    )
  }
}*/


export default App;
