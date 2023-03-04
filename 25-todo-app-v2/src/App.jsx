import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosAction from './components/Todos/TodosAction';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([newTodo, ...todos]);
  };

  const removeTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompleatedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosAction
          resetTodos={resetTodosHandler}
          deleteCompleatedTodos={deleteCompleatedTodosHandler}
          completedTodosExist={!!completedTodoCount}
        />
      )}
      <TodoList
        todos={todos}
        removeTodo={removeTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedTodoCount && (
        <h2>
          {`You have completed ${completedTodoCount} ${
            completedTodoCount > 1 ? 'todos' : 'todo'
          }!`}
        </h2>
      )}
    </div>
  );
}

export default App;
