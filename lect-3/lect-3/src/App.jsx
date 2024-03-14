import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/*
We will learn about the useState hook.
1. React hooks are the functions which help us to utilize the functions within the components 
of React.

2. useState() provides us with a function which provides the 
state (count) and updates the state using another function 
setCount,initially the count is set to zero which can be changed.
*/
function App() {
  const [count, setCount] = useState(2);

  return (
    <>
      <div>The count is {count}</div>
      <button
        onClick={() => {
          setCount(count ** 2);
        }}
      >
        Update Count
      </button>
    </>
  );
}

export default App;
