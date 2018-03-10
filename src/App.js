import React, { Component } from 'react';
import PokemonList from './components/PokemonList';



class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="introduction">
        <img className="pokeball-animation" src="images/pokeball.png" alt="pokeball"/>
        <input className="input-style" type="text" name="buscar" placeholder="Introduce un nombre para buscar"/>
      </div>
      <PokemonList />
    </div>
  );
  }
}

export default App;
