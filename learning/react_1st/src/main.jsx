import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Image from './image.jsx'
import DogCard from './DogCard.jsx'
import {Count , Todo, TodoList} from './useState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/><br />
    <Count/><br />
    <Todo/><br />
    <TodoList/>
  </React.StrictMode>,
)



