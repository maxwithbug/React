import { useEffect , useState } from "react"
import './PokemonList.css'
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

function Pokemonlist(){

    const [PokemonList ,setPokemonList] = useState([])
    const [isLoanding , setisLoading] = useState([true])
    
    const [POKEDEX_URL,setPOKEDEX_URL ]= useState('https://pokeapi.co/api/v2/pokemon')
    const [next_url , setNexturl] = useState('')    
    const [previos_url , setPrevios_url] = useState('')   
    
    
    async function downloadPokemon(){
        setisLoading(true)
        const response = await axios.get(POKEDEX_URL) //this downloads lisrt of 20 pokemonos
        console.log(response.data);
        setNexturl(response.data.next)
        setPrevios_url(response.data.previous) 


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
        setPokemonList(pokeListResult)
        setisLoading(false)
    }
    
    useEffect(()=>{
        downloadPokemon()
    },[POKEDEX_URL]) //dependency array
    
    
    return(
        <>
            <div className="Pokemon-list-wrapper">
                <div className="pokemon-list-text">PokemonList</div>
                <div className="pokemon-wrapper">{(isLoanding) ? 'loading...' : 
                        PokemonList.map((p)=><Pokemon name ={p.name} image={p.image} key={p.id} id={p.id}/>)
                    }
                </div>
                <div className="controls">
                    <div><button disabled ={previos_url== null} onClick={()=>setPOKEDEX_URL(previos_url)}>Previos</button></div>
                    <div><button disabled ={next_url== null}    onClick={()=>setPOKEDEX_URL(next_url)}>Next</button></div>
                </div>
            </div>
        </>
    )
    
}

export default Pokemonlist