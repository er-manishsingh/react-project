import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(20);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-white">data:{data}</h1>
      <h1 className="text-3xl font-bold underline text-white">count:{count}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        update Count
      </button>{" "}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setData(data * 2)}
      >
        update Data
      </button>{" "}
    </div>
  );
}

export default App;
