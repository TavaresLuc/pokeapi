import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayPokemon from './components/DisplayPokemon';


function App() {

  interface Pokemon {
    name: string;
    url: string;
  }
  
  const [pokemon, setPokemon] = useState<Pokemon[]>([  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1" }]);
  

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
        console.log(response);
        setPokemon(response.data.results);
    })
    .catch((err) => {
        console.log('Pokemons not found', err);
    })
  }

  useEffect(() => {
    getPokemons();
  }, []);
    
  
  return (
    <div className='container'>
      <h1> PokeAPI </h1>
      <p> <DisplayPokemon pokemon={pokemon} />
      
      </p>
      

    </div>
  )
 
}

export default App
