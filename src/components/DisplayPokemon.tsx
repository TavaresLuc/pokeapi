import Pokemon from "./FetchData";
import './card.css'



const DisplayPokemon = ({pokemon}: any) => {
    return (
        <div className="card">
          <div className="cardbox"> 
            {
                pokemon.map((value: any, id: any) => {
                
                //    console.log(val.name);
                    return <Pokemon key={id} thisPokemon={value}/>

                })
            }
           </div>
        </div>
    )
    
}

export default DisplayPokemon;