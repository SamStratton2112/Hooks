import useAxios from "./useAxios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import {useState} from 'react';

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  // store selected pokeon in state
  // use value in in url
  // pass setSelected down to PokemonSelect
  // page renders with pikachu selected so make pikachu initial state
  const [selectedPokemon, setSelectedPokemon] = useState('pikachu')
  // pokemon is an array
  // addPokemon is passed down PokemonSelect
  const [pokemons, addPokemon] = useAxios(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}/`)
  
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} setSelected={setSelectedPokemon}/>
      </div>
      <div className="PokeDex-card-area">
        {pokemons.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
