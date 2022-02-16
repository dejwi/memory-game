import CardContainer from './CardContainer';
import {useState, useEffect} from 'react';

function App() {
  const [score,setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [usedNames,setUsedNames] = useState([]);
  const imgClick = (name) => {
    if (score>bestScore) setBestScore(score);
    if (usedNames.includes(name)) {
      setScore(0);
      setUsedNames([]);
      return;
    }
    setUsedNames([...usedNames,name]);
    setScore(score+1);
  };
  return (
    <div>
      <h2>score: {score}</h2>
      <span>Best: {bestScore}</span>
      <CardContainer click={imgClick} />
      <p>info: dont click on the same picture twice!</p>
    </div>
  );
}

export default App;
