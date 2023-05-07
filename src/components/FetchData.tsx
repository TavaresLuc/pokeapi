import { useEffect, useState} from 'react';
import axios from 'axios';

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
        
    return (

        <div className="Pics">
            
           <p> {poke.name} </p>
           <img src={poke.sprites?.front_default} alt={poke.name} />
           

        </div>

    )
}

export default Pokemon;