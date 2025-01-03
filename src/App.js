import { useState } from "react"
import Counter from "./Counter"

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
      <Counter title='First counter' count={count}/>
      <Counter title='Second counter' count={count}/>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
