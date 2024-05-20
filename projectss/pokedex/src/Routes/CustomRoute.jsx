import { Route, Routes } from "react-router-dom"
import Pokedex from "../components/Pokedex/Pokedex"
import PokemonDetails from "../components/PokemonDetails/PokemonDetails"

function CustomRout(){
    return(
        <Routes>
            <Route path="/" element={<Pokedex />}/>
            <Route path="/pokemon/:id" element={<PokemonDetails />}/>
            <Route/>
        </Routes>
    )

}

export default CustomRout


