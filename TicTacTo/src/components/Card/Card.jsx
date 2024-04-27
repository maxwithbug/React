import Icon from "../icon/Icon";
import './Card.css'

function Card({player ,onplay , index , gameEnd}){
    let icon = <Icon/> 
    if(player == 'X'){
        icon = <Icon name= 'cross'/>
    }
    if(player == 'O'){
        icon = <Icon name= 'circle'/>
    }
    return(
        <>
        <div  className="Card" onClick={()=> !gameEnd && player=="" && onplay(index)}>
            {icon}
        </div>
        </>
    )
}



export default Card