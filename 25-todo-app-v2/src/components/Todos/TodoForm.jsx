import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.scss';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const formSubmitHandler = (e) => {
    e.preventDefault();
    text && addTodo(text);
    setText('');
  };
  const inputChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          onChange={inputChangeHandler}
          value={text}
        ></input>
        <Button type="submit" title="Submit">Submit</Button>
      </form>
    </div>
  );
};

export default TodoForm;
