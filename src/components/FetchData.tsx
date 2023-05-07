import { useEffect, useState} from 'react';
import axios from 'axios';
import './card.css'

const Pokemon = ({thisPokemon}: any) => {

    const [poke, setPoke] = useState<any>({});

    useEffect(() => {

        const getPokemon = (url: any) => {
          axios
            .get(url)
            .then((response) => {
              console.log(response);
              setPoke(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        };
    
        getPokemon(thisPokemon.url);
      }, []); // <-- array de dependências vazio -> Necessary to stop the infinite loop

    //transformar primeira letra em maiúsculo  
    const formattedName = poke.name ? poke.name.charAt(0).toUpperCase() + poke.name.slice(1) : '';

    return (

        <div className="pokeCard">
            
           <p> {formattedName} </p>
           <img className="front-image" src={poke.sprites?.front_default} alt={poke.name} />
           

        </div>

    )
}

export default Pokemon;
