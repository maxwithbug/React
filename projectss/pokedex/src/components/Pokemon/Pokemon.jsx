import { Link } from 'react-router-dom'
import './Pokemon.css'

function Pokemon({name , image ,id}){
    return(
            <div className='pokemon'>
                <Link to= {`/pokemon/${id}`}>
                    <div className='pokemon-name-div'> Name : {name} </div>
                    <div className='pokemon-image-div'><img  className='pokemon-image' src={image} alt="" /></div>
                </Link>
            </div>
    )
}

export default Pokemon