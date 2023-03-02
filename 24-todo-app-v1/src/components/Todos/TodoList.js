import styles from './TodoList.module.css';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} removeTodo={removeTodo} />
        ))
      )}
    </div>
  );
};

export default TodoList;
