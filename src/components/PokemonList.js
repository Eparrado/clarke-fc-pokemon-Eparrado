import React, { Component } from 'react';
import PokemonItem from './PokemonItem';

const API = 'https://pokeapi.salestock.net/api/v2/pokemon?limit=25';

class PokemonList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonStore : [],
      filter : ''
    }
  }

  componentDidMount () {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokemonStore : data.results
        });
      });
  }

  render(){
    const {pokemonStore} = this.state;
    const filterList = pokemonStore.filter((pokemon) => pokemon.name.toLowerCase().includes(this.state.filter.toLowerCase()));

    return(
      <ul className="pokemon-list">
        {filterList.map((pokemon,index) =>
          <PokemonItem
            key={pokemon.name}
            id={index+1}
            pokemon={pokemon}
            />
        )}
      </ul>
    )};
}


export default PokemonList;
