
import './Search.css'
import useDebounce from "../../../Hooks/useDebounce.js";



function Search({updateSearchTerm}){
    const debouncedCallback = useDebounce((e)=>{updateSearchTerm(e.target.value )});


    return(
        <div className='Search-wrapper'>
            <input 
                id="Pokemon-name-search"
                type="text" 
                placeholder="Pokemon name" 
                onChange={debouncedCallback}
                />
            {}
        </div>
    ) 
}

export default Search