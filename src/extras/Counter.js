import { useState, useEffect } from 'react';

var a = 10;
export default function App() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log('unmount', a);
    const x = setInterval(() => {
      a--;
      console.log(a);
      setCount(count - 1);
    }, 1000);
    console.log(x, 'x');
    if (count === 0) {
      clearInterval(x);
    }
    return () => {
      console.log('return', a);
      clearInterval(x);
    };
  }, [count]);

  return <div className="App">{count}</div>;
}
