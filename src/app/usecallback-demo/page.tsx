"use client";

import { useState, useCallback, memo } from "react";

const Child = memo(({ onIncrement }: { onIncrement: () => void }) => {
  console.log("Child Rendered");

  return (
    <div className="border p-4 mt-4">
      <h2>Child Component</h2>
      <button
        onClick={onIncrement}
        className="bg-blue-500 text-lack px-4 py-2 rounded"
      >
        Increment Count
      </button>
    </div>
  );
});

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log("Parent Rendered");

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        useCallback + React.memo Demo
      </h1>

      <p className="mb-4">Count: {count}</p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something..."
        className="border p-2"
      />

      <Child onIncrement={handleIncrement} />
    </div>
  );
}