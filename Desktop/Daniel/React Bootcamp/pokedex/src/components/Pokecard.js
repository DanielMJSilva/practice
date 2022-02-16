import React, { Component } from 'react';
import './Pokecard.css';


  const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


function paddingZero(id){
   const numToString = String(id);
   const paddedValue = Number(numToString.padStart(3, '0'));
   return paddedValue;
}

function pokeImage (id) {
    return `${POKE_API}${paddingZero(id)}.png`;
}

function randomPoke() {
    return Math.floor(Math.random*898);
}



class Pokecard extends Component {
    render() {
        let imgSRC = `${POKE_API}${this.props.id}.png`
        return (
            <div className='Pokecard'>
                <h1>{this.props.name}</h1>
                <img  src={imgSRC} alt=""/>
                <h3>{this.props.type}</h3>
                <h3>{this.props.exp}</h3>
            </div>
        );
    }
}

export default Pokecard;



