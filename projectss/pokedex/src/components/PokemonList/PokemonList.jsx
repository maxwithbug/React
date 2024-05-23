import { useEffect , useState } from "react"
import './PokemonList.css'
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

function Pokemonlist(){
    
    const [pokemonListState , SetpokemonListState] = useState({
        PokemonList : [],
        isLoanding : true ,
        POKEDEX_URL : 'https://pokeapi.co/api/v2/pokemon' , 
        next_url : '',
        previous_url : ''
    })
    
    
    async function downloadPokemon(){
        SetpokemonListState({...pokemonListState ,  isLoanding : true})
        const response = await axios.get(pokemonListState.POKEDEX_URL) //this downloads lisrt of 20 pokemonos
        console.log(response.data);

        SetpokemonListState((state)=>
            ({
                ...state , 
                next_url : response.data.next,
                previous_url : response.data.previous
            })
        )



        const pokemonResults = response.data.results //we get the array of pokemons  from results 
        
        //itrerating over the array of pokemons & using their url , to create a array of promises
        // that will download those 20 pokemons 
        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url)) 

        //passing the array of promises to axios.all (it wo rks like promise.all)
        const pokemonData = await axios.all(pokemonResultPromise) //array of 20 pokemon detailed data      //it's works  only whene all the data is availabe

        //now iterate of the data of each pokemon , and extract id, name , image 
        const pokeListResult = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data
            return {
                    id : pokemon.id ,
                    name : pokemon.name , 
                    image : pokemon.sprites.other.dream_world.front_default , 
                    types: pokemon.types
                }
        })

        console.log(pokeListResult);
        SetpokemonListState((state)=>
            ({
                ...state ,
                PokemonList : pokeListResult,
                isLoanding : false
            })
        )

    }
    
    useEffect(()=>{
        downloadPokemon()
    },[pokemonListState.POKEDEX_URL]) //dependency array
    
    
    return(
        <>
            <div className="Pokemon-list-wrapper">
                <div className="pokemon-list-text">PokemonList</div>
                <div className="pokemon-wrapper">{(pokemonListState.isLoanding) ? 'loading...' : 
                        pokemonListState.PokemonList.map((p)=><Pokemon name ={p.name} image={p.image} key={p.id} id={p.id}/>)
                    }
                </div>
                <div className="controls">
                <div>
                    <button
                    disabled={pokemonListState.previous_url === null}
                    onClick={() => {
                        SetpokemonListState({ ...pokemonListState, POKEDEX_URL: pokemonListState.previous_url });
                    }}
                    >
                    Previous
                    </button>
                </div>
                <div>
                    <button
                    disabled={pokemonListState.next_url === null}
                    onClick={() => {
                        SetpokemonListState({ ...pokemonListState, POKEDEX_URL: pokemonListState.next_url });
                    }}
                    >
                    Next
                    </button>
                </div>
                </div>

            </div>
        </>
    )
    
}

export default Pokemonlist