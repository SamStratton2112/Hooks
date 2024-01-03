import { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
// setSelected was passed down via props to update the state of the selected pokemon which updates the value of the url in useAxios state 
function PokemonSelect({ add, setSelected ,pokemon = pokemonList}) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
    setSelected(pokemon[evt.target.value]);
  };
  const handleRandom = ()=>{
    // get random pokemon as selected pokemon
    setSelected(choice(pokemon))
    // add said pokemon to state in parent component 
    add(pokemon)
  }
  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={()=>add(pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => handleRandom()}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
