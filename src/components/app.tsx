import React, { useState, useEffect } from 'react';

type Props = {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (newValue: number) => void;
};

const MyCounter = ({ value = 0, min = -Infinity, max = Infinity, onChange }: Props) => {
  const [count, setCount] = useState<number>(() => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  });

  const increment = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  const reset = () => {
    setCount(value);
    onChange?.(value);
  };

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <div>
      <button onClick={decrement} aria-label="decrement" disabled={count <= min}>-</button>
      <span>{count}</span>
      <button onClick={increment} aria-label="increment" disabled={count >= max}>+</button>
      <button onClick={reset} aria-label="reset">Reset</button>
    </div>
  );
};

export default MyCounter;
