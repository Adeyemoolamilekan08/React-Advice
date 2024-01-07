import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div id="app-container">

      <h3 className="advice-app">React Advice App Using Api</h3>

  
      <h1 id="advice-text">{advice}</h1>
   

      <button id="get-started-button" onClick={getAdvice}>
        Get Started
      </button>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p id="message">
      You have read <strong>{props.count}</strong> Pieces of Advice
    </p>
  );
}
