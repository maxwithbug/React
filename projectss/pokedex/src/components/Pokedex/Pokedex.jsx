import {useEffect, useState} from "react"
import Pokemonlist from "../PokemonList/PokemonList"
import Search from "../Search/Search"
//css import
import './Pokedex.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails.jsx";


function Pokedex(){
const [searchTerm , setSearchTerm] = useState('')


    return(
            <div className="Pokedex-wrapper">
                <Search updateSearchTerm = {setSearchTerm}/>
                {searchTerm}
                {(!searchTerm) ? <Pokemonlist /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
            </div>
        )
    }

export default Pokedex