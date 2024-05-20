import { Link } from 'react-router-dom'
import './App.css'
import CustomRout from './Routes/CustomRoute'

function App() {
  return (
    <>
      <div className='outerPokedex'>
      <h1 className="Pokedex-headind">
        <Link to="/">Pokedex</Link>
      </h1>
      <CustomRout/>
      </div>
    </>
  )
}

export default App
