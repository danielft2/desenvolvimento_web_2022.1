import { Component, useState } from 'react';
import './App.css';

// import IMC from './components/imc/IMC';
// import IMCClasse from './components/imc/IMCClasse';
// import Pai from './components/filhopai/Pai';
// import CidadeSimples from './components/cidades/CIdadeSimples';
// import CidadeComClasse from './components/cidades/CidadeComClasse';
// import World from './components/atividade02/components/World';
// import Arena from './components/atividade02/components/Arena';
// import Hero from './components/atividade02/components/Hero';
// import Enemy from './components/atividade02/components/Enemy';
import Contador from './components/hooks/Contador';

function App() {
  return (
    <div className='App'>
      <Contador/>
    </div>
  )
}

//Atividade 2
/*function App() {
  return (
    <div className='App'>
      <div className='App-item'>
        <World>
          <Arena arena="Old Trafod">
            <Hero nome="Daniel Almeida"/>
            <Enemy nome="Pedro Junior"/>
          </Arena>
          <Arena arena="Alianz Parque">
            <Hero nome="João Lucas"/>
            <Enemy nome="Leticia"/>
          </Arena>
        </World>
      </div>
    </div> 
  )
}*/

/*function App() {
  return (
    <div>
      <Casa>
        <Personagem nome="Arya" casa="Stark"/>
        <Personagem nome="Tyrion" casa="Lennister"/>
        <Personagem nome="Jonh" casa="Stark"/>
      </Casa>
    </div>
  )
}
*/

//Props nos childrens
/*function App() {
  return (
    <div>
      <Casa casa="Stark" horario="nobre">
        <Personagem nome="Arya"/>
        <Personagem nome="Tyrion"/>
        <Personagem nome="Jonh"/>
      </Casa>
    </div>
  )
}*/

export default App;
