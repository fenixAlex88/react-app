import {
  RiDeleteBack2Fill,
  RiDeleteBack2Line,
  RiDeleteBin2Fill,
  RiTodoFill,
} from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.scss';

const Todo = ({ todo: { id, text, isCompleted }, removeTodo, toggleTodo }) => {
  return (
    <div
      className={        `${styles.todo}  ${isCompleted ? styles.completedTodo :''}`      }
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
      <RiDeleteBin2Fill
        className={styles.deleteIcon}
        onClick={() => {
          removeTodo(id);
        }}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => {
          toggleTodo(id);
        }}
      />
    </div>
  );
};

export default Todo;
