import axios from "axios";
import './PokemonDetails.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router"

function PokemonDetails(){
    const {id} = useParams()
    console.log(id);
    
    const[pokemon , setPokemon ] = useState({})
    
    async function downloadDetails(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log("res"+ response ? response.data : "noob");
        setPokemon(
            {
                name : response.data.name ,
                image : response.data.sprites.other.dream_world.front_default,
                weight : response.data.weight ,
                height : response.data.height , 
                types : ( response )? response.data.types.map((t)=>{
                    t.type.name
                }) : []

            })
    }

    useEffect(()=>{
        downloadDetails()
    },[])


    return(
        <>
            <div className="pokemon-details-wrapper">
                <img src={pokemon.image} alt="" />
                <div className="pokemon-name"><span>name : {pokemon.name}</span></div>
                <div className="pokemon-height">height : {pokemon.height}</div>
                <div className="pokemon-weight">weight : {pokemon.weight}</div>
                <div className="pokemon-types"> 
                    types : { pokemon.types && pokemon.types.map((t)=> <div key={t}> {t} </div>) } 
                </div>
            </div>
        </>
    )

}

export default PokemonDetails