import './Info.css'
import styles from './Info.module.css'

console.log(styles);

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>H2 heading in the Info</h2>
      <button className={styles.myOwnButton}>Info button</button>
    </div>
  );
};

export default Info;
