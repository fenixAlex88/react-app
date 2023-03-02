import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = ({ todo, removeTodo, index }) => {
  return (
    <div
      className={styles.todo}
      onDoubleClick={() => {
        removeTodo(index);
      }}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
};

export default Todo;
