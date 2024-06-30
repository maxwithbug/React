
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import UsePokemonList from "../../../Hooks/UsePokemonList";

function Pokemonlist(){
    
    const [pokemonListState , SetpokemonListState] = UsePokemonList('https://pokeapi.co/api/v2/pokemon' , false)

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