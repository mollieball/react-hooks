import React, { useState, useEffect } from "react";

function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>
        Input Number{" "}
        <input
          name="counter"
          type="number"
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
      </p>

      <p> The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>> +1</button>
      <button onClick={() => setCount(count - 1)}>> -1</button>
    </div>
  );
}

export default Counter;
