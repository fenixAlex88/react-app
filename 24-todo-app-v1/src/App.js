import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHeandler = (todo) => {
    setTodos([todo, ...todos]);
  };
  const removeTodoHeandler = (index) =>
    setTodos(todos.filter((_, i) => i !== index));

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHeandler} />
      <TodoList todos={todos} removeTodo={removeTodoHeandler} />
    </div>
  );
}

export default App;
