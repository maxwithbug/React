import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo.jsx';

function TodoList({ todofinish, todoedit, tododelete }) {
    const todos = useSelector(state => state.todo.todoList);

    const handleFinishedChange = (id, isFinished) => {
        todofinish({ id, completed: isFinished });
    };

    const handleDelete = (id) => {
        tododelete({ id });
    };

    const handleEdit = (id, todoText) => {
        todoedit({ id, todoText });
    };

    return (
        <div>
            {todos.length > 0 && todos.map(item => (
                <Todo
                    isFinished={item.completed}
                    key={item.id}
                    TodoData={item.text}
                    id={item.id}
                    changedFinished={(isFinished) => handleFinishedChange(item.id, isFinished)}
                    onDelete={() => handleDelete(item.id)}
                    onEdit={(todoText) => handleEdit(item.id, todoText)}
                />
            ))}
        </div>
    );
}

export default TodoList;
