import { useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = ({thisPokemon}: any) => {

    const [onePokemon, setOnePokemon] = useState<any>({});

    useEffect(() => {
        const getPokemon = (url: any) => {
          axios
            .get(url)
            .then((response) => {
              console.log(response);
              setOnePokemon(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        };
    
        getPokemon(thisPokemon.url);
      }, []); // <-- array de dependências vazio
        
    return (

        <div className="Pics">
            
           <p> {onePokemon.name} </p>
           <img src={onePokemon.sprites?.front_default} alt={onePokemon.name} />
           

        </div>

    )
}

export default Pokemon;