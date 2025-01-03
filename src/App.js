import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const Increment=()=> {
    setCount(count+1)
  }
  const Decrement=()=> {
    setCount(count-1)
  }
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
