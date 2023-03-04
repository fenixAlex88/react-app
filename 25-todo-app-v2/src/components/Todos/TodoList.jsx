import styles from './TodoList.module.scss';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
