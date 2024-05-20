import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));

//button action 
function afterClick(){
    prompt('well done you clicked a button ')
}
//list 
const listItems = ['mango' ,' banana ', 'orange' , 'apple' , 'pineapple' ]

root.render(
  <React.StrictMode>
    <Person name='rahul' age='22' />
    <Button text='clickMe' onClick={afterClick}  />
    <Header title='some activities'  />
    <List list={listItems}/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
