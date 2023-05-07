import Pokemon from "./FetchData";


const DisplayPokemon = ({pokemon}: any) => {
    return (
        <div className="names">
          
            {
                pokemon.map((val: any, idx: any) => {
                //  return  <p key={idx}> {val.name} </p>
                    console.log(val.name);
                    return <Pokemon key={idx} thisPokemon={val}/>

                })
            }
        </div>
    )
    
}

export default DisplayPokemon;