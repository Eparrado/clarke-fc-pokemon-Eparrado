import React, { Component } from 'react';
import PokemonItem from './components/PokemonItem';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonStore : [],
      filter : ''
    };

    this.PokemonFiltered = this.PokemonFiltered.bind(this)

  }

  PokemonFiltered(event){
   this.setState({
     filter: event.target.value.toLowerCase()
   });
 }

  componentDidMount () {
    for (let id = 1; id <= 25; id++)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      let pokemonJson = this.state.pokemonStore;
        pokemonJson.push(data)
        this.setState({
        pokemonStore : pokemonJson
      });
    });
  }

  printPokemons () {
    let pokemon = this.state.pokemonStore.filter(pokemons => pokemons.name.toLowerCase().includes(this.state.filter));

    return(
      <ul className="pokemon-list">
        {pokemon.sort((a,b) => a.id - b.id).map((pokemons, index) =>
          <li key={index} >
            <PokemonItem
              key={index}
              id={pokemons.id}
              name={pokemons.name}
              types= {pokemons.types.map((t) => t.type.name)}
              />
          </li>
        )}
      </ul>
    );}

  render() {
    return (
    <div className="App">
      <div className="introduction">
        <img className="pokeball-animation" src="images/pokeball.png" alt="pokeball"/>
        <input className="input-style" type="text" name="buscar" placeholder="Introduce un nombre para buscar" onChange={this.pokemonFiltered}/>
      </div>
      {this.printPokemons()}
    </div>
  );
  }
}

export default App;
