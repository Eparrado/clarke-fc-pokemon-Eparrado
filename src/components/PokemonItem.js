import React, { Component } from 'react';

class PokemonItem extends Component {
  render(){
    return(
      <div className="pokemon-card">
          <img className="pokemon-photo" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt= {this.props.name} />
          <h2 className="pokemon-name">{this.props.name.toUpperCase()}</h2>
          <h3 className="pokemon-id"> {this.props.id.toLocaleString('en-US', {minimumIntegerDigits: 2})}</h3>
          <ul className="pokemon-sublist">
            {this.props.types.map((type, index) =>
              <li key={index} className={`${type.toLowerCase()}`}>
              {type}
              </li>)}
          </ul>
      </div>

    )}
}

export default PokemonItem;
