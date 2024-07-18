import { useState } from 'react';

function AddTodo({ addtodo }) {
    const [inputText, setInputText] = useState('');

    const addTodo = () => {
        if (inputText.trim()) {
            addtodo({ todoText: inputText });
            setInputText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                placeholder="Add Todo"
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default AddTodo;
