import { useState } from "react"
import Pokemonlist from "../PokemonList/PokemonList"
import Search from "../Search/Search"
//css import
import './Pokedex.css'

function Pokedex(){
const [searchTerm , setSearchTerm] = useState('')
    return(
            <div className="Pokedex-wrapper">
                <Search updateSearchTerm = {setSearchTerm}/>
                {searchTerm}
                {(searchTerm.length == 0 ) ? <Pokemonlist /> : ""}
            </div>
        )
    }

export default Pokedex