import React, { Component } from 'react';
import './Pokecard.css';


//   const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API =  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let paddingZero = (id) => (id <= 999 ? `00${id}`.slice(-3) : id)

class Pokecard extends Component {
    render() {
        let imgSRC = `${POKE_API}${paddingZero(this.props.id)}.png`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <div className='Pokecard-image'>
                    <img  src={imgSRC} alt={this.props.name}/>
                </div>
                <h3 className='Pokecard-data'>Type: {this.props.type}</h3>
                <h3 className='Pokecard-data'>EXP: {this.props.exp}</h3>
            </div>
        );
    }
}

export default Pokecard;



