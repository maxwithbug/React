// using react icons library
import { FaPen, FaRegCircle  , FaRegTimesCircle} from "react-icons/fa";

function Icon({name}){
        if(name == 'circle'){
            return <FaRegCircle  />
        }
        if(name == 'cross'){
            return <FaRegTimesCircle />
        }else{
            return <FaPen />
        }
    }

export default Icon 