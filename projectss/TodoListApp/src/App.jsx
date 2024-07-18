import './App.css';
import AddTodo from "../AddTodo/AddTodo.jsx";
import TodoList from "../TodoList/TodoList.jsx";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, editTodo, deleteTodo, finishTodo } from "../slices/TodoSlice.js";

function App() {
    const dispatch = useDispatch();
    const actions = bindActionCreators({ addTodo, editTodo, deleteTodo, finishTodo }, dispatch);

    return (
        <>
            <h1>Todo List</h1>
            <AddTodo addtodo={actions.addTodo} />
            <TodoList todofinish={actions.finishTodo} todoedit={actions.editTodo} tododelete={actions.deleteTodo} />
        </>
    );
}

export default App;
