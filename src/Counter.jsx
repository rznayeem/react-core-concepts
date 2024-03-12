import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: '2px solid white', borderRadius: '15px' }}>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Add</button>
    </div>
  );
}
