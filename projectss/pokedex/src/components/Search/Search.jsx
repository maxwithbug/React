
import './Search.css'


function Search({updateSearchTerm}){

    return(
        <div className='Search-wrapper'>
            <input 
                id="Pokemon-name-search"
                type="text" 
                placeholder="Pokemon name" 
                onChange={(e)=>{
                    updateSearchTerm(e.target.value )
                }}
                />
        </div>
    ) 
}

export default Search