import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = () =>
{
    const [pokeListState, setPokeListState] = useState([]);

    function listPokemon()
    {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(response => setPokeListState(response.data.results)
            )
            .catch(console.log);
    }
    return (
        <div>
            <button onClick = {listPokemon}>List Pokémon</button>
            <ol>
                {pokeListState.map((pokemon, i) => 
                (
                    <li key = {i}>{pokemon.name}</li>
                ))}
            </ol>
        </div>
    );
}

export default Pokemon;