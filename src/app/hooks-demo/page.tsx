"use client";

import { memo, useCallback, useMemo, useState } from "react";

const Child = memo(({ onIncrement }: { onIncrement: () => void }) => {
  console.log("🔵 Child Rendered");

  return (
    <div className="border p-4 rounded mt-4">
      <h2 className="font-bold">Child Component</h2>

      <button
        onClick={onIncrement}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Increment Count
      </button>
    </div>
  );
});

export default function HooksDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("🟢 Parent Rendered");

  // useCallback Example
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // Expensive Calculation
  const expensiveCalculation = (num: number) => {
    console.log("🔥 Expensive Calculation Running");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += 1;
    }

    return result + num;
  };

  // useMemo Example
  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        useMemo + useCallback + memo Demo
      </h1>

      <div className="space-y-4">
        <p className="text-lg">
          Count: <strong>{count}</strong>
        </p>

        <p className="text-lg">
          Calculated Value: <strong>{calculatedValue}</strong>
        </p>

        <input
          type="text"
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <p>Input Value: {text}</p>

        <Child onIncrement={handleIncrement} />
      </div>
    </div>
  );
}