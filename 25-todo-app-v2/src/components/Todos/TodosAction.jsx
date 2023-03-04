import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.scss';


function TodosAction({
  resetTodos,
  deleteCompleatedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Reset Todos" onClick={() => resetTodos()}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed Todos"
        onClick={() => deleteCompleatedTodos()}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;
