import React, { Component } from 'react';

class PokemonItem extends Component {
  render(){
    const {pokemon,id} = this.props;
    return(
      <li className="pokemon-card">
          <img className="pokemon-photo" src={`images/${id}.png`} alt={`images/${id}.png`} />
          <h2 className="pokemon-name">{pokemon.name}</h2>
      </li>

    )}
}

export default PokemonItem;
