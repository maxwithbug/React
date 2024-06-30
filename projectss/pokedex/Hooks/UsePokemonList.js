import axios from "axios";
import { useEffect, useState } from "react"


function UsePokemonList(url, type) {
    const [pokemonListState , SetpokemonListState] = useState({
        PokemonList : [],
        isLoanding : true ,
        POKEDEX_URL : url , 
        next_url : '',
        previous_url : '',
        type : type , 
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
        
        if(pokemonListState.type){
            SetpokemonListState((state)=>({
                ...state,
                PokemonList : response.data.pokemon.slice( 0, 5)
            })) 
        }else{
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
}
    

    useEffect(()=>{
        downloadPokemon()
    },[pokemonListState.POKEDEX_URL]) 



    return [
        pokemonListState , 
        SetpokemonListState
    ]
}

export default UsePokemonList