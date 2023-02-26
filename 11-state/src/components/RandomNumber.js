import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';

export default function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  return (
    <div>
      <h1>{randomNum}</h1>
      <button
        onClick={() => {
          setRandomNum(generateRandomNum(maxNum));
        }}
      >
        Generate new random number
      </button>
    </div>
  );
}
