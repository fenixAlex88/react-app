import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const btnTexts = ['Click me 1', 'Click me 2', 'Hit me 3', 'Press me 4'];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <Counter count={count} />
      {btnTexts.map((text, i) => (
        <Button onClick={incrementCount} btnText={text} key={i}/>
      ))}
    </div>
  );
}

export default App;
